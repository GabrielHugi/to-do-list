/*
-------------------------------------------------------------------------

Expand and unexpand of the information window

-------------------------------------------------------------------------
*/

function expand(object, op) {
    // grabs id number
    var nofun = object.id;
    var fun = nofun.split('');
    var idnum = 0;
    for (var i = 6+op  ; i < fun.length; i++) {
        idnum = idnum + fun[i] * Math.pow(10, fun.length - i - 1);
    }
    // op handles for diferent things. 0 = to do, 1 = doing, 2 = done
    if (op == 0) {
        // task
        document.getElementById("taskExpanded").innerText = document.getElementById("li" + idnum).innerText;
        // description
        document.getElementById("descriptionExpanded").innerText = document.getElementById("lip" + idnum).innerText;
        // date
        if(document.getElementById("li" + idnum).title != "Date to deliver: 9999999999") {
            document.getElementById("dateToDeliver").innerText = document.getElementById("li" + idnum).title;
        }
        else {
            document.getElementById("dateToDeliver").innerText = "Date to deliver: none";
        }
    }
    if (op == 1) {
        // task
        document.getElementById("taskExpanded").innerText = document.getElementById("lii" + idnum).innerText;
        // description
        document.getElementById("descriptionExpanded").innerText = document.getElementById("liip" + idnum).innerText;
        // date
        if(document.getElementById("lii" + idnum).title != "Date to deliver: 9999999999") {
            document.getElementById("dateToDeliver").innerText = document.getElementById("lii" + idnum).title;
        }
        else {
            document.getElementById("dateToDeliver").innerText = "Date to deliver: none";
        }
    }
    if (op == 2) {
        // task
        document.getElementById("taskExpanded").innerText = document.getElementById("spanliii" + idnum).innerText;
        // description
        document.getElementById("descriptionExpanded").innerText = document.getElementById("liiip" + idnum).innerText;
        // date
        if(document.getElementById("liii" + idnum).title != "Date to deliver: 9999999999") {
            document.getElementById("dateToDeliver").innerText = document.getElementById("liii" + idnum).title;
        }
        else {
            document.getElementById("dateToDeliver").innerText = "Date to deliver: none";
        }
    }

    // shows window
    document.getElementById("expanded").style.display = "flex";
}

function unExpand() {
    // hides window
    document.getElementById("expanded").style.display = "none";
}