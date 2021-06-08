// Game States
// "WIN" - Player robot has defeated all enemy-robots
// * Fight all enemy-robots
// * Defeat each enemy-robot
// "LOSE" - Players robot's health is zero or less
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};



// fight function (with parameter for enemy name)
var fight = function (enemy) {
    
    while (playerHealth > 0 && enemy.health > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money)
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');

            // award player money for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }

        // remove players's health by subtracting the amount set in the enemyAttack variable
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name+ ' still has ' + playerInfo.health + ' health left.');
        }
    }
};
// START GAME FUNCTION
var startGame = function () {
    // reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {

            // let player know what round they are in, remeber that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            // if debugger needed insert here
            // debugger;

            //  pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);
        }

        // go to shop between battles
        if (playerInfo.health > 0 && i < enemy.names.length - 1) {
            // ask if player wants to use shop before next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

            // if yes, take the to the store() function
            if (storeConfirm) {
                shop();
            }
        }
        // if player isnt alive, stop the game
        else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
    }
    // after loop ends, we are either out of playerHealth or enemies to fight, so run endgame function
    endGame();
};
// function to end entire game
var endGame = function () {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle!");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function () {
    // ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to refill your HEALTH, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": 
        case "refill":
            if (playerInfo.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            // increase health and decrease money
            playerInfo.health = playerInfo.health + 20;
            playerInfo.money = playerInfo.money - 7;
            
            }
            else {
                window.alert("You dont have enough money!");
            }

            break;
        case "UPGRADE":    
        case "upgrade":
            if (playerInfo.money >= 7) {
            window.alert("Upgrading players attack by 6 for 7 dollars.");

            // increase attack decrease money
            playerInfo.attack = playerInfo.attack + 6;
            playerInfo.money = playerInfo.money - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE":    
        case "leave":
            window.alert("Leaving the store.");

            // do nothin, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

var playerInfo = {
    name: window.prompt("What is your Robot's name?"),
    health: 100,
    attack: 10,
    // money variable
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, // comma!
    refillHealth: function() {
      this.health += 20;
      this.money -= 7;
    }, // comma!
    upgradeAttack: function() {
      this.attack += 6;
      this.money -= 7;
    }
    };
    //You can also log multiple values at once like this console.log(playerInfo.name, playerInfo.attack, playerHealth);
    
    var enemyInfo = [
        {
          name: "Roborto",
          attack: randomNumber(10, 14)
        },
        {
          name: "Amy Android",
          attack: randomNumber(10, 14)
        },
        {
          name: "Robo Trumble",
          attack: randomNumber(10, 14)
        }
      ];
    
    console.log(enemy.names);
    console.log(enemy.names.length);
    console.log(enemy.names[0]);
    console.log(enemy.names[3]);
// start the game when the page loads
startGame();


