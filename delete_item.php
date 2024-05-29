<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Delete Person</title>
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
        center {
            margin:auto;
        }
    </style>
</head>
<body>
    <?php include 'nav.php'; ?>
    <div class="container">
        <center>
            <h1>Delete Person</h1>
        <?php
        // Fetch the person's details based on the provided ID
        include 'db.php';
        $id = $_GET['id'];
        $sql = "SELECT * FROM Person WHERE id='$id'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $name = $row['first_name'] . ' ' . $row['last_name'];
            echo "<p>Are you sure you want to delete <strong>$name</strong>?</p>";
        }
        ?>
        <form id="deletePersonForm">
            <input type="hidden" name="id" value="<?php echo $id; ?>">
            <label for="confirm_name">Enter the name of the person to confirm:</label>
            <input type="text" name="confirm_name" required>
            <button type="button" onclick="deletePerson()">Delete</button>
        </form>
        
        </center>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/ajax/3.5.3/ajax.min.js"></script>
    <script>
        function deletePerson() {
            var confirmName = document.getElementsByName("confirm_name")[0].value;
            var xhr = new XMLHttpRequest();
            if (confirmName !== "<?php echo $name; ?>") {
                alert("The entered name does not match the name of the person to be deleted.");
                return;
            }
            xhr.onreadystatechange = function() {

                if (xhr.readyState == 4 && xhr.status == 200) {
                    alert(xhr.responseText);
                    window.location.href = 'index.php';
                }
            };
            xhr.open("POST", "delete_person.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send("id=<?php echo $id; ?>&confirm_name=" + confirmName);
        }
    </script>
</body>
</html>
