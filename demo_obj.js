// player progream 
let team = {};

function makePlayer(playerName, jersey) {
  return {
    name: playerName,
    jersey: jersey,
    batting: 0,
    updateBatting: function(battingAverage) {
      this.batting = battingAverage;
    }
  };
}

function addPlayer(player) {
  team[player.name] = player;
}

function removePlayer(playerName) {
  delete team[playerName];
}

function highestBattingAverage() {
  let highestAverage = 0;
  let highestPlayer = null;
  for (let playerName in team) {
    if (team.hasOwnProperty(playerName)) {
      if (team[playerName].batting > highestAverage) {
        highestAverage = team[playerName].batting;
        highestPlayer = team[playerName];
      }
    }
  }
  return highestPlayer;
}

// Example usage:
let player1 = makePlayer("Alice", 10);
let player2 = makePlayer("Bob", 20);
let player3 = makePlayer("Charlie", 30);

addPlayer(player1);
addPlayer(player2);
addPlayer(player3);

player1.updateBatting(0.324);
player2.updateBatting(0.287);
player3.updateBatting(0.362);

console.log(highestBattingAverage()); // Output: { name: 'Charlie', jersey: 30, batting: 0.362, updateBatting: [Function: updateBatting] }
