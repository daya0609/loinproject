// public/js/user.js

document.addEventListener('DOMContentLoaded', () => {
    // Handle login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
    
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });
                if (response.ok) {
                    alert('Login successful');
                    // Redirect to another page or perform other actions
                } else {
                    const error = await response.text();
                    alert(`Login failed: ${error}`);
                }
            } catch (error) {
                alert(`Error==ss>: ${error.message}`);
            }
        });
    }
  
    // Handle registration
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        try {
          const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
          });
  
          if (response.ok) {
            alert('Registration successful');
            window.location.href = 'login.html';
          } else {
            const error = await response.text();
            alert(`Registration failed: ${error}`);
          }
        } catch (error) {
          alert(`Error: ${error.message}`);
        }
      });
    }
  });
  