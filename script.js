const PlayersList = [];

function Submit (event){

   event.preventDefault()

   const playerList = document.getElementById('list');

   const fName = document.getElementById('firstName').value;
   const lName = document.getElementById('lastName').value;
   const country = document.getElementById('country').value;
   const score = document.getElementById('score').value;

   const playerData = {
      name : fName + " " + lName,
      score : Number (score),
      country : country
   }

   PlayersList.push(playerData);
   PlayersList.sort((player1, player2) => parseInt(player2.score) - parseInt(player1.score));

   playerList.innerHTML = ''

   for(let index = 0; index < PlayersList.length; index++){
      const player = PlayersList[index];
      const liEl = document.createElement('li')
      const nameContent = document.createElement('span')
      const countryContent = document.createElement('span')
      const curentScore = document.createElement('span')

      const incScore = document.createElement('button')
      const decScore = document.createElement('button')
      const deleteButton = document.createElement('button');


      incScore.innerText = '+5'
      incScore.setAttribute('onclick', `incScoreHandler(${index})`)
      
      decScore.innerText = '-5'
      decScore.setAttribute('onclick', `decScoreHandler(${index})`)

      deleteButton.innerText = 'Delete';
      deleteButton.setAttribute('onclick', `deletePlayer(${index})`);

      curentScore.innerText = player.score
      countryContent.innerText = player.country
      nameContent.innerText = player.name

      liEl.append(nameContent, curentScore, countryContent,  incScore, decScore)
      playerList.append(liEl)         
   }
}   

function refreshList (){

   const playerList = document.getElementById('list')
   PlayersList.sort( (player1, player2) => parseInt(player2.score) - parseInt(player1.score) )

   playerList.innerHTML = ''
   for (let index = 0; index < PlayersList.length; index++){
         
      const player = PlayersList[index];
      const liEl = document.createElement('li')
      const nameContent = document.createElement('span')
      const countryContent = document.createElement('span')
      const curentScore = document.createElement('span')

      const incScore = document.createElement('button')
      const decScore = document.createElement('button')
      const deleteButton = document.createElement('button');

      incScore.innerText = '+5'
      incScore.setAttribute('onclick', `incScoreHandler(${index})`)
      
      decScore.innerText = '-5'
      decScore.setAttribute('onclick', `decScoreHandler(${index})`)

      deleteButton.innerText = 'Delete';
      deleteButton.setAttribute('onclick', `deletePlayer(${index})`)

      curentScore.innerText = player.score
      countryContent.innerText = player.country
      nameContent.innerText = player.name

      liEl.append(nameContent, curentScore, countryContent, incScore, decScore)
      playerList.append(liEl)         
   }
}

function incScoreHandler (index){
   PlayersList[index].score += 5
   refreshList()
}

function decScoreHandler (index){
   PlayersList[index].score -= 5
   refreshList()
}

function deletePlayer(index){
   PlayersList.splice(index, 1);
   refreshList();
}