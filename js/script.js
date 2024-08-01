// Initialize EmailJS with your user ID
    emailjs.init('GbJU1m2-PhRXPrLM1'); // Replace with your EmailJS user ID

    document.getElementById('contactForm').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent form submission
    
        // Collect form data
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
    
        // Convert to text file
        const fileContent = `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`;
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const file = new FormData();
        file.append('file', blob, 'contact_message.txt');

          // Send email using EmailJS
    emailjs.sendForm('service_1rh492r', 'template_qzq1boe', document.getElementById('contactForm'))
    .then(function(response) {
        console.log('Success:', response);
    }, function(error) {
        console.error('Error:', error);
    });
});

