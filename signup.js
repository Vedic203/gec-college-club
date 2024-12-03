// Assuming you have separate HTML files for signup and login pages

// Signup page script (signup.js)
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store user credentials in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to login page or show success message
    window.location.href = 'login.html'; // Or display a success message
});
   