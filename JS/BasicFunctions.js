// to do list functions
// input fields (besides date, which is called via id every time in the code)
const newElement =  document.getElementById("newItem");
const newDescription =  document.getElementById("newDescription");
// main containers
const toDoList =  document.getElementById("to-do-list");
const doingList =  document.getElementById("doing-list");
const doneList = document.getElementById("done-list");
// main tracking variables
var toDoAmmount = 0, doingAmmount = 0, finishedAmmount = 0;

/*
-------------------------------------------------------------------------

Section for fitting the screen properly to the size of the user's screen

-------------------------------------------------------------------------
*/
var screenWidth;
var screenHeight;
// calls the function once to set the proper values for the current size of the screen which has not been yet resized
resize();
function resize() {
    // gets avaible space on the screen in pixels
    screenWidth = screen.availWidth;
    screenHeight = screen.availHeight;
    // sets width of the screen to be the width of the screen. Helps in some browsers.
    document.body.style.width = screenWidth + "px";
    document.body.style.maxWidth = screenWidth + "px";
    // sets minimum heights for style
    toDoList.style.minHeight = screenHeight*0.65 + "px";
    doingList.style.minHeight = screenHeight*0.65 + "px";
    doneList.style.minHeight = screenHeight*0.65 + "px";
}
// calls function resize upon resizing of the screen
window.addEventListener('resize', resize);

/*
-------------------------------------------------------------------------

Section for handling the addition and movement of the items of the to do list

-------------------------------------------------------------------------
*/

// checks if the input provided is the enter key, which then calls addToDo()
function checkIfEnterKey(event) {
    if (event.key == "Enter") {
        addToDo();
    }
}


function addToDo(event) {
    // verifies wether the input is proper
    if (newElement.value != "" && newElement.value.split('').length <= 22 && newDescription.value.split('').length <= 600) {

        //adds the information
        //class serves for gathering in Ordering.js
        //title is used to conveniently store the date where the task should be delivered
        //id is used for identification
        //image is for triggering Expand.js functions
        //<p> is hidden and stores the information of the description
        toDoList.innerHTML += "<li class='toDoLIReference' title='Date to deliver: " + document.getElementById("newDate").value + "' draggable='true' id='li" + toDoAmmount + "'> <img draggable='false' style='width: 32px; height: 32px; vertical-align: middle;' onclick='expand(this, 0)' id='showli" + toDoAmmount + "' src='../IconsAndImages/info.png'> <input type='checkbox' onclick='toMiddle(this)' id='checkbox" + toDoAmmount + "' class = 'check'>" + newElement.value + "</li>" + "<p class='toDoPLIReference'style='display: none;' id = 'lip" + toDoAmmount + "'>" + newDescription.value + "</p>";
        //if no date is set then sets the delivery date to "None", which is later translated to 99999999 (for context, non void dates are translated to 8 digit numbers in the format yyyymmdd, for example 20240908)
        if (document.getElementById("newDate").value == "") {
            document.getElementById("li" + toDoAmmount).title = "Date to deliver: None";
        }
        // increases control variable and resets values of input boxes
        toDoAmmount++;
        newElement.value = "";
        newDescription.value = "";
        document.getElementById("newDate").value = "";
        // calls ordering function
        orderToDo();
    }
    // alerts which input field is too long
    if (newElement.value.split('').length > 22) {
        alert("Task name too long. Max characters: 22");
    }
    if (newDescription.value.split('').length > 600) {
        alert("Description too long. Max characters: 600");
    }
}

function toMiddle(sigma) {
        // grabs the id number of caller
        var nofun;
        nofun = sigma.id;
        var fun = nofun.split('');
        var value = 0;
        for (var i = 8; i < fun.length; i++) {
            value = value + fun[i] * Math.pow(10, fun.length - i - 1);
        }
        var title = document.getElementById("li" + value).title;
        //adds the information
        //class serves for gathering in Ordering.js
        //title is used to conveniently store the date where the task should be delivered
        //id is used for identification
        //image is for triggering Expand.js functions
        //<p> is hidden and stores the information of the description
        doingList.innerHTML += "<li class='toMiddleLIReference' draggable='true' title='" + title + "' id='lii" + doingAmmount + "'> <img draggable='false' style='width: 32px; height: 32px; vertical-align: middle;' onclick='expand(this, 1)' id='showlii" + doingAmmount + "' src='../IconsAndImages/info.png'> <input type='checkbox' onclick='toFinished(this)' id='checkboxi" + doingAmmount + "'  class='check'>" + document.getElementById('li' + value).innerText + "</li>" + "<p class='toMiddlePLIReference' style='display: none;' id = 'liip" + doingAmmount + "'>" + document.getElementById("lip" + value).innerText + "</p>";
        // removes this item from the previous container as for it was moved
        document.getElementById("li" + value).outerHTML = "";
        // increase control variable and call ordering functions
        doingAmmount++;
        orderToDo();
        orderToMiddle();
}

function toFinished(sigma) {
        // grabs the id number of caller
        var nofun;
        nofun = sigma.id;
        var fun = nofun.split('');
        var value = 0;
        for (var i = 9; i < fun.length; i++) {
            value = value + fun[i] * Math.pow(10, fun.length - i - 1);
        }
        //adds the information
        //class serves for gathering in Ordering.js
        //title is used to conveniently store the date where the task should be delivered
        //id is used for identification
        //image is for triggering Expand.js functions
        //<p> is hidden and stores the information of the description
        var title = document.getElementById("lii" + value).title;
        doneList.innerHTML += "<li class='toFinishedLIReference draggable='true' title = '" + title + "'id='liii" + finishedAmmount + "'> <img draggable='false' onclick='expand(this, 2)' style='width: 32px; height: 32px; vertical-align: middle;' onclick='show(this)' id='showliii" + finishedAmmount + "' src='../IconsAndImages/info.png'> <button id='button" + finishedAmmount + "' onclick='itIsOverJohnny(this)' title='Click to remove task from finished' class='but'><span class='sigmabutton'>X</span></button>" + "<span id='spanliii" + finishedAmmount + "'>" + document.getElementById("lii" + value).innerText + "</span> </li>" + "<p class='toFinishedPLIReference' style='display: none;' id = 'liiip" + finishedAmmount + "'>" + document.getElementById("liip" + value).innerText + "</p>";
        // removes this item from the previous container as for it was moved
        document.getElementById("lii" + value).outerHTML = "";
        // increase control variable and call ordering functions
        finishedAmmount++;
        orderToMiddle();
        orderToFinished();
}

function itIsOverJohnny(rambo) {
    //NOTHING IS OVER, NOTHING!
    // grabs the id number of caller
    var nofun;
    nofun = rambo.id;
    var fun = nofun.split('');
    value = 0;
    for (var i = 6; i < fun.length; i++) {
        var value = value + fun[i] * Math.pow(10, fun.length - i - 1);
    }
    // removes it
    document.getElementById("liii" + value).outerHTML = "";   
    // calls ordering function
    orderToFinished();
}
