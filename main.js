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
//****************************************************** */
let inputPace = document.getElementById("pace");
let inputShooting = document.getElementById("shooting");
let inputPassing = document.getElementById("passing");
let inputDribbling = document.getElementById("dribbling");
let inputDefending = document.getElementById("defending");
let inputPhysical = document.getElementById("physical");
//****************************************************** */
let inputDiving = document.getElementById("diving");
let inputHandling = document.getElementById("handling");
let inputKicking = document.getElementById("kicking");
let inputReflexes = document.getElementById("reflexes");
let inputSpeed = document.getElementById("speed");
let inputPositioning = document.getElementById("positioning");


let JoueurText=false;
let x=0;
function openForm(event) {

   
    document.getElementById("feckDiv").style.zIndex="1"
    
    currentCard = event.currentTarget;
    console.log( currentCard)
    if(currentCard.querySelector(".position-number .position").textContent!='GK'){
       document.getElementById("statistiqueJoueur").style.display="block"
       document.getElementById("statistiqueGarde").style.display="none" 
       JoueurText=true;  
     
    }
   
    else{
        document.getElementById("statistiqueJoueur").style.display="none"
        document.getElementById("statistiqueGarde").style.display="block"
       JoueurText=false;
    }

     if ( currentCard.querySelector(".nom-jouer h5").textContent=='') {
        document.getElementById('btnUpdetJoueur').style.display="none"
        document.getElementById('btnDeleteJoueur').style.display="none"
        document.getElementById('btnAddJoueur').style.display="block"
     }else{
        document.getElementById('btnUpdetJoueur').style.display="block"
        document.getElementById('btnDeleteJoueur').style.display="block"
        document.getElementById('btnAddJoueur').style.display="none"
 
        inputNom.value = currentCard.querySelector(".nom-jouer h5").textContent;
        inputPhoto.value = currentCard.querySelector(".card-imag-jouer").style.backgroundImage;
        inputNationality.value = currentCard.querySelector(".drapeau-natiolnalite img").src;
        inputLogo.value = currentCard.querySelector(".drapeau-flag img").src;
        inputRating.value = currentCard.querySelector(".number").textContent;
 
        let statsElements = currentCard.querySelectorAll(".condition-physique-nomber");
        if(JoueurText){
            inputPace.value = statsElements[0].textContent;
            inputShooting.value = statsElements[1].textContent;
            inputPassing.value = statsElements[2].textContent;
            inputDribbling.value = statsElements[3].textContent;
            inputDefending.value = statsElements[4].textContent;
            inputPhysical.value = statsElements[5].textContent;
            console.log("joueur")
         }else{
            inputDiving .value = statsElements[0].textContent;
            inputHandling.value = statsElements[1].textContent;
            inputKicking.value = statsElements[2].textContent;
            inputReflexes.value = statsElements[3].textContent;
            inputSpeed.value = statsElements[4].textContent;
            inputPositioning.value = statsElements[5].textContent;
            console.log("garde")
         }
      
     }
    formul.style.display = "block";
}
function hideForm(){
    formul.style.display = "none";
    document.getElementById("player-form").reset();
     document.getElementById("feckDiv").style.zIndex="-1"
}

function addJoueur() {
    document.getElementById('PositionRemplacant').style.display='none'
    let statsElements = currentCard.querySelectorAll(".condition-physique-nomber");
    if(JoueurText){
        console.log("joueur")
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
    let selectPosition=document.querySelector('#PositionRemplacant select')


    ratingElement.textContent = inputRating.value;
    statsElements[0].textContent = inputPace.value;
    statsElements[1].textContent = inputShooting.value;
    statsElements[2].textContent = inputPassing.value;
    statsElements[3].textContent = inputDribbling.value;
    statsElements[4].textContent = inputDefending.value;
    statsElements[5].textContent = inputPhysical.value;
}else{
    if (!inputNom.value || !inputPhoto.value
        || !inputNationality.value || !inputLogo.value
        || !inputRating.value || !inputDiving.value 
        || !inputHandling.value || !inputKicking.value 
        || !inputReflexes.value || !inputSpeed.value 
        || !inputPositioning.value) {
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
    
    statsElements[0].textContent = inputDiving.value;
    statsElements[1].textContent = inputHandling.value;
    statsElements[2].textContent = inputKicking.value;
    statsElements[3].textContent = inputReflexes.value;
    statsElements[4].textContent = inputReflexes.value;
    statsElements[5].textContent = inputPositioning.value;

     

}
  
    hideForm()
}
function updetJoueur(){
    addJoueur()
}

function deleteJoueur(){
       currentCard.querySelector(".nom-jouer h5").textContent='';
       currentCard.querySelector(".card-imag-jouer").style.backgroundImage= `url()`;
       currentCard.querySelector(".drapeau-natiolnalite img").src="";
       currentCard.querySelector(".drapeau-flag img").src="";
       currentCard.querySelector(".number").textContent='';

       let statsElements = currentCard.querySelectorAll(".condition-physique-nomber");
       statsElements[0].textContent='';
       statsElements[1].textContent='';
       statsElements[2].textContent='';
       statsElements[3].textContent='';
       statsElements[4].textContent='';
       statsElements[5].textContent='';
       hideForm()
     
}
////*********************************/
let drag=null;

function dragPlayerReserv() {
    let cardPlayersReserv = document.querySelectorAll('.cardPlayerReserv'); 
    let cardPlayersPrancipal = document.querySelectorAll('.card'); 

    cardPlayersReserv.forEach(cardPlayerReserv => {
        cardPlayerReserv.addEventListener('dragstart', function () {
            drag = cardPlayerReserv;
            cardPlayerReserv.style.opacity = '0.3';
        });

        cardPlayerReserv.addEventListener('dragend', function () {
            drag = null;
            cardPlayerReserv.style.opacity = '1';
        });
    });

    cardPlayersPrancipal.forEach(cardPlayerPrancipal => {
        cardPlayerPrancipal.addEventListener('dragover', function (e) {
            e.preventDefault(); 
        });

        cardPlayerPrancipal.addEventListener('drop', function () {
            if (!drag) return; 

            let draggedPosition = drag.querySelector('.position').textContent.trim();
            let targetPosition = this.querySelector('.position')?.textContent.trim();

            if (draggedPosition === targetPosition) {
                console.log(`Position matched: ${draggedPosition}`);
                let droppedCard = this.firstElementChild;
                if (droppedCard) {
                    let parentOfDraggedCard = drag.parentElement;
                    this.innerHTML = "";
                    this.append(drag);
                    parentOfDraggedCard.append(droppedCard);
                } else {
                    this.append(drag);
                }
            } else {
                console.log(`Position mismatch: Cannot place ${draggedPosition} in ${targetPosition}`);
            }
        });
    });
}

 
function AjoutRemplacant(){
    x++;
    if (x!=0) {
     document.getElementById('PositionRemplacant').style.display='block'
    
  
    let reserve=document.getElementById('reserve')
    let card=document.getElementById('card').cloneNode(true)
    let selectPosition=document.querySelector('#PositionRemplacant select')
    let  selectValue;
    selectPosition.addEventListener('change',function(){
        if(selectPosition.value=='GK'){
            document.getElementById("statistiqueJoueur").style.display="none"
            document.getElementById("statistiqueGarde").style.display="block" 

           
        }else{
            document.getElementById("statistiqueJoueur").style.display="block"
            document.getElementById("statistiqueGarde").style.display="none"
             
        }
        console.log(selectPosition.value)
        card.querySelector('.position').textContent= selectPosition.value
    
    })
    card.classList.add('cardPlayerReserv')
    card.setAttribute('draggable',"true")
    reserve.appendChild(card)
    document.getElementById
    card.click()
    }
    x=0;
   
}

fetch('players.json')
  .then((response) => response.json())
  .then((players) => {
  
    for (let player of players.players) {
       
        let content = `
        <div onclick="openForm(event)" class="card-imag cardPlayerReserv" draggable="true">
            <div class="card-imag-jouer" style="background-image: url(${player.photo});">
                <div class="position-number">
                    <span class="number">${player.rating}</span>
                    <span class="position">${player.position}</span>
                </div>
            </div>
            <div class="nom-jouer">
                <h5>${player.name}</h5>
            </div>
            <div class="pac-sho-pas-dri-def-phy">
                <div class="condition-physique">
                    <p class="condition-physique-nom">${player.pace ? 'PAC': 'DIV'}</p>
                    <p class="condition-physique-nomber">${player.pace ?? player.diving}</p>
                </div>
                <div class="condition-physique">
                    <p class="condition-physique-nom">${player.shooting ? 'HSO': 'HAN'}</p>
                    <p class="condition-physique-nomber">${player.shooting ?? player.handling}</p>
                </div>
                <div class="condition-physique">
                    <p class="condition-physique-nom">${player.shooting ? 'PAS': 'KIC'}</p>
                    <p class="condition-physique-nomber">${player.passing ?? player.kicking}</p>
                </div>
                <div class="condition-physique">
                    <p class="condition-physique-nom">${player.shooting ? 'DRI': 'REF'}</p>
                    <p class="condition-physique-nomber">${player.dribbling ?? player.reflexes}</p>
                </div>
                <div class="condition-physique">
                    <p class="condition-physique-nom">${player.shooting ? 'DEF': 'SPE'}</p>
                    <p class="condition-physique-nomber">${player.defending ?? player.speed}</p>
                </div>
                <div class="condition-physique">
                    <p class="condition-physique-nom">${player.shooting ? 'PHY': 'POS'}</p>
                    <p class="condition-physique-nomber">${player.physical ?? player.positioning}</p>
                </div>
            </div>
            <div class="les-drapeau">
                <div class="drapeau-natiolnalite">
                    <img src="${player.flag}" alt="">
                </div>
                <div class="drapeau-flag">
                    <img src="${player.logo}" alt="">
                </div>
            </div>
        </div>
        `;
        document.getElementById("reserve").innerHTML += content;
    }
    dragPlayerReserv();
  });

  
