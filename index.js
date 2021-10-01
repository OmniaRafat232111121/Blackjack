let player = {
    name: "Per",
    chips: 145
}

let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=true;
let message="";
let messageEl=document.getElementById("messageEl");
let sumEL=document.querySelector(".sumEL");
let cardEL=document.querySelector("#cardEl");

let playerEl = document.getElementById("playerEl");


playerEl.textContent = player.name + ": $" + player.chips;




function randomNumber(){
  let number= Math.floor( Math.random()*13)+1;
  if(number>10){
      return 10;
  }
  else if(number===11){
      return 11;
  }
  else{
      return number;
  }
}




//start Game
function startGame(){
    isAlive=true;
    let firstCard=randomNumber();
    let secondCard=randomNumber();
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard;
    renderGame();
}
//render Game
function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent=message;
    
    sumEL.textContent="SUM:"+sum;
  

    cardEL.textContent="Card:";

    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+"";
    }

 
}

//new Card
function newCard() {
console.log("Drawing  an new Card");
if(isAlive===true && hasBlackJack===false){

    let card=randomNumber();
    sum+=card;
    cards.push(card);
    console.log(cards);
    renderGame();
}

}