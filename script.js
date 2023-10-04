document.addEventListener("DOMContentLoaded", function () {

    const addCustomerButton = document.getElementById("addCustomerButton");
    const firstNameInput = document.getElementById("firstName");

    addCustomerButton.addEventListener("click", function () {
        firstNameInput.focus();
    });
});


function addCustomer() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;


    var tableBody = document.querySelector("#customer-table tbody");

    var newRow = tableBody.insertRow();

    newRow.insertCell(0).textContent = firstName;
    newRow.insertCell(1).textContent = lastName;
    newRow.insertCell(2).textContent = address;
    newRow.insertCell(3).textContent = city;
    newRow.insertCell(4).textContent = state;
    newRow.insertCell(5).textContent = email;
    newRow.insertCell(6).textContent = phone;

    var actionsCell = newRow.insertCell(7);
    actionsCell.innerHTML = '<button class="btn-delete" onclick="deleteCustomer(this)"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></button>' + '<button class="btn-edit" onclick="editCustomer(this)"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></button>';

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}

function deleteCustomer(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editCustomer(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    var firstName = cells[0].textContent;
    var lastName = cells[1].textContent;
    var address = cells[2].textContent;
    var city = cells[3].textContent;
    var state = cells[4].textContent;
    var email = cells[5].textContent;
    var phone = cells[6].textContent;

    document.getElementById("firstName").value = firstName;
    document.getElementById("lastName").value = lastName;
    document.getElementById("address").value = address;
    document.getElementById("city").value = city;
    document.getElementById("state").value = state;
    document.getElementById("email").value = email;
    document.getElementById("phone").value = phone;

    row.parentNode.removeChild(row);
}
