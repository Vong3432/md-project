window.onscroll = function() {topnavFunction()};

function topnavFunction(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("mobile-icon").style.padding = "5px 15px";
    document.getElementById("scrollTop").style.display = "block";
    document.getElementsByClassName("uk-navbar-container")[0].style.padding = "2px";
    document.getElementsByClassName("uk-navbar-container")[0].style.background = "black";
  } else {
    document.getElementById("mobile-icon").style.padding = "10px 30px";  
    document.getElementsByClassName("uk-navbar-container")[0].style.padding = "5px 15px"; 
    document.getElementById("scrollTop").style.display = "none";      
  }
}


// Jquery part
$( document ).ready(function(){

});

