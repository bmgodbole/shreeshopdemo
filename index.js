/*var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1> Hello World 1111</h1>');
}).listen(3000);  */

//view engine //ejs
const http = require("http");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
const app = require('./app');

const port =  3000;
const server = http.createServer(app);
server.listen(port);
