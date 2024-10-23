// Récupérer les éléments des modales
const modal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.querySelector('.close');

const signupModal = document.getElementById('signupModal');
const viewSinglesBtn = document.getElementById('viewSinglesBtn');
const closeSignupBtn = document.querySelector('.close-signup');
const signupForm = document.getElementById('signupForm');
const birthdateInput = document.getElementById('birthdate');
const errorMessageContainer = document.getElementById('error-message');

// Quand l'utilisateur clique sur le bouton Login, on affiche la modale
loginBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Quand l'utilisateur clique sur le X, on ferme la modale de connexion
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Quand l'utilisateur clique sur le bouton "Voir les célibataires", on affiche la modale d'inscription
viewSinglesBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
});

// Quand l'utilisateur clique sur le X, on ferme la modale d'inscription
closeSignupBtn.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

// Quand l'utilisateur clique en dehors de la modale, on la ferme
window.addEventListener('click', (event) => {
    if (event.target === modal || event.target === signupModal) {
        modal.style.display = 'none';
        signupModal.style.display = 'none';
    }
});

// Fonction pour vérifier l'âge à partir de la date de naissance
function validateAge() {
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    const minimumAgeDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()); // Minimum 18 ans

    if (birthdate > minimumAgeDate) {
        errorMessageContainer.textContent = "Vous devez avoir au moins 18 ans pour vous inscrire.";
        return false;
    }
    return true;
}

// Soumission du formulaire d'inscription
signupForm.addEventListener('submit', (event) => {
    // Réinitialiser le message d'erreur
    errorMessageContainer.textContent = '';

    // Vérification de l'âge
    if (!validateAge()) {
        event.preventDefault(); // Empêche la soumission si l'âge est invalide
    }
});

// Sélection des éléments du DOM pour les âges
const minAgeSelect = document.getElementById('minAge');
const maxAgeSelect = document.getElementById('maxAge');

// Fonction pour générer les options pour les âges
function populateAgeOptions() {
    for (let i = 18; i <= 80; i++) {
        const optionMin = document.createElement('option');
        optionMin.value = i;
        optionMin.text = i;
        minAgeSelect.appendChild(optionMin);

        const optionMax = document.createElement('option');
        optionMax.value = i;
        optionMax.text = i;
        maxAgeSelect.appendChild(optionMax);
    }

    // Initialiser avec des valeurs par défaut
    minAgeSelect.value = 35;
    maxAgeSelect.value = 39;

    // Désactiver les options max initialement inférieures à 35
    updateMaxAgeOptions(35);
}

// Mise à jour des options d'âge maximal en fonction de l'âge minimal sélectionné
function updateMaxAgeOptions(minAge) {
    for (let option of maxAgeSelect.options) {
        option.disabled = parseInt(option.value) <= minAge;
    }

    // Si l'âge max sélectionné est inférieur à minAge, ajuster l'âge max
    if (parseInt(maxAgeSelect.value) <= minAge) {
        maxAgeSelect.value = minAge + 1;
    }
}

// Restreindre l'âge maximal lorsque l'âge minimal change
minAgeSelect.addEventListener('change', function () {
    const minAge = parseInt(this.value);
    updateMaxAgeOptions(minAge);
});

// Restreindre l'âge minimal lorsque l'âge maximal change
maxAgeSelect.addEventListener('change', function () {
    const maxAge = parseInt(this.value);
    const minAge = parseInt(minAgeSelect.value);

    // Ajuster l'âge min si nécessaire (pour éviter un min supérieur ou égal à max)
    if (maxAge <= minAge) {
        minAgeSelect.value = maxAge - 1;
        updateMaxAgeOptions(minAgeSelect.value);
    }
});

// Appeler la fonction pour remplir les options au chargement de la page
populateAgeOptions();
