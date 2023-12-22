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

function onClickOpen() {
  var sidebarNav = document.getElementById("sidebar-nav");
  sidebarNav.style.display = 'block';
  setTimeout(function () {
    sidebarNav.classList.add("active");
  }, 10); // Adding a small delay for display to take effect
}

function onClickClose() {
  var sidebarNav = document.getElementById("sidebar-nav");
  sidebarNav.classList.remove("active");
  setTimeout(function () {
    sidebarNav.style.display = 'none';
  }, 400); // Delaying hiding to allow for the transition to complete
}
