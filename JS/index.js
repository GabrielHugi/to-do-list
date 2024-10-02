const newElement =  document.getElementById("newItem");
const toDoList =  document.getElementById("to-do-list");
const doingList =  document.getElementById("doing-list");
const doneList = document.getElementById("done-list");
var toDoAmmount = 0, doingAmmount = 0, finishedAmmount = 0;

window.addEventListener('resize', resize());
resize();
function resize() {
    var screenWidth = window.outerWidth;
    document.body.style.width = screenWidth;
}

function addToDo(event) {
    if (event.key == "Enter") {
        toDoList.innerHTML += "<li id='li" + toDoAmmount + "'> <input type='checkbox' onclick='toMiddle(this)' id='checkbox" + toDoAmmount + "'>" + newElement.value + "</li>";
        toDoAmmount++;
    }
}

function toMiddle(sigma) {
    var nofun;
    nofun = sigma.id;
    var fun = nofun.split('');
    for (var i = 8; i < fun.length; i++) {
        var value = fun[i] * Math.pow(10, fun.length - i - 1);
    }
    // adding part
    doingList.innerHTML += "<li id='li2" + doingAmmount + "'> <input type='checkbox' onclick='toFinished(this)' id='checkbox2" + doingAmmount + "'>" + document.getElementById("li" + value).innerText + "</li>";
    // removal part
    document.getElementById("li" + value).innerHTML = "";
    doingAmmount++;
}

function toFinished(sigma) {
    var nofun;
    nofun = sigma.id;
    var fun = nofun.split('');
    for (var i = 9; i < fun.length; i++) {
        var value = fun[i] * Math.pow(10, fun.length - i - 1);
    }
    // adding part
    doneList.innerHTML += "<li id='li3" + finishedAmmount + "'> <button id='button" + finishedAmmount + "' onclick='itIsOverJohnny(this)' title='Click to remove task from finished'>X</button>" + document.getElementById("li2" + value).innerText + "</li>";
    // removal part
    document.getElementById("li2" + value).innerHTML = "";
    finishedAmmount++;
}

function itIsOverJohnny(rambo) {
    console.log("NOTHING IS OVER, NOTHING!");
    var nofun;
    nofun = rambo.id;
    var fun = nofun.split('');
    for (var i = 6; i < fun.length; i++) {
        var value = fun[i] * Math.pow(10, fun.length - i - 1);
    }
    document.getElementById("li3" + value).innerHTML = "";    
}
