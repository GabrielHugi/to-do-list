function orderToDo() {
    // grabs objects
    var objects = new Array;
    objects = document.querySelectorAll('.toDoLIReference');
    var descriptions = new Array;
    descriptions = document.querySelectorAll('.toDoPLIReference');
    // date values
    var date = new Array;
    var values;
    // gets the values of the dates in order
    for (var i = 0; i < objects.length; i++) {
        var expendable = objects[i].title;
        var numdate = expendable.split('');
        values = "";
        for (var i2 = 17; i2 < numdate.length; i2++) {
            if (i2 != 21 && i2 != 24) {
                values += numdate[i2];
            }
            if (numdate.length == 21) {
                values = "99999999";
                i2 = 21;
            }
        }
        date[i] = Number(values);
    }
    // bubble sort algorithm
    for (var i = 0; i < date.length; i++) {
        for (var j = 0; j < (date.length - i - 1); j++) {
            if (date[j] > date[j+1]) {
                // swaps the objects and refreshes the objects array
                var temp = objects[j].outerHTML
                objects[j].outerHTML = objects[j+1].outerHTML;
                objects[j + 1].outerHTML = temp;
                objects = document.querySelectorAll('.toDoLIReference');
                // swaps the descriptions and refreshes the descriptions array
                temp = descriptions[j].outerHTML;
                descriptions[j].outerHTML = descriptions[j+1].outerHTML;
                descriptions[j+1].outerHTML = temp;
                descriptions = document.querySelectorAll('.toDoPLIReference');
                // swaps date
                temp = date[j];
                date[j] = date[j + 1];
                date[j + 1] = temp;
            }
        }
    }    
}


// same as orderToDo but handles on going
function orderToMiddle() {
    var objects = new Array;
    objects = document.querySelectorAll('.toMiddleLIReference');
    var descriptions = new Array;
    descriptions = document.querySelectorAll('.toMiddlePLIReference');
    var date = new Array;
    var values;
    for (var i = 0; i < objects.length; i++) {
        var expendable = objects[i].title;
        var numdate = expendable.split('');
        values = "";
        for (var i2 = 17; i2 < numdate.length; i2++) {
            if (i2 != 21 && i2 != 24) {
                values += numdate[i2];
            }
            if (numdate.length == 21) {
                values = "99999999";
                i2 = 21;
            }
        }
        date[i] = Number(values);
    }
    for (var i = 0; i < date.length; i++) {
        for (var j = 0; j < (date.length - i - 1); j++) {
            if (date[j] > date[j+1]) {
                var temp = objects[j].outerHTML
                objects[j].outerHTML = objects[j+1].outerHTML;
                objects[j + 1].outerHTML = temp;
                objects = document.querySelectorAll('.toMiddleLIReference');
                // ----
                temp = descriptions[j].outerHTML;
                descriptions[j].outerHTML = descriptions[j+1].outerHTML;
                descriptions[j+1].outerHTML = temp;
                descriptions = document.querySelectorAll('.toMiddlePLIReference');
                // ----
                temp = date[j];
                date[j] = date[j + 1];
                date[j + 1] = temp;
            }
        }
    }    
}


// same as orderToDo but handles done
function orderToFinished() {
    var objects = new Array;
    objects = document.querySelectorAll('.toFinishedLIReference');
    var descriptions = new Array;
    descriptions = document.querySelectorAll('.toFinishedPLIReference');
    var date = new Array;
    var values;
    for (var i = 0; i < objects.length; i++) {
        var expendable = objects[i].title;
        var numdate = expendable.split('');
        values = "";
        for (var i2 = 17; i2 < numdate.length; i2++) {
            if (i2 != 21 && i2 != 24) {
                values += numdate[i2];
            }
            if (numdate.length == 21) {
                values = "99999999";
                i2 = 21;
            }
        }
        date[i] = Number(values);
    }
    for (var i = 0; i < date.length; i++) {
        for (var j = 0; j < (date.length - i - 1); j++) {
            if (date[j] > date[j+1]) {
                var temp = objects[j].outerHTML
                objects[j].outerHTML = objects[j+1].outerHTML;
                objects[j + 1].outerHTML = temp;
                objects = document.querySelectorAll('.toFinishedLIReference');
                // ----
                temp = descriptions[j].outerHTML;
                descriptions[j].outerHTML = descriptions[j+1].outerHTML;
                descriptions[j+1].outerHTML = temp;
                descriptions = document.querySelectorAll('.toFinishedPLIReference');
                // ----
                temp = date[j];
                date[j] = date[j + 1];
                date[j + 1] = temp;
            }
        }
    }    
}