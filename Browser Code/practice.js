// practice.js

// Function to handle signup
function signup() {
    const email = document.getElementById('signemail').value;
    const password = document.getElementById('signpassword').value;

    // Check if fields are empty
    if (!email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Save user data to localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert("Signup successful! You can now login.");

    window.location.href="practice.html";

    // Verify stored data directly
    console.log("Stored Email:", localStorage.getItem('userEmail'));
    console.log("Stored Password:", localStorage.getItem('userPassword'));

    // Redirect to the login page
    window.location.href = 'practice.html';
}

// Function to handle login
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Log retrieved data to the console
    console.log("Retrieved Email:", storedEmail);
    console.log("Retrieved Password:", storedPassword);

    // Validate credentials
    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href="main.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
