import jwt from 'jsonwebtoken'

export const auth = (req, res, next) => {
    const token = req.header('x-auth-token')
    if (!token) return res.status(401).json({ msg: 'Access denied' })
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(400).json({ msg: 'Invalid token' })
    }
    }

export const attachUserToView = (req, res, next) => {
    const token = req.cookies.token; // Récupérer le token JWT du cookie

    if (token) {
      try {
        // Vérifier et décoder le token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
        // Attacher les informations utilisateur à res.locals
        res.locals.user = decoded;  // Par exemple { id, email, username }
      } catch (error) {
        // Si le token est expiré ou invalide, on ne fait rien
        res.locals.user = null;
      }
    } else {
      res.locals.user = null;  // Aucun utilisateur connecté si pas de token
    }
  
    next();
    } 
    