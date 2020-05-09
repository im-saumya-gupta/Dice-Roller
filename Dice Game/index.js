//for dice 1

var randomNumber1 = Math.floor(Math.random() *6) + 1;// select random number from 1 to 6

var randomDiceImage1 = "images/dice"+randomNumber1+".png";// select random image from dice1 to dice6

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);//set attribut in src to randomDice Image

// for dice 2

var randomNumber2 = Math.floor(Math.random() *6) +1;// select random number from 1 to 6

var randomDiceImage2="images/dice"+randomNumber2+".png";// select random image from dice1 to dice6

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);//set attribut in src to randomDice Image

//for changing title

if(randomNumber1>randomNumber2)
{
	document.querySelector("h1").innerHTML ="🚩Player1 wins!"
}

else if(randomNumber1<randomNumber2)
{
	document.querySelector("h1").innerHTML ="Player2 wins!🚩"
}

else{
	document.querySelector("h1").innerHTML ="Drwa!!!"
}
