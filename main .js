document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  try {
      const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
          alert('Login successful!');
          localStorage.setItem('token', data.token); // Store JWT token
          window.location.href = 'medicalrecords.html'; // Redirect after login
      } else {
          errorMessage.innerText = data.message || 'Invalid credentials!';
          errorMessage.style.display = 'block';
      }
  } catch (error) {
      console.error('Error:', error);
      errorMessage.innerText = 'Server error. Please try again later!';
      errorMessage.style.display = 'block';
  }
});