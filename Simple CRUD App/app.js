// Load saved data on page load
loadData();

// Save data to local storage
function saveData() {
  var data = JSON.parse(localStorage.getItem("data")) || []; // retrieve existing data, or create empty array if none exists
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var newData = { name: name, email: email };
  data.push(newData);
  localStorage.setItem("data", JSON.stringify(data));
  loadData();
}


// Load saved data from local storage and display it in the table
function loadData() {
  var data = JSON.parse(localStorage.getItem("data")) || [];
  var tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    var emailCell = document.createElement("td");
    var actionsCell = document.createElement("td");
    nameCell.textContent = data[i].name;
    emailCell.textContent = data[i].email;
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", editData.bind(null, i));
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteData.bind(null,i));
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(actionsCell);
    tableBody.appendChild(row);
    }
    }
    
    // Edit data
    function editData(index) {
    var data = JSON.parse(localStorage.getItem("data")) || [];
    var row = document.getElementById("table-body").children[index];
    document.getElementById("name").value = data[index].name;
    document.getElementById("email").value = data[index].email;
    deleteData(index);
    }
    
    // Delete data
    function deleteData(index) {
    var data = JSON.parse(localStorage.getItem("data")) || [];
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    loadData();
    }
