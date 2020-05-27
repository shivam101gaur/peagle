var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const path = require('path');
const bodyParser = require('body-parser');


// app setup //loading static css and js files on this server 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/style', express.static(path.join(__dirname, "style")));
app.use('/script', express.static(path.join(__dirname, "script")));

//opening cliet ui page when client connected to server

app.get('/', (req, res) => {  res.sendFile(__dirname + '/view/control_system.html'); });


io.on('connect', (socket) => {



socket.on('to_Server',(msg)=>{console.log(msg,'with id ',socket.id);});
socket.on('from_User',(msg)=>{socket.broadcast.emit('from_Server',msg);});
socket.on('from_Rpi',(msg)=>{socket.broadcast.emit('from_Server',msg);});


socket.on('disconnect', () => {console.log('-- disconnected --');});

});



// starting  server
http.listen(8080, () => { console.log('listening on *:8080'); });
