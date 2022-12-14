function sortTable() {
    let i, x, y, rows, shouldSwitch, switchcount = 0;
    let tableDisplay = document.getElementById("contactSummary");
    let switching = true;
    let dir = "asc";
    
    /*Make a loop that will continue until no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = tableDisplay.getElementsByTagName("tr");

        /*Loop through all table rows (except the first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;

            /*Get the two elements you want to compare, one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("td")[0];
            y = rows[i + 1].getElementsByTagName("td")[0];

            /*check if the two rows should switch place, based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function filterTable() {
    let filter = document.getElementById("searchMobileNumber").value;
    let noResultContainer = document.getElementById("noResult");
    let tableRows = document.getElementsByTagName("tr");
    let nodisplay = 0;

    for (i = 1; i < tableRows.length; i++) {
        let column = tableRows[i].getElementsByTagName("td")[1];
        let language = column.textContent;

        if (language.includes(filter) == 1) {
            tableRows[i].style.display = "";
        } else {
            tableRows[i].style.display = "none";
            nodisplay++;
        }

        if (nodisplay == tableRows.length - 1) {
            noResultContainer.style.display = "";
        } else {
            noResultContainer.style.display = 'none';
        }
    }
}

function clearnoResult() {
    let errorMsgContainer = document.getElementById('noResult');
    errorMsgContainer.style.display = 'none';   
}

clearnoResult();
document.getElementById("searchMobileNumber").addEventListener("keyup", filterTable);