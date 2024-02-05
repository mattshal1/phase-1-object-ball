function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}
console.log(gameObject());


function homeTeamName() {
    let object = gameObject(); 
    return object['home']['teamName']; 
  }
  console.log(homeTeamName()); 
  
  function numPointsScored(playerName) {
    let game = gameObject();
    for (let team in game) {
        for (let player in game[team]["players"]) {
            if (player === playerName) {
                console.log(playerName + " scored " + game[team]["players"][player]["points"] + " points.");
                debugger; // Add debugger here
                return game[team]["players"][player]["points"];
            }
        }
    }
    console.log("Player not found");
    return "Player not found";
}


function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
        for (let player in game[team]["players"]) {
            if (player === playerName) {
                console.log(playerName + "'s shoe size is " + game[team]["players"][player]["shoe"] + ".");
                debugger; // Add debugger here
                return game[team]["players"][player]["shoe"];
            }
        }
    }
    console.log("Player not found");
    return "Player not found";
}


function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team]["teamName"] === teamName) {
            console.log("Colors of team " + teamName + ": " + game[team]["colors"].join(", "));
            debugger; // Add debugger here
            return game[team]["colors"];
        }
    }
    console.log("Team not found");
    return "Team not found";
}


function teamNames() {
    let game = gameObject();
    console.log("Team names: " + game["home"]["teamName"] + ", " + game["away"]["teamName"]);
    debugger;
    return [game["home"]["teamName"], game["away"]["teamName"]];
}

function playerNumbers(teamName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team]["teamName"] === teamName) {
            let numbers = [];
            for (let player in game[team]["players"]) {
                numbers.push(game[team]["players"][player]["number"]);
            }
            console.log("Jersey numbers of team " + teamName + ": " + numbers.join(", "));
            debugger;
            return numbers;
        }
    }
    console.log("Team not found");
    return "Team not found";
}

function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
        for (let player in game[team]["players"]) {
            if (player === playerName) {
                console.log("Stats of player " + playerName + ": ", game[team]["players"][player]);
                debugger;
                return game[team]["players"][player];
            }
        }
    }
    console.log("Player not found");
    return "Player not found";
}

function bigShoeRebounds() {
    let game = gameObject();
    let maxShoeSize = -Infinity;
    let maxRebounds = 0;
    let playerWithMaxShoeSize = "";
    for (let team in game) {
        for (let player in game[team]["players"]) {
            let shoeSize = game[team]["players"][player]["shoe"];
            if (shoeSize > maxShoeSize) {
                maxShoeSize = shoeSize;
                maxRebounds = game[team]["players"][player]["rebounds"];
                playerWithMaxShoeSize = player;
            }
        }
    }
    console.log("Player with the biggest shoe size is " + playerWithMaxShoeSize + " with " + maxRebounds + " rebounds.");
    debugger;
    return maxRebounds;
}


function doesLongNameStealATon() {
    let game = gameObject();
    let longestNamePlayer = '';
    let mostStealsPlayer = '';
    // Find the player with the longest name
    for (let team in game) {
        for (let player in game[team].players) {
            if (player.length > longestNamePlayer.length) {
                longestNamePlayer = player;
            }
        }
    }
    let maxSteals = 0;
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].steals > maxSteals) {
                mostStealsPlayer = player;
                maxSteals = game[team].players[player].steals;
            }
        }
    }
    return longestNamePlayer === mostStealsPlayer;
}
console.log(doesLongNameStealATon()); 
