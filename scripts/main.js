// animaties wolken 

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

// tijd
function startTime() {
    var today = new Date();
    var h = today.getHours();
    // var h = 20;
    var m = today.getMinutes();
    
    m = checkTime(m);
    
    document.getElementById('txt').innerHTML =
    h + ":" + m ;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

// image source veranderen
function changeSource() {
		if (h > 19) {	
		 document.body.style.backgroundColor = "red";
	
		// document.getElementById("cloud").scr='/images/darkcloud.png';

	}
}



// datum
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
   setInterval(showDate, 500);
   startTime();
   changeSource();
}
