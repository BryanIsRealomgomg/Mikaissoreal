function showImage() {
    var buttonContainer = document.querySelector('.button-container');
    var imageContainer = document.getElementById('imageContainer');
    var button = document.querySelector('.button');

    buttonContainer.classList.add('active'); // Apply the 'active' class to the button container

    // Hide the button after a delay
    setTimeout(function() {
        button.style.opacity = 0;
    }, 500); // Adjust the delay (in milliseconds) as needed

    // Display the image after the button is fully hidden
    setTimeout(function() {
        button.style.display = 'none';
        imageContainer.style.opacity = 1;

        // Trigger fade-in effect for the text
        document.querySelector('.fade-in-text').classList.add('active');
    }, 1000); // Adjust the delay (in milliseconds) as needed

    // Redirect to the desired website after another delay (adjust as needed)
    setTimeout(function() {
        window.location.href = 'https://bryanisrealomgomg.github.io/Mikasaurus/'; // Replace with the desired website URL
    }, 3000); // Adjust the delay (in milliseconds) as needed
}

// Show the button initially with a delay
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var button = document.querySelector('.button');
        button.classList.add('show');
    }, 1000); // Adjust the delay (in milliseconds) as needed
});

// Show the button after a delay
document.querySelector('.button').addEventListener('click', showImage);
