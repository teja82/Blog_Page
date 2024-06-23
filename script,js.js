document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
        return;
    }

    // Example of form submission handling
    // You can replace this with an actual form submission or AJAX request
    alert(`Thank you for contacting us, ${name}! We will get back to you shortly.`);
    
    // Reset form
    document.getElementById('contactForm').reset();
});
