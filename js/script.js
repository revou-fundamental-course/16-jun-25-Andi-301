
// Function to validate the form
function validateForm() {
    // Get all input elements by its ID
    const nameInput = document.getElementById('name-input');
    const birthdayInput = document.getElementById('birthday-input');
    const genderInput = document.getElementById("gender-input").value;
    const messageInput = document.getElementById('message-input');

    if (nameInput.value === '' || birthdayInput.value === '' || genderInput === '' || messageInput.value === '') {
        // If any input is empty, alert the user
        alert('Please enter all of your inputs!');
    } else {
        // If all input is valid, display the current time, name, birthday, gender, and message in the result form
        // Define the current time
        const currentTime = new Date();
        document.getElementById('result-form').innerHTML = 
        "Waktu Saat ini : " + currentTime + 
        "<br>Nama : " + nameInput.value + 
        "<br>Tanggal Lahir : " + birthdayInput.value + 
        "<br>Jenis Kelamin : " + genderInput + 
        "<br>Pesan : " + messageInput.value;
    }
}