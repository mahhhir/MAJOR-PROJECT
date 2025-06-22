
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login form');
    const emailInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const showHidePassword = document.querySelector('.showHidePw');
    const loginButton = document.querySelector('.button-link');
    const rememberCheckbox = document.querySelector('#logCheck');

    
    const validCredentials = {
        'KumarChillaSingh@health.nsw.gov.au': 'Enterprise',
        
    };

    if (showHidePassword) {
        showHidePassword.addEventListener('click', function() {
            const passwordField = passwordInput;
            
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                showHidePassword.classList.remove('uil-eye-slash');
                showHidePassword.classList.add('uil-eye');
            } else {
                passwordField.type = 'password';
                showHidePassword.classList.remove('uil-eye');
                showHidePassword.classList.add('uil-eye-slash');
            }
        });
    }

    
    if (loginButton) {
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const rememberMe = rememberCheckbox.checked;

         
            if (!email || !password) {
                alert('Please fill in all required fields.');
                return;
            }

          
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (validCredentials[email] && validCredentials[email] === password) {
            
                if (rememberMe) {
                    localStorage.setItem('rememberedEmail', email);
                } else {
                    localStorage.removeItem('rememberedEmail');
                }

              
                alert('Login successful! Welcome to NSW Health Portal.');
                
              
                setTimeout(function() {
                    window.location.href = 'index.html';
                }, 1000);
                
            } else {
                alert('Invalid email or password. Please try again.');
             
                passwordInput.value = '';
            }
        });
    }

  
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        emailInput.value = rememberedEmail;
        rememberCheckbox.checked = true;
    }



  
    function addInputValidation() {
        const inputs = [emailInput, passwordInput];
        
        inputs.forEach(input => {
            if (input) {
                input.addEventListener('blur', function() {
                    if (this.value.trim() === '') {
                        this.style.borderColor = '#ff6b6b';
                    } else {
                        this.style.borderColor = '#ddd';
                    }
                });

                input.addEventListener('focus', function() {
                    this.style.borderColor = '#4CAF50';
                });
            }
        });
    }

    addInputValidation();

    console.log('Login script loaded successfully');
    console.log('Valid test credentials:');
    Object.keys(validCredentials).forEach(email => {
        console.log(`Email: ${email}, Password: ${validCredentials[email]}`);
    });
});



