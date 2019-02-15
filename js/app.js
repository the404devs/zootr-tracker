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
// showPanes(tabIndex, "L");
showPanes(tabIndex, "R");

// Tab controls
function currentPane(n, side) {
  showPanes(tabIndex = n,side);
}

function showPanes(n,side) {
  var i;
  var tabs;
  var panes;
  if (side=="L"){
    tabs = document.getElementsByClassName("tabLeft");
    panes = document.getElementsByClassName("paneLeft");
  }
  if (side=="R"){
    tabs = document.getElementsByClassName("tabRight");
    panes = document.getElementsByClassName("paneRight");
  }
  if (side=="M"){
    tabs = document.getElementsByClassName("tabOverworld");
    panes = document.getElementsByClassName("region");
  }
  if (n > panes.length) {tabIndex = 1} 
  if (n < 1) {tabIndex = panes.length}
  for (i = 0; i < panes.length; i++) {
      panes[i].style.display = "none"; 
  }
  for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
      if (side=="M"){
      	tabs[i].style.color = "";
      	tabs[i].style.backgroundColor = "";
      }
  }
  panes[tabIndex-1].style.display = "block"; 
  tabs[tabIndex-1].className += " active";
  if (side=="M"){
  	tabs[tabIndex-1].style.backgroundColor = "black";
  	tabs[tabIndex-1].style.color = "white";      	
  }


  // window.scrollTo(0, 0);
}



//This script block is to make the bar of running Marios stay at the top of the page.
window.onscroll = function() {
	var mapbox = document.getElementById("map-container");
	var tabs = document.getElementById("overworldTabs");
	offset = window.pageYOffset-100;
	if (offset<0) {offset=0}
	mapbox.style.marginTop =  offset +"px";
	tabs.style.marginTop =  offset + 5 +"px";
};			


function skullsOn(){
	$('#skulltula-tab').remove();
	$('#overworldTabs').append(($('<span/>').attr('class','tabOverworld').attr('id','skulltula-tab2').attr('onclick','skullsOff()')).append($('<span/>').append($('<b/>').html('&raquo'))));
}

function skullsOff(){
	$('#skulltula-tab2').remove();
	$('#overworldTabs').append(($('<span/>').attr('class','tabOverworld').attr('id','skulltula-tab').attr('onclick','skullsOn()')).append($('<span/>').append($('<b/>').html('&raquo'))));
}



