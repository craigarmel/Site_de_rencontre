let frigoOuvert = true;
let likedProfiles = [];
let initialX = null; 
let dernierProfil = {};

const toggleSwitch = document.getElementById('mode-switch');
const body = document.body;

toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    
    if (document.querySelector('.header')) document.querySelector('.header').classList.toggle('dark-mode');
    if (document.querySelector('.fridge-container')) document.querySelector('.fridge-container').classList.toggle('dark-mode');
    if (document.querySelector('.freezer')) document.querySelector('.freezer').classList.toggle('dark-mode');
    if (document.querySelector('.fridge')) document.querySelector('.fridge').classList.toggle('dark-mode');
    if (document.querySelector('.door')) document.querySelector('.door').classList.toggle('dark-mode');
    if (document.querySelector('.freezer-door')) document.querySelector('.freezer-door').classList.toggle('dark-mode');
    
    document.querySelectorAll('.like-button').forEach(button => button.classList.toggle('dark-mode'));
    document.querySelectorAll('.pass-button').forEach(button => button.classList.toggle('dark-mode'));
});


// Fonction pour ouvrir/fermer le frigo
function ouvrirFermerFrigo() {
const porteFrigo = document.getElementById('porteFrigo');
if (frigoOuvert) {
    porteFrigo.classList.remove('porte-frigo-ouverte');
    porteFrigo.classList.add('porte-frigo-fermee');
    frigoOuvert = false;
    setTimeout(() => {
        likedProfiles.push({
            name: document.getElementById('profile-name').textContent,
            img: document.getElementById('profile-img').src,
            details: document.getElementById('profile-details').textContent
        });
        changerProfil();
    }, 800);
    setTimeout(() => {
        porteFrigo.classList.remove('porte-frigo-fermee');
        porteFrigo.classList.add('porte-frigo-ouverte');
        frigoOuvert = true;
    }, 1250);
}
}

// Fonction pour "Pass" un profil (changer de profil sans ajouter aux likes)
function passProfil() {
const porteFrigo = document.getElementById('porteFrigo');
if (frigoOuvert) {
    porteFrigo.classList.remove('porte-frigo-ouverte');
    porteFrigo.classList.add('porte-frigo-fermee');
    frigoOuvert = false;
    setTimeout(() => {
        changerProfil(); 
    }, 800);
    setTimeout(() => {
        porteFrigo.classList.remove('porte-frigo-fermee');
        porteFrigo.classList.add('porte-frigo-ouverte');
        frigoOuvert = true;
    }, 1250);
}
}

// Fonction pour liker le profil (Like)
function likeProfil() {
const porteFrigo = document.getElementById('porteFrigo');
if (frigoOuvert) {
    porteFrigo.classList.remove('porte-frigo-ouverte');
    porteFrigo.classList.add('porte-frigo-fermee');
    frigoOuvert = false;
    setTimeout(() => {
        const profileName = document.getElementById('profile-name').textContent;

        // Vérifie si le profil est déjà liké pour éviter les doublons
        if (!likedProfiles.some(profile => profile.name === profileName)) {
            likedProfiles.push({
                name: profileName,
                img: document.getElementById('profile-img').src,
                details: document.getElementById('profile-details').textContent
            });
        }

        changerProfil(); 
    }, 800);
    setTimeout(() => {
        porteFrigo.classList.remove('porte-frigo-fermee');
        porteFrigo.classList.add('porte-frigo-ouverte');
        frigoOuvert = true;
    }, 1250);
}
}


// Fonction pour passer le profil (Pass)
function passProfil() {
const porteFrigo = document.getElementById('porteFrigo');
if (frigoOuvert) {
    porteFrigo.classList.remove('porte-frigo-ouverte');
    porteFrigo.classList.add('porte-frigo-fermee');
    frigoOuvert = false;
    setTimeout(() => {
        changerProfil(); // On change simplement le profil sans l'ajouter aux likes
    }, 800);
    setTimeout(() => {
        porteFrigo.classList.remove('porte-frigo-fermee');
        porteFrigo.classList.add('porte-frigo-ouverte');
        frigoOuvert = true;
    }, 1250);
}
}

// Fonction pour changer de profil
function changerProfil() {
const profiles = [
    { name: "Alex", age: "18 ans", description: "Aime la cuisine et les voyages", img: "https://via.placeholder.com/150", details: "Aime le sport, lire des livres et voyager." },
    { name: "Marie", age: "25 ans", description: "Passionnée de musique et de cinéma", img: "https://via.placeholder.com/150/ff7f50", details: "Joue du piano et adore les films d'action." },
    { name: "Julien", age: "30 ans", description: "Amateur de randonnée et de nature", img: "https://via.placeholder.com/150/20b2aa", details: "Participe à des marathons de montagne." },
    { name: "Sophie", age: "22 ans", description: "Fan de mode et de voyages", img: "https://via.placeholder.com/150/ff6347", details: "Voyage souvent en Europe pour les défilés de mode." },
    { name: "Lucas", age: "26 ans", description: "Geek et passionné de jeux vidéo", img: "https://via.placeholder.com/150/4682b4", details: "Joue à des compétitions d'e-sport." },
    { name: "Elodie", age: "27 ans", description: "Adore les animaux et la nature", img: "https://via.placeholder.com/150/6a5acd", details: "Travaille dans un refuge pour animaux." },
    { name: "Paul", age: "29 ans", description: "Passionné par les voitures et la mécanique", img: "https://via.placeholder.com/150/b22222", details: "Possède une collection de voitures classiques." },
    { name: "Anaïs", age: "24 ans", description: "Fan de fitness et de nutrition", img: "https://via.placeholder.com/150/dc143c", details: "Participe à des compétitions de bodybuilding." },
    { name: "Hugo", age: "23 ans", description: "Amateur de photographie et de design", img: "https://via.placeholder.com/150/00ced1", details: "Photographe freelance dans le milieu artistique." },
    { name: "Léa", age: "21 ans", description: "Passionnée d'architecture et d'art", img: "https://via.placeholder.com/150/daa520", details: "Étudiante en architecture et dessine des plans." },
    { name: "Mathieu", age: "31 ans", description: "Fan de sport extrême et de sensations fortes", img: "https://via.placeholder.com/150/8b0000", details: "Pratique le saut en parachute et le parapente." },
    { name: "Claire", age: "28 ans", description: "Amatrice de cuisine et de pâtisserie", img: "https://via.placeholder.com/150/ff69b4", details: "A une chaîne YouTube de cuisine." },
    { name: "Arthur", age: "32 ans", description: "Passionné de lecture et d'histoire", img: "https://via.placeholder.com/150/32cd32", details: "Écrit des essais sur l'histoire européenne." },
    { name: "Emma", age: "19 ans", description: "Amoureuse des animaux et de la nature", img: "https://via.placeholder.com/150/ff4500", details: "Étudie la biologie animale." },
    { name: "Nicolas", age: "34 ans", description: "Geek et fan de nouvelles technologies", img: "https://via.placeholder.com/150/191970", details: "Développeur passionné par l'intelligence artificielle." },
    { name: "Justine", age: "26 ans", description: "Fan de voyages et de découvertes", img: "https://via.placeholder.com/150/228b22", details: "Blogueuse voyage, visitant des destinations insolites." },
    { name: "Thomas", age: "28 ans", description: "Musicien passionné de guitare", img: "https://via.placeholder.com/150/4169e1", details: "Joue dans un groupe de rock local." },
    { name: "Manon", age: "24 ans", description: "Aime la danse et la peinture", img: "https://via.placeholder.com/150/d2691e", details: "Professeure de danse classique et artiste amateur." },
    { name: "Benoît", age: "33 ans", description: "Fan de cinéma et de séries", img: "https://via.placeholder.com/150/8a2be2", details: "Anime un podcast sur le cinéma." },
    { name: "Céline", age: "27 ans", description: "Passionnée de photographie et de voyages", img: "https://via.placeholder.com/150/ff1493", details: "Fait des photos de paysages autour du monde." },
    { name: "Antoine", age: "22 ans", description: "Fan de jeux de société et de stratégie", img: "https://via.placeholder.com/150/20b2aa", details: "Organise des tournois de jeux de société." },
    { name: "Chloé", age: "25 ans", description: "Amatrice de mode et de couture", img: "https://via.placeholder.com/150/ff8c00", details: "Crée ses propres vêtements et accessoires." },
    { name: "Raphaël", age: "29 ans", description: "Amateur de sports nautiques et de surf", img: "https://via.placeholder.com/150/4682b4", details: "Surfeur professionnel et formateur." },
    { name: "Camille", age: "20 ans", description: "Aime la nature et le yoga", img: "https://via.placeholder.com/150/2e8b57", details: "Pratique le yoga en plein air chaque jour." },
    { name: "Maxime", age: "31 ans", description: "Fan de musique électronique et DJ", img: "https://via.placeholder.com/150/6495ed", details: "Mixe dans des clubs et festivals." }
];

const randomIndex = Math.floor(Math.random() * profiles.length);
const profile = profiles[randomIndex];
document.getElementById('profile-img').src = profile.img;
document.getElementById('profile-name').textContent = profile.name;
document.getElementById('profile-age').textContent = `Âge : ${profile.age}`;
document.getElementById('profile-desc').textContent = profile.description;
document.getElementById('profile-details').textContent = profile.details;
}

// Détecter le swipe gauche/droite
function swipeDetect(event) {
const profileContainer = document.getElementById('profile-container');
if (!initialX) {
    initialX = event.touches ? event.touches[0].clientX : event.clientX;
    return;
}

const currentX = event.touches ? event.touches[0].clientX : event.clientX;
const diffX = initialX - currentX;

// Swipe à gauche (pass)
if (diffX > 50) {
    ouvrirFermerFrigo();
}
// Swipe à droite (like)
else if (diffX < -50) {
    ouvrirFermerFrigo();
}

initialX = null; // Réinitialise après le swipe
}

// Ajout des événements tactiles et souris pour swiper
const profileContainer = document.getElementById('profile-container');
profileContainer.addEventListener('touchstart', swipeDetect);
profileContainer.addEventListener('touchmove', swipeDetect);
profileContainer.addEventListener('mousedown', swipeDetect);
profileContainer.addEventListener('mousemove', swipeDetect);

function ouvrirCongelateur(event) {
event.stopPropagation();
const porteCongelateur = document.getElementById('porteCongelateur');
const boutonCongelateur = document.getElementById('boutonCongelateur');
porteCongelateur.classList.remove('porte-congelateur-fermee');
porteCongelateur.classList.add('porte-congelateur-ouverte');
boutonCongelateur.style.display = "none";
}

function fermerCongelateur() {
const porteCongelateur = document.getElementById('porteCongelateur');
const boutonCongelateur = document.getElementById('boutonCongelateur');
if (porteCongelateur.classList.contains('porte-congelateur-ouverte')) {
    porteCongelateur.classList.remove('porte-congelateur-ouverte');
    porteCongelateur.classList.add('porte-congelateur-fermee');
    setTimeout(() => {
        boutonCongelateur.style.display = "block";  
    }, 700);  
}
}

function ouvrirCongelateurEtAfficherLikes(event) {
event.stopPropagation();
const porteCongelateur = document.getElementById('porteCongelateur');
const boutonCongelateur = document.getElementById('boutonCongelateur');

// Ouvre le congélateur
if (porteCongelateur.classList.contains('porte-congelateur-fermee')) {
    porteCongelateur.classList.remove('porte-congelateur-fermee');
    porteCongelateur.classList.add('porte-congelateur-ouverte');
    boutonCongelateur.style.display = "none";
    
    // Affiche les profils likés
    afficherLikedProfiles();
} else {
    // Ferme le congélateur
    porteCongelateur.classList.remove('porte-congelateur-ouverte');
    porteCongelateur.classList.add('porte-congelateur-fermee');
    setTimeout(() => {
        boutonCongelateur.style.display = "block";
    }, 800);
}
}

// Fonction pour afficher les profils likés
function afficherLikedProfiles() {
dernierProfil = {
    name: document.getElementById('profile-name').textContent,
    img: document.getElementById('profile-img').src, 
    description: document.getElementById('profile-desc').textContent,
}

const armoires = document.querySelectorAll('.wardrobe');
    armoires.forEach(armoire => {
        armoire.addEventListener('click', () => {
            armoire.classList.toggle('open');
        });
    });

const fridgeContent = document.getElementById('inside-fridge');
fridgeContent.innerHTML = "";  // Efface le contenu précédent

if (likedProfiles.length > 0) {
    // Création d'une liste pour organiser les profils en colonne
    const ul = document.createElement('ul');
    ul.style.listStyleType = 'none'; 
    ul.style.padding = '0';
    
    likedProfiles.forEach(profile => {
        const li = document.createElement('li');
        li.style.marginBottom = '15px';  
        li.innerHTML = `
            <div class="profile">
                <img src="${profile.img}" alt="Photo de profil" style="width: 75px; height: 75px; border-radius: 50%;">
                <h3>${profile.name}</h3>
            </div>
        `;
        ul.appendChild(li);
    });
    fridgeContent.appendChild(ul);  
} else {
    fridgeContent.innerHTML = "<p>Aucun profil liké.</p>";
}
}


// Fonction pour ouvrir les portes des armoires (menu)
const armoires = document.querySelectorAll('.wardrobe');
armoires.forEach(armoire => {
armoire.addEventListener('click', () => {
    armoire.classList.toggle('open');
});
});

function afficherDescription(type) {
let description;
if (type === 'match') {
    description = "Match";
    document.getElementById('description1').textContent = description;
    document.getElementById('description1').style.display = 'block';
} else if (type === 'Retour') {
    description = "Retour";
    document.getElementById('description2').textContent = description;
    document.getElementById('description2').style.display = 'block';
} else if (type === 'conversation') {
    description = "Conversation";
    document.getElementById('description3').textContent = description;
    document.getElementById('description3').style.display = 'block';
}
}

function cacherDescription() {
document.getElementById('description1').style.display = 'none';
document.getElementById('description2').style.display = 'none';
document.getElementById('description3').style.display = 'none';
}

window.addEventListener('resize', function() {
const minWidth = 1225;
const minHeight = 416;

if (window.innerWidth < minWidth || window.innerHeight < minHeight) {
    // Réinitialise la taille de la fenêtre
    window.resizeTo(minWidth, minHeight);
    alert('La taille minimale de la fenêtre est de 1225 x 416 pixels.');
}
})


function afficherProfilsLikes() {
const porteFrigo = document.getElementById('porteFrigo');
const doorContent = document.querySelector('.door-content'); // Sélectionner le contenu de la porte du frigo

if (frigoOuvert) {
    porteFrigo.classList.remove('porte-frigo-ouverte');
    porteFrigo.classList.add('porte-frigo-fermee');
    frigoOuvert = false;

    // Cache tout le contenu de la porte du frigo (description, âge, détails, etc.)
    doorContent.style.display = 'none';  

    setTimeout(() => {
        const fridgeContent = document.getElementById('inside-fridge');
        fridgeContent.innerHTML = ''; // Efface le contenu précédent

        if (likedProfiles.length > 0) {
            // Créer une liste pour afficher les profils likés
            const ul = document.createElement('ul'); // Créer une liste non ordonnée
            ul.style.listStyleType = 'none';  // Retirer les puces de liste
            ul.style.padding = '0';  // Pas d'espacement par défaut
            ul.style.margin = '0';   // Pas de marge par défaut
            ul.style.display = 'block';  // S'assurer que la liste s'affiche correctement

            // Limiter la hauteur du frigo et permettre le défilement
            fridgeContent.style.maxHeight = '400px';  // Ajuste cette valeur en fonction de la hauteur de ton frigo
            fridgeContent.style.overflowY = 'auto';  // Active le défilement vertical si nécessaire
            fridgeContent.style.paddingRight = '10px';  // Petite marge pour éviter de coller au bord droit
            fridgeContent.style.display = 'block';  // S'assurer que le contenu reste en mode bloc

            // Positionner le contenu en haut au lieu du centre
            fridgeContent.style.alignItems = 'flex-start';  // S'assurer que les éléments sont alignés en haut

            likedProfiles.forEach(profile => {
                const li = document.createElement('li');  // Créer un élément de liste pour chaque profil
                li.style.display = 'flex';  // Utiliser flexbox pour aligner les éléments
                li.style.alignItems = 'center';  // Aligner les éléments verticalement
                li.style.padding = '10px';  // Ajouter du padding autour de chaque élément
                li.style.borderBottom = '1px solid #ccc';  // Séparateur entre les profils
                li.style.marginBottom = '10px';  // Espacement entre les éléments

                li.innerHTML = `
                    <img src="${profile.img}" alt="Photo de profil" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                    <div>
                        <h3 style="margin: 0; font-size: 18px;">${profile.name}</h3>
                        <p style="margin: 0; font-size: 14px; color: #777;">${profile.age} ans</p>
                    </div>
                `;

                ul.appendChild(li);  // Ajouter chaque profil à la liste
            });

            fridgeContent.appendChild(ul);  // Ajouter la liste au contenu du frigo
            fridgeContent.scrollTop = 0;  // Assurer que le scroll commence en haut
        } else {
            fridgeContent.innerHTML = "<p>Aucun profil liké.</p>";
        }

        setTimeout(() => {
            porteFrigo.classList.remove('porte-frigo-fermee');
            porteFrigo.classList.add('porte-frigo-ouverte');
            frigoOuvert = true;

            // Ne pas remettre le contenu de la porte visible après avoir visualisé les profils likés
            doorContent.style.display = 'none';  // Garde les détails cachés en mode Match
        }, 1250);
    }, 800);
}
}

// Fonction pour afficher les profils likés et démarrer une conversation
function afficherConversations() {
const fridgeContent = document.getElementById('inside-fridge');
const doorContent = document.querySelector('.door-content'); 

// Cache le contenu de la porte
doorContent.style.display = 'none'; 
fridgeContent.innerHTML = "";  

// Vérifie s'il y a des profils likés
if (likedProfiles.length > 0) {
    const grid = document.createElement('div');
    grid.classList.add('profile-grid-conversation');

    likedProfiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile-conversation');

        profileDiv.innerHTML = `
            <img src="${profile.img}" alt="Photo de profil">
            <h3>${profile.name}</h3>
            <button onclick="demarrerConversation('${profile.name}')">Démarrer une conversation</button>
        `;

        grid.appendChild(profileDiv);
    });

    fridgeContent.appendChild(grid); 
} else {
    fridgeContent.innerHTML = "<p>Aucun profil liké pour démarrer une conversation.</p>";
}
}


// Fonction pour démarrer une conversation (simulé)
function demarrerConversation(profileName) {
const fridgeContent = document.getElementById('inside-fridge');
fridgeContent.innerHTML = `
    <h2>Conversation avec ${profileName}</h2>
    <div class="chat-window">
        <div id="chat-messages">
            <p><strong>${profileName} :</strong> Salut !</p>
        </div>
    </div>
    <div class="chat-input-container">
        <input type="text" id="message-input" placeholder="Tapez votre message..." />
        <button onclick="envoyerMessage('${profileName}')">Envoyer</button>
    </div>
`;
}

// Fonction pour envoyer un message (simulé)
function envoyerMessage(profileName) {
const input = document.getElementById('message-input');
const message = input.value;
if (message.trim()) {
    const chatMessages = document.getElementById('chat-messages');
    const newMessage = `<p class="my-message"><strong>Vous :</strong> ${message}</p>`;
    chatMessages.innerHTML += newMessage;

    setTimeout(() => {
        const replyMessage = `<p class="others-message"><strong>${profileName} :</strong> Merci pour ton message !</p>`;
        chatMessages.innerHTML += replyMessage;
    }, 1000);
}
}

function retourAuProfil() {
const fridgeContent = document.getElementById('inside-fridge');

// Vérifie que dernierProfil contient des données valides
if (dernierProfil && dernierProfil.name) {
    fridgeContent.innerHTML = `
        <div class="profile" id="profile-container">
            <img src="${dernierProfil.img}" alt="Photo de profil" id="profile-img">
            <h3 id="profile-name">${dernierProfil.name}</h3>
            <p class="profile-description" id="profile-desc">${dernierProfil.description}</p>
        </div>
    `;
    console.log('Profil restauré:', dernierProfil);
} else {
    console.error("Le dernier profil n'est pas valide.");
    fridgeContent.innerHTML = "<p>Erreur lors du retour au profil.</p>";
}
}