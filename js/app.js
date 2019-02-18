requirejs.config({
  "baseUrl": "js/lib",
  "paths": {
    "app": "../app",
    "data": "../data",
    "classes": "../classes",
    "jquery": "../jquery-3.3.1.min"
  }
});

requirejs(["app/main"]);

var tabIndex = 1;

// Tab controls
function currentPane(n) {
  showPanes(tabIndex = n);
}

function showPanes(n) {
  var i;
  var tabs;
  var panes;

  tabs = document.getElementsByClassName("tabOverworld");
  panes = document.getElementsByClassName("region");

  if (n > panes.length) {tabIndex = 1} 
  if (n < 1) {tabIndex = panes.length}
  for (i = 0; i < panes.length; i++) {
      panes[i].style.display = "none"; 
  }
  for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    	tabs[i].style.color = "";
    	tabs[i].style.backgroundColor = "";
  }
  panes[tabIndex-1].style.display = "block"; 
  tabs[tabIndex-1].className += " active";
	tabs[tabIndex-1].style.backgroundColor = "black";
	tabs[tabIndex-1].style.color = "white";      	


  // window.scrollTo(0, 0);
}



//This script block is to make the bar of running Marios stay at the top of the page.
/*Whoa, vintage comment. That's from our Mario quiz project in Feb 2018.
This is a modified version of a similar function used in that project to keep a div
at the top of the screen as you scroll down. We do the same here with the map and tabs*/
window.onscroll = function() {
	var mapbox = document.getElementById("map-container");
	var tabs = document.getElementById("overworldTabs");
  var overlay = document.getElementById('overlay');
	offset = window.pageYOffset-100;
	if (offset<0) {offset=0}
	mapbox.style.marginTop =  offset +"px";
	tabs.style.marginTop =  offset + 5 +"px";
  overlay.style.marginTop =  offset +"px";
};			


function skullsOn(){
	$('#skulltula-tab').remove();
	$('#overworldTabs').append(($('<span/>').attr('class','tabOverworld').attr('id','skulltula-tab2').attr('onclick','skullsOff()')).append($('<span/>').append($('<b/>').html('&raquo'))));
}

function skullsOff(){
	$('#skulltula-tab2').remove();
	$('#overworldTabs').append(($('<span/>').attr('class','tabOverworld').attr('id','skulltula-tab').attr('onclick','skullsOn()')).append($('<span/>').append($('<b/>').html('&raquo'))));
}



