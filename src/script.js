
let cardsArray=[];
let sum=0;
let hasBlackJack = false
let isAlive=false;
let message="";
//let sumEl=document.querySelector("#sum-el");
//console.log(messageEl);
let player={
    name:"per",
    chips:145
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips;
//document.getElementById("player-el").innerHTML=player.name+": $"+player.chips;
function start(){
    isAlive=true;
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cardsArray=[firstCard,secondCard];
    sum=firstCard+secondCard
    
   
    render();
}
function getRandomCard(){
    let exp=Math.floor(Math.random() * 13) + 1;
    if(exp>10){
        return 10
    }
    else if(exp===1){
        return 11
    }
    else{
        return exp
    }
}
function render(){
    let cards=document.getElementById("cards-el");
cards.textContent="Cards: ";
for(let i=0;i<cardsArray.length;i++){
cards.textContent+=cardsArray[i]+" ";
}
document.querySelector("#sum-el").textContent="Sum: "+sum;
if(sum<=20){
    message="Do you want to draw new card";
}else if(sum===21){
    message="Congrats you have won blackjack" ;
    hasBlackJack=true;
}else{
    message="You are out of the game";
    isAlive=false;
}
document.getElementById("message-el").textContent=message;
//sumEl.textContent+=sum;
}
function newcard(){
    if(isAlive===true && hasBlackJack===false){
    let newcardnumber=getRandomCard();
    sum+=newcardnumber;
    cardsArray.push(newcardnumber)
    render();
    }
}

