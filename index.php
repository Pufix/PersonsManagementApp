<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>See All Persons</title>
    <script src="https://ajax.googleapis.com/ajax/libs/ajax/3.5.3/ajax.min.js"></script>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'nav.php'; ?>
    <h1>All Persons</h1>
    <table >
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP Address</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
        <tbody id="personList">

        </tbody>
    </table>

    <script>
        window.onload = function() {
            fetchPersons();
        };

        function fetchPersons() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var persons = JSON.parse(xhr.responseText);
                    displayPersons(persons);
                }
            };
            xhr.open("GET", "fetch_persons.php", true);
            xhr.send();
        }

        function displayPersons(persons) {
            var personList = document.getElementById("personList");
            personList.innerHTML = ""; // Clear previous content
            
            for (var i = 0; i < persons.length; i++) {
                var person = persons[i];
                var personDiv = document.createElement("tr");
                personDiv.innerHTML = `
                    
                        <td>${person.first_name}</td>
                        <td>${person.last_name}</td>
                        <td>${person.email}</td>
                        <td>${person.gender}</td>
                        <td>${person.ip_address}</td>
                        <td><button class="editPerson" data-id="${person.id}">Update</button></td>
                        <td><button class="deletePerson" data-id="${person.id}">Delete</button></td>
                    
                `;
                personList.appendChild(personDiv);
            }

            attachEventListeners();
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
