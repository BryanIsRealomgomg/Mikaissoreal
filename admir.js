document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.button');
    var imageContainer = document.getElementById('imageContainer');

    // Show the button initially with a delay
    setTimeout(function () {
        button.classList.add('show');
    }, 1000);

    // Show the button after a delay
    button.addEventListener('click', showImage);

    // Make the image clickable
    imageContainer.addEventListener('click', showImage);
});

function showImage() {
    var buttonContainer = document.querySelector('.button-container');
    var button = document.querySelector('.button');
    var imageContainer = document.getElementById('imageContainer');
    var textElement = document.querySelector('.typing-text');

    buttonContainer.classList.add('active'); // Apply the 'active' class to the button container

    // Hide the button after a delay
    setTimeout(function () {
        button.style.opacity = 0;
    }, 500);

    // Display the image after the button is fully hidden
    setTimeout(function () {
        button.style.display = 'none';
        imageContainer.style.opacity = 1;
        textElement.innerHTML = "hey, it's been awhile."; // Replace the existing text

        // Trigger typing animation after image is fully visible
        textElement.classList.add('typing');
    }, 1000);
}
// Your existing JavaScript functions

// Show the scroll-triggered button after scrolling
document.addEventListener('scroll', function() {
    var scrollButtonContainer = document.getElementById('scrollButtonContainer');
    var scrollButton = document.querySelector('.scroll-button');

    var scrollPosition = window.scrollY + window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight * 0.8) {
        // Show the button when 80% of the document is scrolled
        scrollButtonContainer.classList.add('active');
    } else {
        // Hide the button when not scrolled enough
        scrollButtonContainer.classList.remove('active');
    }
});

function openNewPage() {
    // Replace 'your-new-page.html' with the actual path to the new HTML page
    window.location.href = 'https://bryanisrealomgomg.github.io/Mikasaurus/index.html' ;
}
