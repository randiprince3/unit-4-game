$(document).ready(function(){

    var randomNumber = Math.floor(Math.random() * 101 +19);

    $("#number-to-match").text(randomNumber);

    var rubyNum = Math.floor(Math.random()* 11 + 1);
    var emeraldNum = Math.floor(Math.random()* 11 + 1);
    var diamondNum = Math.floor(Math.random()* 11 + 1);
    var aquaNum = Math.floor(Math.random()* 11 + 1);

    var userScore = 0;
    var wins = 0;
    var losses = 0;

    $("#number-win").text(wins);
    $("#number-losses").text(losses);
    $("#score").text(userScore);

    // Reset game
    function reset() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        console.log(randomNumber);
        $("#number-to-match").text(randomNumber);
        rubyNum = Math.floor(Math.random()* 11 + 1);
        emeraldNum = Math.floor(Math.random()* 11 + 1);
        diamondNum = Math.floor(Math.random()* 11 + 1);
        aquaNum = Math.floor(Math.random()* 11 + 1);
        userScore = 0;
        $("#score").text(userScore);

    }
    // When user wins
    function winner() {
        alert("You won!");
        wins++;
        $("#number-win").text(wins);
        reset();
    }
    // When user loses
    function loser() {
        alert("You lose!");
        losses++;
        $("#number-losses").text(losses);
        reset();
    }
    // When ruby is clicked
    $("#ruby").on("click", function(){
        userScore = userScore + rubyNum;
        $("#score").text(userScore);

    if (userScore === randomNumber) {
        winner();
    }
    else if (userScore > randomNumber) {
        loser();
    }
    });

    // When emerald is clicked
    $("#emerald").on("click", function(){
        userScore = userScore + emeraldNum;
        $("#score").text(userScore);

    if (userScore === randomNumber) {
        winner();
    }
    else if (userScore > randomNumber) {
        loser();
    }
    });

    // When diamond is clicked
    $("#diamond").on("click", function(){
        userScore = userScore + diamondNum;
        $("#score").text(userScore);

    if (userScore === randomNumber) {
        winner();
    }
    else if (userScore > randomNumber) {
        loser();
    }
    });

    // When aqua is clicked
    $("#aqua").on("click", function(){
        userScore = userScore + aquaNum;
        $("#score").text(userScore);

    if (userScore === randomNumber) {
        winner();
    }
    else if (userScore > randomNumber) {
        loser();
    }
    });
    

});

    