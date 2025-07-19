document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get the submit button
            const submitBtn = document.getElementById('submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Send the email using EmailJS
            emailjs.sendForm('service_3kie4pw', 'template_xvehk6r', this)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    document.getElementById('success-message').style.display = 'block';
                    document.getElementById('error-message').style.display = 'none';
                    document.getElementById('contact-form').reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    document.getElementById('error-message').style.display = 'block';
                    document.getElementById('success-message').style.display = 'none';
                })
                .finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                    
                    // Hide messages after 5 seconds
                    setTimeout(function() {
                        document.getElementById('success-message').style.display = 'none';
                        document.getElementById('error-message').style.display = 'none';
                    }, 5000);
                });
        });
