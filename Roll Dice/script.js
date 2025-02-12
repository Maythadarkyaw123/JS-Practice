
function rollDice(){
    let myrandom = Math.floor((Math.random()*6)+1);
    let myresult = document.getElementById("result");
    myresult.textContent ="You rolled: - " + myrandom;
  }