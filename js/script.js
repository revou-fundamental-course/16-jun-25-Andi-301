
// Function to validate the form
function validateForm() {
    // Get all input elements by its ID
    const nameInput = document.getElementById('name-input');
    const birthdayInput = document.getElementById('birthday-input');
    const genderInput = document.getElementById("gender-input").value;
    const messageInput = document.getElementById('message-input');

    if (nameInput.value === '' || birthdayInput.value === '' || genderInput === '' || messageInput.value === '') {
        // If any input is empty, alert the user
        alert('Please enter your name!');
    } else {
        // If all input is valid, display the name in the result form
        document.getElementById('result-form').innerHTML = nameInput.value;
    }
}