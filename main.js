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


let JoueurTest=false;
let x=0;
function openForm(event) {
     if (x==0) {
     document.getElementById('PositionRemplacant').style.display='none'
     }
    document.getElementById("feckDiv").style.zIndex="1"
    
    currentCard = event.currentTarget;
   console.log(currentCard)
    if(currentCard.querySelector(".position-number .position").textContent!='GK'){
       document.getElementById("statistiqueJoueur").style.display="block"
       document.getElementById("statistiqueGarde").style.display="none" 
       JoueurTest=true;  
     
    }
   
    else{
        document.getElementById("statistiqueJoueur").style.display="none"
        document.getElementById("statistiqueGarde").style.display="block"
       JoueurTest=false;
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
        if(JoueurTest){
            inputPace.value = statsElements[0].textContent;
            inputShooting.value = statsElements[1].textContent;
            inputPassing.value = statsElements[2].textContent;
            inputDribbling.value = statsElements[3].textContent;
            inputDefending.value = statsElements[4].textContent;
            inputPhysical.value = statsElements[5].textContent;
            
         }else{
            inputDiving .value = statsElements[0].textContent;
            inputHandling.value = statsElements[1].textContent;
            inputKicking.value = statsElements[2].textContent;
            inputReflexes.value = statsElements[3].textContent;
            inputSpeed.value = statsElements[4].textContent;
            inputPositioning.value = statsElements[5].textContent;
           
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
    let statsElements = currentCard.querySelectorAll(".condition-physique-nomber");
    if(JoueurTest){

    if (!inputNom.value || !inputPhoto.value
        || !inputNationality.value || !inputLogo.value
        || !inputRating.value || !inputPace.value 
        || !inputShooting.value || !inputPassing.value 
        || !inputDribbling.value || !inputDefending.value 
        || !inputPhysical.value) {
        alert("Veuillez compléter tous les champs.");
        x++;
        if (x!=0) {
         document.getElementById('PositionRemplacant').style.display='block'
         x=0;
        }
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
      if( currentCard.classList.contains('cardPlayerReserv')){
        currentCard.remove()
      }
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

            let draggedPosition = drag.querySelector('.position').textContent;
            let targetPosition = this.querySelector('.position')?.textContent;

            if (draggedPosition === targetPosition) {
                  
                let droppedCard = this.children[0]
                console.log(this)
                console.log(droppedCard)
                if (droppedCard.children[0].children[0].textContent!='') {
                    let parentOfDraggedCard = drag.parentElement;
                    this.innerHTML = "";
                    this.append(drag);
                    parentOfDraggedCard.append(droppedCard);

                } else {
                    this.innerHTML = "";
                    this.append(drag);
                }
            } else {
                
                let positionDiv=document.getElementById('positionDiv');
                positionDiv.innerHTML=''
                positionDiv.style.display='block'
                positionDiv.style.zIndex='2'
            
               document.getElementById('feckDiv').style.zIndex='1'
                let icon=document.createElement('i')
                icon.classList.add('fa-solid','fa-triangle-exclamation');
                let paragraphPosition=document.createElement('p');
                paragraphPosition.innerHTML=`Erreur de position: impossible de placer ${draggedPosition} en ${targetPosition}`
                let btnTestPosition=document.createElement('button');
                btnTestPosition.setAttribute('onclick','hideElement()')
                btnTestPosition.textContent='OK';
                positionDiv.appendChild(icon)
                positionDiv.appendChild( paragraphPosition);
                positionDiv.appendChild( btnTestPosition);
                console.log(positionDiv)
               
            }
        });
    });
}
function hideElement(){ 
    document.getElementById('positionDiv').style.display='none' 
    document.getElementById('feckDiv').style.zIndex='-1'     
} 

function AjoutRemplacant(){
    x++;
    if (x!=0) {
     document.getElementById('PositionRemplacant').style.display='block'
    
    let reserve=document.getElementById('reserve')
    let card=document.getElementById('card').cloneNode(true)
    card.removeAttribute('id')
    let selectPosition=document.querySelector('#PositionRemplacant select')
    
    selectPosition.addEventListener('change',function(){
        if(selectPosition.value=='GK'){
            document.getElementById("statistiqueJoueur").style.display="none"
            document.getElementById("statistiqueGarde").style.display="block" 

           
        }else{
            document.getElementById("statistiqueJoueur").style.display="block"
            document.getElementById("statistiqueGarde").style.display="none"
             
        }
        
        card.querySelector('.position').textContent= selectPosition.value
    })
   
    card.classList.add('cardPlayerReserv')
    card.setAttribute('draggable',"true")
    card.click()
    reserve.appendChild(card)    
    }
   x=0;
}

fetch('players.json')
  .then((response) => response.json())
  .then((players) => {
    for (let player of players.players) {
      let card = document.createElement('div'); 
      card.classList.add('card-imag', 'cardPlayerReserv');
      card.setAttribute('draggable', 'true');
      card.setAttribute('onclick', 'openForm(event)'); 
      let cardImage = document.createElement('div');
      cardImage.classList.add('card-imag-jouer');
      cardImage.style.backgroundImage = `url(${player.photo})`;

      let positionNumber = document.createElement('div');
      positionNumber.classList.add('position-number');

      let number = document.createElement('span');
      number.classList.add('number');
      number.textContent = player.rating;

      let position = document.createElement('span');
      position.classList.add('position');
      position.textContent = player.position;
      
      positionNumber.appendChild(number);
      positionNumber.appendChild(position);
      cardImage.appendChild(positionNumber);

      
      let playerName = document.createElement('div');
      playerName.classList.add('nom-jouer');

      let playerNameText = document.createElement('h5');
      playerNameText.textContent = player.name;

      playerName.appendChild(playerNameText);

      
      let statsContainer = document.createElement('div');
      statsContainer.classList.add('pac-sho-pas-dri-def-phy');

      const stats = [
        { name: player.pace ? 'PAC' : 'DIV', value: player.pace ?? player.diving },
        { name: player.shooting ? 'SHO' : 'HAN', value: player.shooting ?? player.handling },
        { name: player.passing ? 'PAS' : 'KIC', value: player.passing ?? player.kicking },
        { name: player.dribbling ? 'DRI' : 'REF', value: player.dribbling ?? player.reflexes },
        { name: player.defending ? 'DEF' : 'SPE', value: player.defending ?? player.speed },
        { name: player.physical ? 'PHY' : 'POS', value: player.physical ?? player.positioning },
      ];

      stats.forEach((stat) => {
        let statDiv = document.createElement('div');
        statDiv.classList.add('condition-physique');

        let statName = document.createElement('p');
        statName.classList.add('condition-physique-nom');
        statName.textContent = stat.name;

        let statValue = document.createElement('p');
        statValue.classList.add('condition-physique-nomber');
        statValue.textContent = stat.value;

        statDiv.appendChild(statName);
        statDiv.appendChild(statValue);
        statsContainer.appendChild(statDiv);
      });

      
      let flagsContainer = document.createElement('div');
      flagsContainer.classList.add('les-drapeau');

      let nationalityFlag = document.createElement('div');
      nationalityFlag.classList.add('drapeau-natiolnalite');

      let nationalityImg = document.createElement('img');
      nationalityImg.setAttribute('src', player.flag);
      nationalityFlag.appendChild(nationalityImg);

      let clubFlag = document.createElement('div');
      clubFlag.classList.add('drapeau-flag');

      let clubImg = document.createElement('img');
      clubImg.setAttribute('src', player.logo);
      clubFlag.appendChild(clubImg);

      flagsContainer.appendChild(nationalityFlag);
      flagsContainer.appendChild(clubFlag);

      
      card.appendChild(cardImage);
      card.appendChild(playerName);
      card.appendChild(statsContainer);
      card.appendChild(flagsContainer);


      document.getElementById('reserve').appendChild(card);
    }

    dragPlayerReserv();
  });
 



