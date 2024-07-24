var selectedRow = null;

// show alert
function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const main = document.querySelector('.main');
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

// CLear All Fields
function clearFields() {
    document.querySelector("#firstName").vlaue = "";
    document.querySelector("#lastName").vlaue = "";
    document.querySelector("#rollNo").vlaue = "";
}

// Add data

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get Form Values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNo = document.querySelector("#rollNo").value;

    // Validation
    if (firstName === "" || lastName === "" || rollNo === "") {
        showAlert("Please Fill All Fields", "danger");
    }

})

// Delete Data
document.querySelector('#student-list').addEventListener('click', (e) => {
    target = e.target;
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
        showAlert("student Data Deleted", "danger");
    }
})
