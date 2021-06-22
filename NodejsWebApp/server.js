'use strict';
//var http = require('http');
var port = /*process.env.PORT ||*/ 1337;

/*http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
   // res.use(__dirname + "/src/mantenimiento.html")
    console.log(__dirname + " / src / matenimiento.html");
}).listen(port);
*/

const express = require('express');
const path = require('path');
const app = express();

app.set('port', 1337);
app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, 'src/Angular.html'))
});

app.use(express.static(path.join(__dirname, 'src')));

app.listen(app.get('port'), () => {
    console.log("Servidor levantado en el puerto:", app.get('port'));
});