'use strict';
var fly = document.getElementById('fly-js');
var positionTop = fly.style.top;
var positionLeft = fly.style.left;


document.addEventListener('keydown', function (evt) {

   

    if (evt.keyCode === 38) {
        positionTop = (parseInt(positionTop) - 2);
        console.log(positionTop + " ВВЕРХ");
    }

    if (evt.keyCode === 40) {
        positionTop = (parseInt(positionTop) + 2);
        console.log(positionTop + " ВНИЗ");
        
    }

    if (evt.keyCode === 37) {
        positionLeft = (parseInt(positionLeft) - 2);
        console.log(positionTop + " ВЛЕВО");
        
    }

    if (evt.keyCode === 39) {
        positionLeft = (parseInt(positionLeft) + 2);
        console.log(positionTop + " ВПРАВО");
        
    }



    fly.style.top = positionTop + "px";
    fly.style.left = positionLeft + "px";

  });


var bot = document.getElementById('bot-js');
var field = document.getElementById('field');
var botTop = bot.style.top;
var botLeft = 0;

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        for(var i = 0; i <= field.clientWidth-bot.clientWidth; i++){
            bot.style.transform = 'scaleX(1)';
            bot.style.left = i + "px";
            console.log(i);
        }
       
        
        console.log("БОТ ПОЛЕТЕЛ");
        console.log("Дальность полёта - " + field.clientWidth);

    }
  });

  bot.addEventListener("transitionend", function(event) {
      console.log('end');
      event.stopPropagation();
      bot.style.transform = 'scaleX(-1)';
      bot.style.left = "0px";
  });

