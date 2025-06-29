
        const pwShowHide = document.querySelectorAll(".showHidePw");
        
        pwShowHide.forEach(eyeIcon => {
            eyeIcon.addEventListener("click", () => {
                const pwField = eyeIcon.parentElement.querySelector(".password");
                
                if (pwField.type === "password") {
                    pwField.type = "text";
                    eyeIcon.classList.replace("uil-eye-slash", "uil-eye");
                } else {
                    pwField.type = "password";
                    eyeIcon.classList.replace("uil-eye", "uil-eye-slash");
                }
            });
        });

        const registrationForm = document.getElementById('registrationForm');
        
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
  
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
        
            if (!validateForm(name, email, password, confirmPassword)) {
                return; 
            }
            
           
            alert('Registration successful! Welcome to NSW Health Patient Portal.');
            
          
            setTimeout(() => {
                window.location.href = 'patientlogin.html';
            }, 1000);
        });
        
        function validateForm(name, email, password, confirmPassword) {
      
            if (!name) {
                alert('Please enter your name.');
                return false;
            }
            
  
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return false;
            }
            

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return false;
            }
        
            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                return false;
            }
            
            return true;
        }
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }