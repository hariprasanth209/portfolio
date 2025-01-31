document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("service_ttwqonn", "template_onajclk", params)
            .then(function(response) {
                alert("Email sent successfully!");
            }, function(error) {
                alert("Failed to send email. Please try again later.");
                console.error("EmailJS error:", error);
            });
    });
});
