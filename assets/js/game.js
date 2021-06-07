// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Players robot's health is zero or less

var playerName = window.prompt("What is your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;
// money variable
var playerMoney = 10;
//You can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


// fight function (with parameter for enemy name)
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {
 
    

    // prompt to skip or continue to fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'Skip' to choose.");

    // if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + "health left.");
    }
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so that we know it worked.
    console.log(
        enemyName + "attacked" + playerName + ". " + playerName + " now has " + playerHealth + "health remaining."
     );

    //  check players health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + "health left.");
    }
// if player choses to skip
    } 
     

};


}

for(var i = 0; i < enemyNames.length; i++) {
    
 fight(enemyNames[i]);
 console.log(enemyNames[i]);
}