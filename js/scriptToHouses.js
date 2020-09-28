


$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data.csv",
        dataType: "text",
        success: function(data) {processData(data);}
    });
});
var iter = 0;
function processData(allText) {
    var therows = allText.split("\n");
    for (var row = 0; row < therows.length; row++  ) {
        var newrow = "";
        var columns = therows[row].split(",");
        newrow = "<tr><td>"  +  columns[0] +   "</td><td>"  +  columns[1]  + "</td><td>" +  columns[2] +  "</td>";
        var rrr = " <td href='www'>"  +  "Plan: " + row + " </td>";

        newrow  += rrr;
        newrow  += "<td>" +  columns[4]  + "</td></tr>";
        $('#tableMain').append(newrow);
    }
    var table = document.getElementById("tableMain");
        var iter = 0
    table.addEventListener("click", function(e) {
        if (e.target && e.target.nodeName === "TD") {
            iter++;
            if (e.target.valueOf().cellIndex === 3){
                moveTo('plan.pdf');
            }
        }
    });
    $(window).trigger('resize.px.parallax');
}




function sortTable(columnNo) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tableMain");
    switching = true;
    var switcheds = false;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnNo];
            y = rows[i + 1].getElementsByTagName("TD")[columnNo];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switcheds = true;
        }
    }
    if (!switcheds)sortTableDis(columnNo)
}



function sortTableDis(columnNo) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tableMain");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnNo];
            y = rows[i + 1].getElementsByTagName("TD")[columnNo];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
