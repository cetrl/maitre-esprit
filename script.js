const { log } = require("console");

const goodAnswer = ["red", "yellow"];
// let player2Answer = ["red", "yellow"];

function validColors(proposition) {
  //   const possibilities = ["yellow", "blue", "red", "green"];
  if (proposition[0] === "red" && proposition[1] === "yellow") return true;
  else return false;
}

function checkResult(player2Answer) {
  if (player2Answer[0] != goodAnswer[0]) return false;
  if (player2Answer[1] != goodAnswer[1]) return false;
  return true;
}

function gamePlay(validAnswer) {}

module.exports = { checkResult, validColors };
