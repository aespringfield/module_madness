// function convertToUSD (num) {
//   var numString = num.toFixed(2).toString();
//   numString = "$" + numString;
//   return numString;
//   }

//main part of the below function was taken from Stack Overflow
function convertToUSDWithCommas(num) {
  numString = num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  numString = "$" + numString;
  return numString;
}

module.exports = convertToUSDWithCommas;
