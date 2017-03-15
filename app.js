var http = require('http');
var module3 = require('./module3');

http.createServer(function(req, res) {

  var result = module3.printAccountBal() + module3.randomIntoUSD();
  res.writeHead(200);
  res.write(result);
  res.end();
}).listen(3000);
