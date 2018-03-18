// clouds

var cloud = document.getElementById('cloud');

var tl1 = new TimelineMax({repeat:200});
tl1.to(cloud, 1, {top: 410, ease: Sine.easeInOut})
   .to(cloud, 1, {left: 20, ease: Sine.easeInOut})
   .to(cloud, 1, {top: 400, ease: Sine.easeInOut})
   .to(cloud, 1, {left: 8, ease: Sine.easeInOut});

var cloud1 = document.getElementById('cloud1');

var tl1 = new TimelineMax({repeat:200});
tl1.to(cloud1, 1, {top: 310, ease: Sine.easeInOut})
   .to(cloud1, 1, {left: 210, ease: Sine.easeInOut})
   .to(cloud1, 1, {top: 300, ease: Sine.easeInOut})
   .to(cloud1, 1, {left: 200, ease: Sine.easeInOut});

var cloud2 = document.getElementById('cloud2');

var tl1 = new TimelineMax({repeat:200});
tl1.to(cloud2, 1, {top:160, ease: Sine.easeInOut})
   .to(cloud2, 1, {left: 760, ease: Sine.easeInOut})
   .to(cloud2, 1, {top: 150, ease: Sine.easeInOut})
   .to(cloud2, 1, {left: 750, ease: Sine.easeInOut});

// time
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    s = checkTime(s);
    m = checkTime(m);
  
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);

    if (h > 18) {  
     document.body.style.backgroundColor = 'black';
     document.getElementById("sun").src = 'images/moon.png';
     document.getElementById("txt").style.color = "#636160";
     document.getElementById("date").style.color = "#636160";
   }
   if (h < 6) {  
     document.body.style.backgroundColor = 'black';
     document.getElementById("sun").src = 'images/moon.png';
     document.getElementById("txt").style.color = "#636160";
     document.getElementById("date").style.color = "#636160";
   }

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

// date
function showDate(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
 document.getElementById('date').textContent = today;
}

window.onload = function(){
  "use strict";
   showDate();
   startTime();
   checkTime();
}

// sun
var sun = document.getElementById('sun');

TweenMax.to(sun, 20, {rotation:"360", ease:Linear.easeNone, repeat:-1});

// rocket
var rocket = document.getElementById('rocket');
var tl2 = new TimelineMax({repeat:200});
tl2.to(rocket, 15, {top: -1100, ease: Power4.easeOut.easeInOut});

// spaceman
var spaceman = document.getElementById('spaceman')
var tl3 = new TimelineMax({repeat:200});
tl3.to(spaceman,20,{left:500, top:-150});
