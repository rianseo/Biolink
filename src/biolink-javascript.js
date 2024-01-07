var header = document.getElementById("tm-head");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("show")
    } else {
        header.classList.remove("show")
    }
}

function openShare() {
    var a = document.body;
    a.classList.toggle("open-share")
}

function closeShare() {
    var a = document.body;
    a.classList.toggle("open-share")
}

function copyFunction() {
    document.getElementById("getlink").select(), document.execCommand("copy");
    document.getElementById("notif-share").innerHTML = "" + nT + ""
}

function openEmail() {
    var a = document.body;
    a.classList.toggle("open-email")
}

function closeEmail() {
    var a = document.body;
    a.classList.toggle("open-email")
}

function openContact() {
    var a = document.body;
    a.classList.toggle("open-contact")
}

function closeContact() {
    var a = document.body;
    a.classList.toggle("open-contact")
};