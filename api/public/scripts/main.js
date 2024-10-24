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
        changerProfil(); 
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
        { name: "Nathalie", age: "20 ans", description: "Passionnée de voiture et de GTA V", img: "photos/nathan.jpg", details: "S'aime lui même" },
        { name: "Armel", age: "19 ans", description: "Aime dormir en cours", img: "photos/armel.png", details: "Depuis samedi il dort pas" },
        { name: "Karuran", age: "20 ans", description: "A une seconde vie, vend des Tours Eiffels au champ de mars", img: "photos/karuran.jpg", details: "A pris un 200 dans le crane" },
        { name: "Kevin", age: "19 ans", description: "Est riche", img: "photos/Kevin.jpg", details: "Joue à des compétitions d'e-sport." },
        { name: "Florine", age: "19 ans", description: "Adore les animaux et la nature", img: "photos/florine.jpg", details: "Travaille dans un refuge pour animaux." },
        { name: "Maxime", age: "22 ans", description: "Aime les cours", img: "photos/maxime.png", details: "Possède une collection de voitures classiques." },
        { name: "Pierre-Louis", age: "20 ans", description: "Est amoureux de son PC", img: "photos/pl.png", details: "Est scoot" },
        { name: "Marine", age: "19 ans", description: "Amateur de photographie et de design", img: "photos/marineC.jpg", details: "Photographe freelance dans le milieu artistique." },
        { name: "Marine", age: "19 ans", description: "Passionnée d'architecture et d'art", img: "photos/marineEO.jpg", details: "Étudiante en architecture et dessine des plans." },
        { name: "Marie-Grâce", age: "19 ans", description: "Fan de sport extrême et de sensations fortes", img: "photos/MG.JPG", details: "Pratique le saut en parachute et le parapente." },
        { name: "Cédric", age: "20 ans", description: "Amatrice de cuisine et de pâtisserie", img: "photos/cedric.jpg", details: "A une chaîne YouTube de cuisine." },
        { name: "Joao Gabriel", age: "19 ans", description: "Passionné de lecture et d'histoire", img: "photos/joao.png", details: "Écrit des essais sur l'histoire européenne." },
        { name: "Bastien", age: "19 ans", description: "Amoureuse des animaux et de la nature", img: "photos/bastien.JPG", details: "Étudie la biologie animale." },
        { name: "Yanis", age: "19 ans", description: "Il parait qu'il est tres riche", img: "photos/YanisAB.JPG", details: "Développeur passionné par l'intelligence artificielle." },
        { name: "Titouan", age: "19 ans", description: "Fan de voyages et de découvertes", img: "photos/titouan.JPG", details: "Blogueuse voyage, visitant des destinations insolites." },
        { name: "Rayane", age: "28 ans", description: "Musicien passionné de guitare", img: "photos/rayane.png", details: "Joue dans un groupe de rock local." },
        { name: "Wilhem", age: "24 ans", description: "Aime la danse et la peinture", img: "photos/wilhem.jpeg", details: "Professeure de danse classique et artiste amateur." },
    ];

    let profile;
    do {
        const randomIndex = Math.floor(Math.random() * profiles.length);
        profile = profiles[randomIndex];
    } while (likedProfiles.some(p => p.name === profile.name));

    document.getElementById('profile-img').src = profile.img;
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-age').textContent = `Âge : ${profile.age}`;
    document.getElementById('profile-desc').textContent = profile.description;
    document.getElementById('profile-details').textContent = profile.details;
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
fridgeContent.innerHTML = ""; 

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
const doorContent = document.querySelector('.door-content'); 

if (frigoOuvert) {
    porteFrigo.classList.remove('porte-frigo-ouverte');
    porteFrigo.classList.add('porte-frigo-fermee');
    frigoOuvert = false;
    doorContent.style.display = 'none';  

    setTimeout(() => {
        const fridgeContent = document.getElementById('inside-fridge');
        fridgeContent.innerHTML = '';

        if (likedProfiles.length > 0) {
            const ul = document.createElement('ul'); 
            ul.style.listStyleType = 'none';  
            ul.style.padding = '0'; 
            ul.style.margin = '0';   
            ul.style.display = 'block'; 

            // Limiter la hauteur du frigo et permettre le défilement
            fridgeContent.style.maxHeight = '400px'; 
            fridgeContent.style.overflowY = 'auto';
            fridgeContent.style.paddingRight = '10px';  
            fridgeContent.style.display = 'block';  

            // Positionner le contenu en haut au lieu du centre
            fridgeContent.style.alignItems = 'flex-start'; 

            likedProfiles.forEach(profile => {
                const li = document.createElement('li'); 
                li.style.display = 'flex';  
                li.style.alignItems = 'center'; 
                li.style.padding = '10px'; 
                li.style.borderBottom = '1px solid #ccc';  
                li.style.marginBottom = '10px';  

                li.innerHTML = `
                    <img src="${profile.img}" alt="Photo de profil" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
                    <div>
                        <h3 style="margin: 0; font-size: 18px;">${profile.name}</h3>
                        <p style="margin: 0; font-size: 14px; color: #777;">${profile.age} ans</p>
                    </div>
                `;

                ul.appendChild(li); 
            });

            fridgeContent.appendChild(ul); 
            fridgeContent.scrollTop = 0;  
        } else {
            fridgeContent.innerHTML = "<p>Aucun profil liké.</p>";
        }

        setTimeout(() => {
            porteFrigo.classList.remove('porte-frigo-fermee');
            porteFrigo.classList.add('porte-frigo-ouverte');
            frigoOuvert = true;

            // Ne pas remettre le contenu de la porte visible après avoir visualisé les profils likés
            doorContent.style.display = 'none'; 
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