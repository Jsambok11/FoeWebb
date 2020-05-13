const express = require('express');
const app = express();
var os = require('os');
var hostname = os.hostname();
const expressip = require('express-ip');
const path = require('path');
var fs = require('fs');
var fileName = "index.html";
var portNr = 8080;
var ip = require("ip");

app.get('/', function(req,res) {
  fs.readFile(fileName, function(err, data) {
     res.write('hostname :'+hostname+'  FileName:'+fileName+'  Portnumer'+portNr+'  Local ip address'+ip.address()+'   I dont know what do you mean with "Vilken metod som använts för att köra sidan", (thise site is rendered with Express) ' , function(err) {
     res.end();
     res.sendFile(path.join(__dirname+'/'+fileName));
   });
   });
  });
  app.listen(portNr);
