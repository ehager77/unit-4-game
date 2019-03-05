function reset(){

    var yourNumber=0;
    var wins=0;
    var losses=0;
    var drinkScores=[];
    var tequila;
    var gin;
    var vodka;
    var rum;
    var yourScore=0;
    var teqCount=0;
    var ginCount=0;
    var vodCount=0;
    var rumCount=0;

}

function playGame(){

    // Reset Temporary Values

    var drinkScores=[];
    var tequila;
    var gin;
    var vodka;
    var rum;
    var yourScore=0;
    var teqCount=0;
    var ginCount=0;
    var vodCount=0;
    var rumCount=0;

    // Gen a random number and store it in yourNumber.
    yourNumber = Math.floor(Math.random() * 69)+30;
    console.log(yourNumber);

    // Append yourNumber to #yourNumber
    $('#yourNumber').text(yourNumber);

    // Gen 4 random numbers and push them to an array
    for(var i=0; i < 4; i++){
        drinkRandom = Math.floor(Math.random() * 30);
        console.log(drinkRandom);
        drinkScores.push(drinkRandom);
    }

    // Set drink variables equal to numbers in drinkScore array
    console.log(drinkScores);
    tequila=drinkScores[0];
    console.log("Tequila = " + tequila)
    gin = drinkScores[1];
    console.log("Gin = " + gin);
    vodka = drinkScores[2];
    console.log("Vodka = " + vodka);
    rum = drinkScores[3];
    console.log("Rum = " + rum);

    //Increment Tequila score by number in Tequila
    
    $("#tequila").on("click", function(){

        
    })


}

$("#start-game").on("click", function(){
    playGame();
});

reset();
