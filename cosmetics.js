function sendnotif(txt) {
    document.getElementById("notif").style = "display: block;";
    document.getElementById("notif").innerHTML = txt;
    setTimeout(hide, 8000);
}

function hide() {
    document.getElementById("notif").style = "display: none;";
}
