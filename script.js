var selectedRow = null;

// Show Alerts

function showAlert(message, className) {

    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);

}

// Clear All Fields

function clearFields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNum").value = "";
}

// Add Data

const btn = document.querySelector("#student-form");

if (btn) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        // Get Form Values

        const firstName = document.querySelector("#firstName").value;
        const lastName = document.querySelector("#lastName").value;
        const rollNum = document.querySelector("#rollNum").value;

        // Validate

        if (firstName == "" || lastName == "" || rollNum == "") {
            //showAlert("please fill in all fields", "danger")
        } else {
            if (selectedRow == null) {
                const list = document.querySelector("#student-list");
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${rollNum}</td>
                    <td>
                        <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                    </td>
                `;
                list.appendChild(row);
                selectedRow = null;
               //showAlert("Student Added", "success");
            }
            else {
                selectedRow.children[0].textContent = firstName;
                selectedRow.children[1].textContent = lastName;
                selectedRow.children[2].textContent = rollNum;
                selectedRow = null;
                showAlert("Student Info Edited", "info")
            }

            clearFields();
        }
    });
}

// Edit Data

const btn2 = document.querySelector("#student-list");

if(btn2){
    btn2.addEventListener("click", (e) => {
        target = e.target
        if(target.classList.contains('edit')){
            selectedRow = target.parentElement.parentElement;
            document.querySelector("#firstName").value = selectedRow.classList[0].textContent;
            document.querySelector("#lastName").value = selectedRow.classList[1].textContent;
            document.querySelector("#rollNum").value = selectedRow.classList[2].textContent;
        }
    });
}

// Deleting Data

const btn1 = document.querySelector("#student-list");

if (btn1) {
    btn1.addEventListener("click", (e) => {
        target = e.target;
        if (target.classList.contains("delete")) {
            target.parentElement.parentElement.remove();
            showAlert("Student Data Deleted", "danger");
        }
    });
}
