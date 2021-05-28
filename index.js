var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "images/dice"+randomNumber1+".png";

var randomDiceImage2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if (randomNumber1>randomNumber2) {
    document.querySelector(".container h1").textContent="🎉Player1 Wins";
} 

else if(randomNumber2>randomNumber1) {
    document.querySelector(".container h1").textContent="Player2 Wins🎉";   
}

else{
    document.querySelector(".container h1").textContent="Draw😜";   

}