import express from 'express';
import authenticateToken from '../middleware/auth.middleware.js';

const router = express.Router();

// Route protégée : Tableau de bord
router.get('/dashboard', authenticateToken, (req, res) => {
  // Accès autorisé, afficher la page
  res.render('dashboard', { user: req.user });
});

export default router;