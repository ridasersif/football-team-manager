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
    currentCard = event.currentTarget;
    if ( currentCard.querySelector(".nom-jouer h5").textContent=='') {
       document.getElementById('btnUpdetJoueur').style.display="none"
       document.getElementById('btnDeleteJoueur').style.display="none"
        document.getElementById('btnAddJoueur').style.display="block"

        
    }else{
        document.getElementById('btnUpdetJoueur').style.display="block"
       document.getElementById('btnDeleteJoueur').style.display="block"
       document.getElementById('btnAddJoueur').style.display="none"

       inputNom.value = currentCard.querySelector(".nom-jouer h5").textContent;
       inputPhoto.value = currentCard.querySelector(".card-imag-jouer").style.backgroundImage.slice(5, -2);
       inputNationality.value = currentCard.querySelector(".drapeau-natiolnalite img").src;
       inputLogo.value = currentCard.querySelector(".drapeau-flag img").src;
       inputRating.value = currentCard.querySelector(".number").textContent;

       let statsElements = currentCard.querySelectorAll(".condition-physique-nomber");
       inputPace.value = statsElements[0].textContent;
       inputShooting.value = statsElements[1].textContent;
       inputPassing.value = statsElements[2].textContent;
       inputDribbling.value = statsElements[3].textContent;
       inputDefending.value = statsElements[4].textContent;
       inputPhysical.value = statsElements[5].textContent;
    }
    formul.style.display = "block";
}
function hideForm(){
    formul.style.display = "none";
    document.getElementById("player-form").reset();
}
if(i=20)
function addJoueur() {
    let statsElements = currentCard.querySelectorAll(".condition-physique-nomber");
    if (!inputNom.value || !inputPhoto.value
        || !inputNationality.value || !inputLogo.value
        || !inputRating.value || !inputPace.value 
        || !inputShooting.value || !inputPassing.value 
        || !inputDribbling.value || !inputDefending.value 
        || !inputPhysical.value) {
        alert("Veuillez compléter tous les champs.");
        return;
    }
    let playerNameElement = currentCard.querySelector(".nom-jouer h5");
    playerNameElement.textContent = inputNom.value;
    let photoElement = currentCard.querySelector(".card-imag-jouer");
    photoElement.style.backgroundImage = `url(${inputPhoto.value})`;
    let nationalityElement = currentCard.querySelector(".drapeau-natiolnalite img");
    nationalityElement.src = inputNationality.value;
    let logoElement = currentCard.querySelector(".drapeau-flag img");
    logoElement.src = inputLogo.value;
    let ratingElement = currentCard.querySelector(".number");
    ratingElement.textContent = inputRating.value;
    
    statsElements[0].textContent = inputPace.value;
    statsElements[1].textContent = inputShooting.value;
    statsElements[2].textContent = inputPassing.value;
    statsElements[3].textContent = inputDribbling.value;
    statsElements[4].textContent = inputDefending.value;
    statsElements[5].textContent = inputPhysical.value;
  
    hideForm()
}
function updetJoueur(){
    addJoueur()
    hideForm()

}

function deleteJoueur(){
    currentCard.querySelector(".nom-jouer h5").textContent=''
    formul.style.display = "none";
    document.getElementById("player-form").reset();
}