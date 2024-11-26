let formul = document.getElementById("formul");
let btnAddJoueur = document.getElementById("btn-add-joueur");
let currentCard = null; 

let inputNom = document.getElementById("name");
let inputPhoto = document.getElementById("photo");
let inputNationality = document.getElementById("nationality");
let inputFlag = document.getElementById("flag");
let inputClub = document.getElementById("club");
let inputLogo = document.getElementById("logo");
let inputRating = document.getElementById("rating");
let inputPace = document.getElementById("pace");
let inputShooting = document.getElementById("shooting");
let inputPassing = document.getElementById("passing");
let inputDribbling = document.getElementById("dribbling");
let inputDefending = document.getElementById("defending");
let inputPhysical = document.getElementById("physical");

function openForm(event) {
    formul.style.display = "block";
    currentCard = event.currentTarget; 
    console.log( currentCard)
}
function addJoueur(event) {
    if (!currentCard) return;

    let playerNameElement = currentCard.querySelector(".nom-jouer h5");
    if (playerNameElement) {
        playerNameElement.textContent = inputNom.value;
    }
    let photoElement = currentCard.querySelector(".card-imag-jouer");
    if (photoElement) {
        photoElement.style.backgroundImage = `url(${inputPhoto.value})`; 
    }

    let nationalityElement = currentCard.querySelector(".drapeau-natiolnalite img");
    if (nationalityElement) {
        nationalityElement.src = inputFlag.value;
    }
    let flagElement = currentCard.querySelector(".drapeau-flag img");
    if (flagElement) {
        flagElement.src = inputFlag.value;
    }

    let ratingElement = currentCard.querySelector(".number");
    if (ratingElement) {
        ratingElement.textContent = inputRating.value;
    }

    let statsElements = currentCard.querySelectorAll(".condition-physique-nomber");
    if (statsElements.length >= 6) {
        statsElements[0].textContent = inputPace.value;
        statsElements[1].textContent = inputShooting.value;
        statsElements[2].textContent = inputPassing.value;
        statsElements[3].textContent = inputDribbling.value;
        statsElements[4].textContent = inputDefending.value;
        statsElements[5].textContent = inputPhysical.value;
    }

    formul.style.display = "none";
    document.getElementById("player-form").reset();
}
