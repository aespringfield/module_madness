function randomBetween(minVal, maxVal) {
  var range = maxVal - minVal;
  var randomDecimal = Math.random();
  var randomInRange = randomDecimal * (range + 1) + minVal;
  return Math.floor(randomInRange);
}

module.exports = randomBetween;
