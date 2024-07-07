document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        const requestBody = {
            username: username,
            email: email,
            password: password
        };

        try {
            const response = await fetch('http://localhost:3001/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            const data = await response.json();
            
            if (response.ok) {
                alert('Registration successful!');
                window.location.href = '../login/index.html';
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });
});
