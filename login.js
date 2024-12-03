 
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored credentials from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if credentials match
    if (username === storedUsername && password === storedPassword) {
        // Successful login, redirect to dashboard or show success message
        window.location.href = 'aflogin.html'; // Or display a success message
    } else {
        alert('Invalid username or password');
    }
});