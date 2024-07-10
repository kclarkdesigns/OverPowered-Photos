document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your user ID
    emailjs.init("clKrs7PTxm1l58qEC");

    document.getElementById('interestForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            interests: document.getElementById('interests').value
        };

        emailjs.send('OverPowered-Photos', 'template_scofzdk', formData)
            .then(function(response) {
                console.log('Email sent:', response);
                alert('Thank you! Your message has been sent.');
            }, function(error) {
                console.error('Email failed to send:', error);
                alert('Sorry, there was an error sending your message.');
            });
    });
});