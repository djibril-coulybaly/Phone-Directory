let retrievedData = localStorage.getItem("contactSummary");
let retrievedSavedContact = JSON.parse(retrievedData);

for (index in retrievedSavedContact) {
    let tableDisplay = document.getElementById('contactSummary');
    let tr = document.createElement('tr');
    let tableName = document.createElement('td');
    let tableNumber = document.createElement('td');
    let tableEmail = document.createElement('td');

    tableName.innerHTML = retrievedSavedContact[index].name;
    tableNumber.innerHTML = retrievedSavedContact[index].mobile;
    tableEmail.innerHTML = retrievedSavedContact[index].email;

    tr.appendChild(tableName);
    tr.appendChild(tableNumber);
    tr.appendChild(tableEmail);

    tableDisplay.appendChild(tr)
}