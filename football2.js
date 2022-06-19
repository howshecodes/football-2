"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],

  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const scoringPlayers = game.scored
for (let j = 0; j < scoringPlayers.length; j++) {
        console.log("Goal ",j+1,": ",scoringPlayers[j])
        }

let sum = 0
let length = 0
const odds = game.odds

for (const key in odds){
  sum += odds.key
  length += 1
}

console.log("Average odd: ",sum/length)

console.log("Odd of victory",game.team1,": ", odds.team1)
console.log("Odd of draw: ", odds.x)
console.log("Odd of victory",game.team2,": ", odds.team2)


  const scorers = {};
  const scoreRecord = game.scored;

    for (let j = 0; j < scoreRecord.length; j++) {
      if (scoreRecord[j] in scorers) {
        scorers[scoreRecord[j]]++
      }else{
        scorers[scoreRecord[j]] = 1

      }
    }

console.log(scorers)
    
