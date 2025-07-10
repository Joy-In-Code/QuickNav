// --- Audio Setup ---
const hoverSound = new Audio('audio/hover.mp3');
const clickSound = new Audio('audio/click.mp3');

// Optional: Adjust volume if sounds are too loud/soft
hoverSound.volume = 0.5; // 50% volume
clickSound.volume = 0.7; // 70% volume

// --- Flag to track if user has interacted ---
let userInteracted = false;

// --- Get all buttons ---
const buttons = document.querySelectorAll('.glass-button');

// --- Add event listeners to each button ---
buttons.forEach(button => {
    // Hover sound
    button.addEventListener('mouseenter', () => {
        if (userInteracted) { // Only play if user has already interacted
            hoverSound.currentTime = 0;
            hoverSound.play();
        }
    });

    // Click sound
    button.addEventListener('click', () => {
        // Mark that user has interacted
        userInteracted = true;

        clickSound.currentTime = 0;
        clickSound.play();
    });
});

// Optional: Add a listener to the document itself for ANY click,
// just in case they click something else first (though buttons are the main interaction).
document.addEventListener('click', () => {
    userInteracted = true;
}, { once: true }); // Use { once: true } to ensure it only sets the flag on the first click