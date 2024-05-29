<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Update Person</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
        }
        input {
            width: 97%;
            padding: 8px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        form {
            width: 100%;
            padding: 1px;
        }
        center {
            margin:auto;
        }
    </style>
</head>
<body>
    <?php include 'nav.php'; ?>
    
    <div class="container">
        
        <center>
        <h1>Update Person</h1>
    </center> 
        <?php
        // Fetch the person's details based on the provided ID
        include 'db.php';
        $id = $_GET['id'];
        $sql = "SELECT * FROM Person WHERE id='$id'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $first_name = $row['first_name'];
            $last_name = $row['last_name'];
            $email = $row['email'];
            $gender = $row['gender'];
            $ip_address = $row['ip_address'];
        }
        ?>
        <form id="updatePersonForm">
            <input type="hidden" name="id" value="<?php echo $id; ?>">
            <label for="first_name">First Name:</label>
            <input type="text" name="first_name" value="<?php echo $first_name; ?>" required>
            <label for="last_name">Last Name:</label>
            <input type="text" name="last_name" value="<?php echo $last_name; ?>" required>
            <label for="email">Email:</label>
            <input type="email" name="email" value="<?php echo $email; ?>" required>
            <label for="gender">Gender:</label>
            <input type="text" name="gender" value="<?php echo $gender; ?>" required>
            <label for="ip_address">IP Address:</label>
            <input type="text" name="ip_address" value="<?php echo $ip_address; ?>" required>
            <button type="button" onclick="updatePerson()">Update Person</button>
        </form>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/ajax/3.5.3/ajax.min.js"></script>
    <script>
        function updatePerson() {
            var formData = new FormData(document.getElementById("updatePersonForm"));
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    alert(xhr.responseText);
                    window.location.href = 'index.php';
                }
            };
            xhr.open("POST", "update_person.php", true);
            xhr.send(formData);
        }
    </script>
</body>
</html>
