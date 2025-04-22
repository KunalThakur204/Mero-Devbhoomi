document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple validation
    if(username === "" || password === "") {
      alert("Both fields are required!");
      return;
    }
  
    // Placeholder logic for validation
    if(username === "user" && password === "password123") {
      // Redirect to the homepage or dashboard after successful login
      window.location.href = "index.html"; // Replace with actual homepage URL
    } else {
      alert("Invalid username or password.");
    }
  });
  