// Function to show the login form popup
function showLoginForm() {
    document.getElementById("login-form").style.display = "flex";
}

// Function to close the login form popup
function closeLoginForm() {
    document.getElementById("login-form").style.display = "none";
}

// Function to show the user profile popup
function showUserProfile() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (name && email) {
        document.getElementById("profile-name").textContent = name;
        document.getElementById("profile-email").textContent = email;
        document.getElementById("profile-box").style.display = "flex";
    } else {
        alert("No user data found. Please register first.");
    }
}

// Function to close the user profile popup
function closeUserProfile() {
    document.getElementById("profile-box").style.display = "none";
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Save to localStorage for the profile popup
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Allow form submission to backend
    event.target.submit();
}
