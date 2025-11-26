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
