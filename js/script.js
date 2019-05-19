'use strict';
var fly = document.getElementById('fly-js');
var positionTop = fly.style.top;
var positionLeft = fly.style.left;


document.addEventListener('keydown', function (evt) {

   

    if (evt.keyCode === 38) {
        positionTop = (parseInt(positionTop) - 20);
        console.log(positionTop + " ВВЕРХ");
    }

    if (evt.keyCode === 40) {
        positionTop = (parseInt(positionTop) + 20);
        console.log(positionTop + " ВНИЗ");
        
    }

    if (evt.keyCode === 37) {
        positionLeft = (parseInt(positionLeft) - 20);
        console.log(positionTop + " ВЛЕВО");
        
    }

    if (evt.keyCode === 39) {
        positionLeft = (parseInt(positionLeft) + 20);
        console.log(positionTop + " ВПРАВО");
        
    }



    fly.style.top = positionTop + "px";
    fly.style.left = positionLeft + "px";

  });


var bot = document.getElementById('bot-js');
var field = document.getElementById('field');
var botTop = bot.style.top;
var botLeft = 0;

function botFly(event) {

        for(var i = 0; i <= field.clientWidth-bot.clientWidth; i++){
            bot.style.transform = 'scaleX(1)';
            bot.style.left = i + "px";
            console.log(i);
        }
       
        
        console.log("БОТ ПОЛЕТЕЛ");
        console.log("Дальность полёта - " + field.clientWidth);

    
  };

document.addEventListener('keydown', function(){
    if (event.keyCode === 13){
        botFly()
    }
});

  bot.addEventListener("transitionend", function(event) {
      console.log('end');
      event.stopPropagation();
      bot.style.transform = 'scaleX(-1)';
      bot.style.left = "0px";
    
  });

var raketa1 = document.querySelector(".raketa1");
var raketa1X = raketa1.style.left
  document.addEventListener('keydown', function(){
    if (event.keyCode === 49){
        
        for(var i = 0; i <= document.body.clientWidth + 100; i++){
            raketa1.style.left = i + "px";    
        }
        console.log("attack " + document.body.clientWidth);

    }
});

var raketa2 = document.querySelector(".raketa2");
var raketa2X = raketa2.style.left
  document.addEventListener('keydown', function(){
    if (event.keyCode === 50){
        
        for(var i = 0; i <= document.body.clientWidth + 100; i++){
            raketa2.style.left = i + "px";    
        }
        console.log("attack " + document.body.clientWidth);

    }
});
var raketa3 = document.querySelector(".raketa3");
var raketa3X = raketa3.style.left
  document.addEventListener('keydown', function(){
    if (event.keyCode === 51){
        
        for(var i = 0; i <= document.body.clientWidth + 100; i++){
            raketa3.style.left = i + "px";    
        }
        console.log("attack " + document.body.clientWidth);

    }
});
var raketa4 = document.querySelector(".raketa4");
var raketa4X = raketa4.style.left
  document.addEventListener('keydown', function(){
    if (event.keyCode === 52){
        
        for(var i = 0; i <= document.body.clientWidth + 100; i++){
            raketa4.style.left = i + "px";    
        }
        console.log("attack " + document.body.clientWidth);

    }
});
