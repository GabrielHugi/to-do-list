const newElement =  document.getElementById("newItem");
const toDoList =  document.getElementById("to-do-list");
const doingList =  document.getElementById("doing-list");
const doneList = document.getElementById("done-list");
var toDoAmmount = 0, doingAmmount = 0, finishedAmmount = 0;
window.addEventListener('resize', resize);
var screenWidth;
var screenHeight;
resize();
function resize() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    document.body.style.width = screenWidth + "px";
    document.body.style.maxWidth = screenWidth + "px";
    document.body.style.height = screenHeight + "px";
}

function checkSize(which) {
    if (which == 1) {
        if (document.getElementById("to-do-list").offsetHeight + 120 < document.getElementById("mainContainer").offsetHeight) return 1;
        else return 0;
    }
    if (which == 2) {
        if (document.getElementById("doing-list").offsetHeight + 120 < document.getElementById("mainContainer").offsetHeight) return 1;
        else return 0;
    }
    if (which == 3) {
        if (document.getElementById("done-list").offsetHeight + 120 < document.getElementById("mainContainer").offsetHeight) return 1;
        else return 0;
    }
}

function addToDo(event) {
    if (checkSize(1) == 0 && event.key == "Enter" && newElement.value != "") {
        alert("Not enough size in the to-do-list container");
    }
    if (event.key == "Enter" && newElement.value != "" && checkSize(1) == 1) {
        toDoList.innerHTML += "<li id='li" + toDoAmmount + "'> <input type='checkbox' onclick='toMiddle(this)' id='checkbox" + toDoAmmount + "' class = 'check'>" + newElement.value + "</li>";
        toDoAmmount++;
        newElement.value = "";
    }
}

function toMiddle(sigma) {
    if (checkSize(2) == 0) {
        alert("Not enough size in the doing-list container");
        sigma.checked = false;
    }
    if (checkSize(2) == 1) {
        var nofun;
        nofun = sigma.id;
        var fun = nofun.split('');
        var value = 0;
        for (var i = 8; i < fun.length; i++) {
            value = value + fun[i] * Math.pow(10, fun.length - i - 1);
        }
        // adding part
        doingList.innerHTML += "<li id='lii" + doingAmmount + "'> <input type='checkbox' onclick='toFinished(this)' id='checkboxi" + doingAmmount + "'  class='check'>" + document.getElementById("li" + value).innerText + "</li>";
        // removal part
        document.getElementById("li" + value).innerHTML = "";
        doingAmmount++;
    }
}

function toFinished(sigma) {
    if (checkSize(3) == 0) {
        alert("Not enough size in the done-list container");
        sigma.checked = false;
    }
    if (checkSize(3) == 1) {
        var nofun;
        nofun = sigma.id;
        var fun = nofun.split('');
        var value = 0;
        for (var i = 9; i < fun.length; i++) {
            value = value + fun[i] * Math.pow(10, fun.length - i - 1);
        }
        console.log(value);
        console.log("lii" + value);
        // adding part
        doneList.innerHTML += "<li id='liii" + finishedAmmount + "'> <button id='button" + finishedAmmount + "' onclick='itIsOverJohnny(this)' title='Click to remove task from finished' class='but'>X</button>" + document.getElementById("lii" + value).innerText + "</li>";
        // removal part
        document.getElementById("lii" + value).innerHTML = "";
        finishedAmmount++;
    }
}

function itIsOverJohnny(rambo) {
    console.log("NOTHING IS OVER, NOTHING!");
    var nofun;
    nofun = rambo.id;
    var fun = nofun.split('');
    value = 0;
    for (var i = 6; i < fun.length; i++) {
        var value = value + fun[i] * Math.pow(10, fun.length - i - 1);
    }
    document.getElementById("liii" + value).innerHTML = "";    
}
