# 💘 Site de Rencontre

## 📝 Description

Ce projet est un site de rencontre développé avec une architecture **fullstack**. Il permet aux utilisateurs de :
- Créer un compte
- Se connecter
- Consulter des profils
- Interagir avec d'autres membres

L'objectif est de fournir une plateforme sécurisée et intuitive pour favoriser les rencontres.

## 🚀 Installation

### 🔧 Prérequis

- **Node.js** (version 14 ou supérieure)
- **npm** (ou **Yarn**)
- **MySQL**

### 📦 Étapes d'installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/ton-utilisateur/nom-du-repo.git
   cd nom-du-repo

2. **Installer les dépendances**

Avec npm :

npm install

Ou avec Yarn :

yarn install

3. **Configurer les variables d'environnement**

Crée un fichier .env à la racine du projet et ajoute les variables suivantes :

DB_HOST='localhost'
DB_USER='votre-utilisateur-db'
DB_PASSWORD='votre-mot-de-passe-db'
DB_NAME='nom-de-votre-bdd'
DB_PORT='3306'
JWT_SECRET='votre-clé-secrète-pour-les-jwt'
PORT='votre-port-sur-lequel-le-serveur-va-tourner'


4. **Lancer le serveur**

Avec npm :

npm start

Ou avec Yarn :

yarn dev

Le serveur backend sera disponible à l'adresse suivant le port sélectionné : http://localhost:PORT.

✨ Fonctionnalités
Inscription et Connexion : Authentification sécurisée via JWT.
Consultation de Profils : Visualise les profils d'autres utilisateurs.
Matchmaking : Trouve des correspondances basées sur tes critères.