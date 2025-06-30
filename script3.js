document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login form');
    const emailInput = document.querySelector('input[type="email"]') || document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const showHidePassword = document.querySelector('.showHidePw');
    const loginButton = document.querySelector('.button-link');
    const rememberCheckbox = document.querySelector('#logCheck');

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
            const rememberMe = rememberCheckbox ? rememberCheckbox.checked : false;

            if (!email || !password) {
                alert('Please fill in all required fields.');
                return;
            }

           
            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }

           
            if (rememberMe) {
                localStorage.setItem('rememberedPatientEmail', email);
            } else {
                localStorage.removeItem('rememberedPatientEmail');
            }

            
            alert('Login successful! Welcome to NSW Health Patient Portal.');
            
           
            setTimeout(function() {
                window.location.href = 'indexforpatient.html'; 
            }, 1000);
        });
    }

   
    const rememberedEmail = localStorage.getItem('rememberedPatientEmail');
    if (rememberedEmail && emailInput) {
        emailInput.value = rememberedEmail;
        if (rememberCheckbox) {
            rememberCheckbox.checked = true;
        }
    }

    
    localStorage.removeItem('rememberedEmail'); 
  
    function addInputValidation() {
        const inputs = [emailInput, passwordInput].filter(input => input !== null);
        
      
    }

    addInputValidation();

    console.log('Patient login script loaded successfully');
});