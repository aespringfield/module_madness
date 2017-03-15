var randomBetween = require('./module1.js');
var convertToUSDWithCommas = require('./module2.js');

function randomIntoUSD() {
  var randNum = randomBetween(100, 1000000);
  var randUSD = convertToUSDWithCommas(randNum);
  return randUSD;
}

function printAccountBal() {
  return ("Account balance:\n");
}

module.exports = {
  randomIntoUSD: randomIntoUSD,
  printAccountBal: printAccountBal
};
