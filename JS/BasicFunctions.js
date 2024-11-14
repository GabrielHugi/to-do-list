// to do list functions

const newElement =  document.getElementById("newItem");
const newDescription =  document.getElementById("newDescription");
const toDoList =  document.getElementById("to-do-list");
const doingList =  document.getElementById("doing-list");
const doneList = document.getElementById("done-list");
var toDoAmmount = 0, doingAmmount = 0, finishedAmmount = 0;
window.addEventListener('resize', resize);
var screenWidth;
var screenHeight;
resize();
function resize() {
    screenWidth = screen.availWidth;
    screenHeight = screen.availHeight;
    document.body.style.width = screenWidth + "px";
    document.body.style.maxWidth = screenWidth + "px";
    toDoList.style.minHeight = screenHeight*0.75 + "px";
    doingList.style.minHeight = screenHeight*0.75 + "px";
    doneList.style.minHeight = screenHeight*0.75 + "px";
}

function checkIfEnterKey(event) {
    if (event.key == "Enter") {
        addToDo();
    }
}

function orderToDo() {
    //sort this shet
    var objects = new Array;
    objects = document.querySelectorAll('.toDoLIReference');
    var descriptions = new Array;
    descriptions = document.querySelectorAll('.toDoPLIReference');
    /*
    var date = new Array;
    var realdate = new Array;
    for (var i = 0; i < objects.length; i++) {
        date[i] = objects[i].title;
        var aux = date[i];
        aux.split("");
        realdate[i] = "";
        for (var i2 = 15; i2 < aux.length; i2++) {
            //if (i2 != 21 && i2 != 24) {}
            realdate[i] += aux[i2];
        }
    }
    */
   //test
    var date = new Array;
    for (var i = 0; i < objects.length; i++) {
        date[i] = objects[i].title;
        var numdate = date[i].split('');
        var value = 0;
        for (var i2 = 15; i2 < aux.length; i2++) {
            if (i2 != 21 && i2 != 24) {
                value += numdate[i2];
            }
        }
        date[i] = value;
        console.log("date be like " + date[i]);
    }
// test

    // mostly working but not for months for wathever reason
    for (var i = 0; i < date.length - 1; i++) {
        for (var j = 0; j < date.length - i - 1; j++) {
            //var date1 = new Date(realdate[j]);
            //console.log(realdate[j]);
            //console.log(date1.getTime());
            //var date2 = new Date(realdate[j+1]);
            //console.log(realdate[j+1]);
            //console.log(date2.getTime());
            //if (date1.getTime() > date2.getTime()) {
            if (date[i] > date[i+1]) {
                var temp = objects[j].outerHTML
                objects[j].outerHTML = objects[j+1].outerHTML;
                objects[j + 1].outerHTML = temp;
                // ----
                temp = descriptions[j].outerHTML;
                descriptions[j].outerHTML = descriptions[j+1].outerHTML;
                descriptions[j+1].outerHTML = temp;
                // ----
                temp = realdate[j];
                realdate[j] = realdate[j + 1];
                realdate[j + 1] = temp;
            }
        }
    }
    // and here ends what had before started
    for (var i = 0; i < objects.length; i++) {
        console.log(realdate[i]);
        console.log(objects[i].title);
        console.log(objects[i].id);
    }
    
}


function addToDo(event) {
    if (newElement.value != "" && newElement.value.split('').length <= 22 && newDescription.value.split('').length <= 600) {
        toDoList.innerHTML += "<li class='toDoLIReference' title='Date to deliver: " + document.getElementById("newDate").value + "' draggable='true' id='li" + toDoAmmount + "'> <img draggable='false' style='width: 32px; height: 32px; vertical-align: middle;' onclick='expand(this, 0)' id='showli" + toDoAmmount + "' src='../IconsAndImages/info.png'> <input type='checkbox' onclick='toMiddle(this)' id='checkbox" + toDoAmmount + "' class = 'check'>" + newElement.value + "</li>" + "<p class='toDoPLIReference'style='display: none;' id = 'lip" + toDoAmmount + "'>" + newDescription.value + "</p>";
        if (document.getElementById("newDate").value == "") {
            document.getElementById("li" + toDoAmmount).title = "Date to deliver: none";
        }
        toDoAmmount++;
        newElement.value = "";
        newDescription.value = "";
        document.getElementById("newDate").value = "";
        orderToDo();
    }
    if (newElement.value.split('').length > 25) {
        alert("Task name too long");
    }
    if (newDescription.value.split('').length > 25) {
        alert("Description too long");
    }
}

function toMiddle(sigma) {
        var nofun;
        nofun = sigma.id;
        var fun = nofun.split('');
        var value = 0;
        for (var i = 8; i < fun.length; i++) {
            value = value + fun[i] * Math.pow(10, fun.length - i - 1);
        }
        var title = document.getElementById("li" + value).title;
        // adding part
        doingList.innerHTML += "<li class='toMiddleLIReference' draggable='true' title='" + title + "' id='lii" + doingAmmount + "'> <img draggable='false' style='width: 32px; height: 32px; vertical-align: middle;' onclick='expand(this, 1)' id='showlii" + doingAmmount + "' src='../IconsAndImages/info.png'> <input type='checkbox' onclick='toFinished(this)' id='checkboxi" + doingAmmount + "'  class='check'>" + document.getElementById('li' + value).innerText + "</li>" + "<p style='display: none;' id = 'liip" + doingAmmount + "'>" + document.getElementById("lip" + value).innerText + "</p>";
        // removal part
        document.getElementById("li" + value).outerHTML = "";
        doingAmmount++;
        //orderToMiddle();
}

function toFinished(sigma) {
        var nofun;
        nofun = sigma.id;
        var fun = nofun.split('');
        var value = 0;
        for (var i = 9; i < fun.length; i++) {
            value = value + fun[i] * Math.pow(10, fun.length - i - 1);
        }
        // adding part
        var title = document.getElementById("lii" + value).title;
        doneList.innerHTML += "<li class='toFinishedLIReference draggable='true' title = '" + title + "'id='liii" + finishedAmmount + "'> <img draggable='false' onclick='expand(this, 2)' style='width: 32px; height: 32px; vertical-align: middle;' onclick='show(this)' id='showliii" + finishedAmmount + "' src='../IconsAndImages/info.png'> <button id='button" + finishedAmmount + "' onclick='itIsOverJohnny(this)' title='Click to remove task from finished' class='but'><span class='sigmabutton'>X</span></button>" + "<span id='spanliii" + value + "'>" + document.getElementById("lii" + value).innerText + "</span> </li>" + "<p style='display: none;' id = 'liiip" + finishedAmmount + "'>" + document.getElementById("liip" + value).innerText + "</p>";
        // removal part
        document.getElementById("lii" + value).outerHTML = "";
        finishedAmmount++;
        //orderToFinished();
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
    document.getElementById("liii" + value).outerHTML = "";   
    //orderToFinished();
}
