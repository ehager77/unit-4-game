function reset(){

    var yourNumber=0;
    var wins=0;
    var losses=0;
    var drinkScores=[];
    var tequila;
    var gin;
    var vodka;
    var rum;

}

function playGame(){

    // Reset Temporary Values

    var drinkScores=[];
    var tequila;
    var gin;
    var vodka;
    var rum;
    var yourScore=0;

    // Reset yourScore DOM to zero
    $('#yourScore').text(yourScore);


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

    //Increment yourScore by number in Tequila
    
    $("#tequila").on("click", function(){
        yourScore = yourScore + parseInt(tequila);
        console.log(yourScore);
        // Append yourScore to #yourScore
        $('#yourScore').text(yourScore);
        
    })

    //Increment yourScore by number in Gin
    
    $("#gin").on("click", function(){
        yourScore = yourScore + parseInt(gin);
        console.log(yourScore);
        // Append yourScore to #yourScore
        $('#yourScore').text(yourScore);
        
    })

    //Increment yourScore by number in Vodka
    
    $("#vodka").on("click", function(){
        yourScore = yourScore + parseInt(vodka);
        console.log(yourScore);
        // Append yourScore to #yourScore
        $('#yourScore').text(yourScore);
        
    })

    //Increment yourScore by number in Rum
    
    $("#rum").on("click", function(){
        yourScore = yourScore + parseInt(rum);
        console.log(yourScore);
        // Append yourScore to #yourScore
        $('#yourScore').text(yourScore);
        
    })

    


}

$("#start-game").on("click", function(){
    playGame();
});

reset();
