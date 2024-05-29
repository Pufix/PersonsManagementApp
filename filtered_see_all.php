<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Filtered See All</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'nav.php'; ?>
    <div class="container">

        <h1>Filtered See All</h1>
        <label for="searchName">Enter part of the name:</label>
        <input type="text" id="searchName">
        <button onclick="filterPersons()">Search</button>
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Ip address</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            <tbody id="filteredPersons">

            </tbody>
        </table>
    </div>

    <script>
        function filterPersons() {
            var namePart = document.getElementById("searchName").value;
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var persons = JSON.parse(xhr.responseText);
                    displayPersons(persons);
                }
            };
            xhr.open("GET", "filter_persons.php?name_part=" + namePart, true);
            xhr.send();
        }

        function displayPersons(persons) {
            var filteredPersons = document.getElementById("filteredPersons");
            filteredPersons.innerHTML = ""; // Clear previous content

            for (var i = 0; i < persons.length; i++) {
                var person = persons[i];
                var personDiv = document.createElement("tr");
                personDiv.innerHTML = `
                    <tr>
                    <td>${person.first_name}</td>
                    <td>${person.last_name}</td>
                    <td>${person.email}</td>
                    <td>${person.gender}</td>
                    <td>${person.ip_address}</td>
                    <td><button class="editPerson" data-id="${person.id}">Update</button></td>
                    <td><button class="deletePerson" data-id="${person.id}">Delete</button></td>
                    </tr>
                `;
            filteredPersons.appendChild(personDiv);

            attachEventListeners();
            }

        }

        function attachEventListeners() {
            var editButtons = document.getElementsByClassName("editPerson");
            var deleteButtons = document.getElementsByClassName("deletePerson");

            Array.from(editButtons).forEach(function(button) {
                button.addEventListener("click", function() {
                    var id = this.getAttribute("data-id");
                    window.location.href = "update_item.php?id=" + id;
                });
            });

            Array.from(deleteButtons).forEach(function(button) {
                button.addEventListener("click", function() {
                    var id = this.getAttribute("data-id");
                    window.location.href = "delete_item.php?id=" + id;
                });
            });
        }
    </script>
</body>
</html>
