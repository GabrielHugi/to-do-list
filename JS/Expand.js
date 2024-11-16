function expand(object, op) {
    var nofun = object.id;
    var fun = nofun.split('');
    var idnum = 0;
    for (var i = 6+op  ; i < fun.length; i++) {
        idnum = idnum + fun[i] * Math.pow(10, fun.length - i - 1);
    }
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
        if(document.getElementById("li" + idnum).title != "Date to deliver: 9999999999") {
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
        if(document.getElementById("li" + idnum).title != "Date to deliver: 9999999999") {
            document.getElementById("dateToDeliver").innerText = document.getElementById("liii" + idnum).title;
        }
        else {
            document.getElementById("dateToDeliver").innerText = "Date to deliver: none";
        }
    }


    document.getElementById("expanded").style.display = "flex";
}

function unExpand() {
    document.getElementById("expanded").style.display = "none";
}