document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
  
    if (username === '' || password === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Example credentials
    if (username === 'user@example.com' && password === 'password123') {
      alert('Login successful!');
      window.location.href = 'dashboard.html'; // Redirect
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
  