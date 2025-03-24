function sendnotif(txt) {
    document.getElementById("notif").style = "display: block;";
    document.getElementById("notif").innerHTML = txt;
    setTimeout(hide, 8000);
}

function hide() {
    document.getElementById("notif").style = "display: none;";
}

function show(tab) {
    var x = document.getElementsByClassName("tab");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
    document.getElementById(tab).style.display = "block";
    checktalents();
};
