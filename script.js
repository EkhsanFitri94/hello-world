// === SELECTING ELEMENTS ===
// Find the button element in the HTML by its ID.
const colorButton = document.querySelector('#colorButton');

// Find the main heading element.
const mainHeading = document.querySelector('h1');


// === ADDING INTERACTIVITY ===
// Tell the button to "listen" for a click.
// When a click happens, run the function inside.
colorButton.addEventListener('click', function() {
    // Check if the heading is currently blue
    if (mainHeading.style.color === 'purple') {
        // If it is, change it back to blue
        mainHeading.style.color = '#0056b3'; // Use the original blue color
    } else {
        // Otherwise, change it to purple
        mainHeading.style.color = 'purple';
    }
});

// === HANDLING THE FORM ===

// 1. Select the form and the message div
const contactForm = document.querySelector('#contactForm');
const formMessageDiv = document.querySelector('#formMessage');

// 2. Listen for the 'submit' event on the form
contactForm.addEventListener('submit', function(event) {
    
    // 3. PREVENT THE DEFAULT BEHAVIOR!
    // By default, a form submission reloads the page. We must stop this.
    event.preventDefault(); 

    console.log('Form submitted!');

    // 4. Get the values from the input fields
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // 5. Create the success message
    const successMessage = `
        <h4>Thank you, ${name}!</h4>
        <p>We've received your message:</p>
        <p><em>"${message}"</em></p>
        <p>We will reply to you at ${email} shortly.</p>
    `;

    // 6. Display the message on the page
    formMessageDiv.innerHTML = successMessage; // innerHTML lets us add HTML tags
    formMessageDiv.style.display = 'block';     // Make the message visible
    formMessageDiv.style.backgroundColor = '#e7f3fe';
    formMessageDiv.style.border = '1px solid #0056b3';
    formMessageDiv.style.color = '#333';

    // 7. (Optional) Clear the form fields after submission
    contactForm.reset();
});