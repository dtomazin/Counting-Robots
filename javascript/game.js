// Variables ***************************************************************************

var robots = {
    robot1:
    {
        name: "Robot 1",
        value: 0
    }, 
    robot2: 
    {
        name: "Robot 2",
        value: 0
    },
    robot3:
    {
        name: "Robot 3",
        value: 0
    }, 
    robot4:
    {
        name: "Robot 4",
        value: 0
    }, 

};  

// Tracking scores 
var currentScore    = 0;
var targetScore     = 0;

// Wins and Losses
var winCount        = 0;
var lossCount       = 0;


// Calling Functions ***********************************************************************
// Creates random numbers
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}


// starts the game 
var startGame = function (){
// Reset current score, set a new target score between 19 and 120, diffrerent values for each robot 1 to 12, modifiy html to reflect changes. 
currentScore = 0;
//  set a new target score between 19 and 120
targetScore = getRandom(19, 120); 


// diffrerent values for each robot 1 to 12

robots.robot1.value = getRandom(1,12); 
robots.robot2.value = getRandom(1,12); 
robots.robot3.value = getRandom(1,12); 
robots.robot4.value = getRandom(1,12); 

// modifiy html to reflect changes.
$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore); 


console.log("********************************************");
console.log("target Score " + targetScore);
console.log("Robot1: " + robots.robot1.value + " | Robot2: " + robots.robot2.value + " | Robot3: " + robots.robot3.value + " | Robot4: " + robots.robot4.value);
console.log("********************************************")
}
// values changed by user
var addValues = function(robots) {

    currentScore = currentScore + robots.value; 

    // modify html to current value
$("#yourScore").html(currentScore); 
// call the function checkwin
checkWin(); 
    // testing 
    console.log("your score: " + currentScore)

}
// check to see if user wins
var checkWin = function() {
    // check if current score 
    if(currentScore > targetScore) {
        alert("You lost!");
        console.log("You lost"); 
        // losses count
        lossCount++; 
        // change loss count in html
        $("#lossCount").html(lossCount); 

        // restart game
        startGame(); 
    }

    else if (currentScore == targetScore) {
        alert("Congratulations! You win!");
        console.log("You win"); 
        // wins count
        winCount++; 
         // change loss count in html
         $("#winCount").html(winCount); 

        //  restart game 
        startGame(); 
    }
}
// Processes ******************************************************************************* 

// starts the game first time
startGame();

// jquery onclick functions for each robot
$("#robot1").click(function() {
    addValues(robots.robot1); 

});

$("#robot2").click(function() {
    addValues(robots.robot2);


});
$("#robot3").click(function() {
    addValues(robots.robot3);

});

$("#robot4").click(function() {
    addValues(robots.robot4);

}); 

