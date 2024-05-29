document.addEventListener('DOMContentLoaded', function() {
    function fetchPersons() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    var rows = '';
                    data.forEach(function(person) {
                        rows += '<tr>' +
                            '<td>' + person.first_name + '</td>' +
                            '<td>' + person.last_name + '</td>' +
                            '<td>' + person.email + '</td>' +
                            '<td>' + person.gender + '</td>' +
                            '<td>' + person.ip_address + '</td>' +
                            '<td>' +
                            '<button class="editPerson" data-id="' + person.id + '">Edit</button>' +
                            '<button class="deletePerson" data-id="' + person.id + '">Delete</button>' +
                            '</td>' +
                            '</tr>';
                    });
                    document.getElementById('personTable').getElementsByTagName('tbody')[0].innerHTML = rows;
                } else {
                    console.error('Error fetching data from server');
                }
            }
        };
        xhr.open('GET', 'fetch_persons.php');
        xhr.send();
    }

    fetchPersons();

    document.getElementById('addPerson').addEventListener('click', function() {
        document.getElementById('personForm').reset();
        document.getElementById('id').value = '';
        document.getElementById('personModal').style.display = 'block';
    });

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('editPerson')) {
            var id = event.target.getAttribute('data-id');
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        var data = JSON.parse(xhr.responseText);
                        document.getElementById('id').value = data.id;
                        document.getElementById('first_name').value = data.first_name;
                        document.getElementById('last_name').value = data.last_name;
                        document.getElementById('email').value = data.email;
                        document.getElementById('gender').value = data.gender;
                        document.getElementById('ip_address').value = data.ip_address;
                        document.getElementById('personModal').style.display = 'block';
                    } else {
                        console.error('Error fetching person data from server');
                    }
                }
            };
            xhr.open('GET', 'fetch_person.php?id=' + id);
            xhr.send();
        }
    });

    document.addEventListener('click', function(event) {
        console.log(event.target);
        if (event.target.classList.contains('deletePerson')) {
            console.log('deletePerson');
            var id = event.target.getAttribute('data-id');
            if (confirm('Are you sure you want to delete this person?')) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        if (xhr.status === 200) {
                            alert('Person deleted successfully!');
                            fetchPersons();
                        } else {
                            console.error('Error deleting person');
                        }
                    }
                };
                xhr.open('POST', 'delete_person.php');
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhr.send('id=' + id);
            }
        }
    });

    document.getElementById('personForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    alert('Person saved successfully!');
                    document.getElementById('personModal').style.display = 'none';
                    fetchPersons();
                } else {
                    console.error('Error saving person');
                }
            }
        };
        xhr.open('POST', 'save_person.php');
        xhr.send(formData);
    });

    document.querySelectorAll('.close').forEach(function(closeButton) {
        closeButton.addEventListener('click', function() {
            document.getElementById('personModal').style.display = 'none';
        });
    });
});
