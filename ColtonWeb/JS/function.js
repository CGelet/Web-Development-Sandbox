// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "40px";
    document.getElementById("logowrap").style.fontSize = "0px";
  } else {
    document.getElementById("navbar").style.height = "80px";
    document.getElementById("logowrap").style.fontSize = "30px";
  }
}