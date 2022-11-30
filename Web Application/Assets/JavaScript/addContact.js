let savedContacts = [], currentContacts = [];
clearErrorMessage()

function displayErrorMessage(n) {
    let errorMsg = document.getElementById('errorMessage'+ n);
    let errorMsgContainer = document.getElementById('error');

    errorMsgContainer.style.display = '';
    errorMsg.style.display = '';
}


function clearErrorMessage() {
    for (let index = 1; index <= 9; index++) {
        let x = 'errorMessage'+index;
        let errorMsg = document.getElementById(x);
        errorMsg.style.display = 'none';
    }
    
    let errorMsgContainer = document.getElementById('error');
    errorMsgContainer.style.display = 'none';   
}


function contactDetailValidation() {
    let contact = {
        name:  document.getElementById('contactName').value,
        mobile: document.getElementById('mobileNumber').value,
        email: document.getElementById('emailAddress').value
    };

    let nameSyntax = /^[a-zA-Z ]+$/, mobileSyntax = /^[0-9]+$/, emailSyntax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (contact.name != "") {
        if (contact.mobile != "") {
            if (contact.email != "") {
                if (contact.name.match(nameSyntax) != null) {
                    if (contact.name.length <= 20) {
                        if (contact.mobile.match(mobileSyntax) != null) {
                            if (contact.mobile.length == 10) {
                                if (contact.email.match(emailSyntax) != null) {
                                    if (contact.email.length < 40) {
                                        savedContacts.push(contact);

                                        if (localStorage.getItem("contactSummary") === null) {
                                            localStorage.setItem("contactSummary", JSON.stringify(savedContacts));
                                        } else {
                                            currentContacts = JSON.parse(localStorage.getItem("contactSummary"));
                                            currentContacts.push(contact);
                                            localStorage.setItem("contactSummary", JSON.stringify(currentContacts));
                                        }

                                        alert('Your contact details have been saved!\nClick the \'Okay\' button to view the Contacts Summary');
                                        window.location = 'index.html';

                                    } else {
                                        clearErrorMessage();
                                        displayErrorMessage('9');
                                    }
                                } else {
                                    clearErrorMessage();
                                    displayErrorMessage('8');
                                }
                            } else {
                                clearErrorMessage();
                                displayErrorMessage('7');
                            }
                        } else {
                            clearErrorMessage();
                            displayErrorMessage('6');
                        }
                    } else {
                        clearErrorMessage();
                        displayErrorMessage('5');
                    }
                } else {
                    clearErrorMessage();
                    displayErrorMessage('4');
                }
            } else {
                clearErrorMessage();
                displayErrorMessage('3');
            }
        } else {
            clearErrorMessage();
            displayErrorMessage('2');
        }
    } else {
        clearErrorMessage();
        displayErrorMessage('1');
    }


}
