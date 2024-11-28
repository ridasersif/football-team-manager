fetch('players.json')
  .then((response) => response.json())
  .then((players) => {
    document.getElementById("reserve").innerHTML=""
   for(player of players.players){
   
        let content=`
        <div onclick="openForm(event)" class="card card-imag" >
            <div class="card-imag-jouer" style=" background-image: url(${player.photo});">
                <div class="position-number">
                        <span class="number">${player.rating}</span>
                        <span class="position">${player.position}</span>
                </div>
            </div>
            <div class="nom-jouer"" >
                <h5>${player.name}</h5>
            </div>
            <div class="pac-sho-pas-dri-def-phy" ">
                <div class="condition-physique">
                    <p class="condition-physique-nom">PAC</p>
                    <p class="condition-physique-nomber">${player.pace}</p>
                </div>
                <div class="condition-physique">
                    <p class="condition-physique-nom">HSO</p>
                    <p class="condition-physique-nomber">${player.shooting}</p>
                </div>
                <div class="condition-physique">
                    <p class="condition-physique-nom">PAS</p>
                    <p class="condition-physique-nomber">${player.passing}</p>
                </div>
                <div class="condition-physique">
                    <p class="condition-physique-nom">DRI</p>
                    <p class="condition-physique-nomber">${player.dribbling}</p>
                </div>
                <div class="condition-physique">
                    <p class="condition-physique-nom">DEF</p>
                    <p class="condition-physique-nomber">${player.defending}</p>
                </div>
                <div class="condition-physique">
                    <p class="condition-physique-nom">PHY</p>
                    <p class="condition-physique-nomber">${player.physical}</p>
                </div>
            
            </div>
            <div class="les-drapeau">
                <div class="drapeau-natiolnalite">
                    <img src="${player.flag}" alt="">
                </div>
                <div  class="drapeau-flag" >
                    <img src="${player.logo}" alt="">
                </div> 
            </div>
          </div>
        `
        
        document.getElementById("reserve").innerHTML += content;
    }

  });
