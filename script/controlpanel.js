var socket = io();
socket.emit('to_Server','user connected');

function sendtoRpi(msg) { socket.emit('from_User',msg); } // msg can be off any data type.

socket.on('from_Server',(msg)=>{

window[msg.name](msg); //calling function with name as incoming msg object name

});


//objects to be sent 

var move = {name : 'move',movespeed:'medium',direction:'front',time:0};  
var turn = {name : 'turn',sensitivity:'medium',direction:'right',time:0};
var stop = {name : 'stop',command:'stop'};
var mesge = {name : 'messge',message:"",warning:""};


//variables of elements in html page


var frontBtn = document.getElementById('front');
var backBtn = document.getElementById('back');
var rightBtn = document.getElementById('right');
var leftBtn = document.getElementById('left');

var speedslider = document.getElementById('speedslider');
var speedcontainer = document.getElementById('speedcontainer');
var speedcontainervalue = speedcontainer.children[0];
var movetime = document.getElementById('movetime');

var rotateSpeedSlider = document.getElementById('rotateSpeedSlider');
var rotatespeedcontainer = document.getElementById('rotatespeedcontainer');
var rotatespeedcontainervalue = rotatespeedcontainer.children[0];
var turntime = document.getElementById('turntime');

var controlBoard = document.getElementById('controlBoard');


var gpsfeedbox = document.getElementById('gpsfeedbox');
var distancefeedbox = document.getElementById('distancefeedbox');
var messagefeedbox = document.getElementById('messagefeedbox');


var lattitude = document.getElementById('lattitudevalue');
var longitude = document.getElementById('longitudevalue');


var objfrontdistance = document.getElementById('objfront');
var objbackdistance = document.getElementById('objback');

var message = document.getElementById('message');
var warning = document.getElementById('warning');





speedcontainervalue.innerHTML = 'MED';
speedslider.addEventListener('change',()=>
{
   
    var speed = speedslider.value;
    switch(speed)
    {
      case '50':
        move['movespeed'] = 'low';
        speedcontainervalue.innerHTML = 'LOW';
        break;
      case '75':
        move['movespeed'] = 'medium';
        speedcontainervalue.innerHTML = 'MED';
        break;
      case '100':
        move['movespeed'] = 'high';
        speedcontainervalue.innerHTML = 'HIGH';
        break;
      default:
        move['movespeed'] = 0;
        speedcontainervalue.innerHTML = 'STOP!';
        sendtoRpi(stop);
    }

});

movetime.addEventListener('input',()=>{ if(movetime.value.length!=0){move['time']=movetime.value;}else{move['time']=0}  })

turntime.addEventListener('input',()=>{ if(turntime.value.length!=0) {turn['time']=turntime.value;}else{turn['time']=0} })


rotatespeedcontainervalue.innerHTML = 'MED';
rotateSpeedSlider.addEventListener('change',()=>
{
   
    var speed = rotateSpeedSlider.value;
    switch(speed)
    {
      case '50':
        turn['sensitivity']='low'
        rotatespeedcontainervalue.innerHTML = 'LOW';
        break;
      case '75':
        turn['sensitivity'] = 'medium';
        rotatespeedcontainervalue.innerHTML = 'MED';
        break;
      case '100':
        turn['sensitivity'] = 'high';
        rotatespeedcontainervalue.innerHTML = 'HIGH';
        break;
    }

});







frontBtn.addEventListener('mousedown',frontBtnPressed);
backBtn.addEventListener('mousedown',backBtnPressed);
leftBtn.addEventListener("mousedown",leftBtnPressed);
rightBtn.addEventListener("mousedown",rightBtnPressed);

function frontBtnPressed() 
{
    
    move['direction']='front';
    sendtoRpi(move);                                              // move command sent to RPi with attributes - dir and speed
    controlBoard.addEventListener('mouseup',function frontBtnReleased()
                                                      {   
                                                        
                                                      if (move['time']==0) {sendtoRpi(stop);}     
                                                      controlBoard.removeEventListener('mouseup',arguments.callee);
                                                      });
    
}


function backBtnPressed() 
{
    move['direction']='back';
    sendtoRpi(move); 
    controlBoard.addEventListener('mouseup',function backBtnReleased()
                                                    { 
                                                                                                          
                                                      if (move['time']==0) {sendtoRpi(stop);}
                                                      controlBoard.removeEventListener('mouseup',arguments.callee);
                                                    
                                                    });    
}

function leftBtnPressed() {
    turn['direction']='left';
    sendtoRpi(turn);
    controlBoard.addEventListener('mouseup',function leftBtnReleased()
                                                    {

                                                    if (turn['time']==0) {sendtoRpi(stop);}                                                       
                                                    controlBoard.removeEventListener('mouseup',arguments.callee);

                                                    });
    
}

function rightBtnPressed() {
    turn['direction']='right';
    sendtoRpi(turn);
    controlBoard.addEventListener('mouseup',function rightBtnReleased()
                                                    {

                                                    if (turn['time']==0) {sendtoRpi(stop);}
                                                    controlBoard.removeEventListener('mouseup',arguments.callee);
                                                    
                                                    });
    
}

// defining receiving functions //


function messge(obj) {
  messagefeedbox.style.visibility = "visible";
  message.innerHTML = obj.message;
  warning.innerHTML = obj.warning;
  console.log(obj.warning);
  
}

function distancefeed(obj)
{
  if(obj.updateflag=='true')
  {
  distancefeedbox.style.visibility = "visible";
  objfrontdistance.innerHTML = obj.frontOBJ;
  objbackdistance.innerHTML = obj.backOBJ;
  }
  else if(obj.updateflag=='false')
  {
    distancefeedbox.style.visibility = "hidden";
  }
}

function gpsfeed(obj)
{
  if(obj.updateflag=='true')
  {
  gpsfeedbox.style.visibility="visible";
  lattitude.innerHTML = obj.latitude;
  longitude.innerHTML = obj.longitude;
  }
  else if(obj.updateflag=='false')
  {
    gpsfeedbox.style.visibility = "hidden";
  }
}
 