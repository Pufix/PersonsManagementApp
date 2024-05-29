<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Add Person</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php include 'nav.php'; ?>
    <div class="container">
        <h1>Add Person</h1>
        <form id="addPersonForm">
            <label for="first_name">First Name</label>
            <input type="text" id="first_name" name="first_name" required>
            
            <label for="last_name">Last Name</label>
            <input type="text" id="last_name" name="last_name" required>
            
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            
            <label for="gender">Gender</label>
            <input type="text" id="gender" name="gender" required>
            
            <label for="ip_address">IP Address</label>
            <input type="text" id="ip_address" name="ip_address" required>
            
            <button type="button" onclick="addPerson()">Add Person</button>
        </form>
    </div>

    <script>
        function addPerson() {
            var form = document.getElementById("addPersonForm");
            var formData = new FormData(form);

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "add_person.php", true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    alert("Person added successfully!");
                    form.reset(); // Clear the form
                } else {
                    alert("Failed to add person. Please try again.");
                }
            };
            xhr.send(formData);
        }
    </script>
</body>
</html>
