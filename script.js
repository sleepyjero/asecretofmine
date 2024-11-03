let messageRevealed = false; // Flag to check if the message has been revealed

function revealMessage() {
    // Always create hearts when the envelope is clicked
    createHearts(); // Call hearts animation regardless of the message state

    if (!messageRevealed) { // Only reveal the message the first time
        document.getElementById("messageContainer").style.display = "block";
        document.getElementById("heart").style.display = "inline";
        document.getElementById("favoriteMessage").style.display = "block"; // Show favorite message
        messageRevealed = true; // Set the flag to true after revealing
    }
}

function createHearts() {
    const messageContainer = document.getElementById("messageContainer");

    // Generate multiple hearts
    for (let i = 0; i < 6; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "🤍";
        heart.className = "heart-animation";
        heart.style.left = Math.random() * 80 + 10 + "%"; // Random position
        heart.style.animationDelay = `${Math.random() * 1.5}s`; // Random delay
        messageContainer.appendChild(heart);

        // Remove the heart after animation
        setTimeout(() => {
            heart.remove();
        }, 2000); // Matches animation duration
    }
}

function showClosingMessage() {
    document.getElementById("closingMessage").style.display = "block";
    document.getElementById("heart").style.display = "none";
    document.getElementById("title").style.marginTop = "-50px";
}

function accept() {
    document.getElementById("noButton").style.display = "none";
    alert("YIIIPEEEEEEEEEEEEEEE");
}

function decline() {
    const noButton = document.getElementById("noButton");
    const offsetX = (Math.random() * 140 - 30); // Teleport within a range to avoid overlapping
    const offsetY = (Math.random() * 60 - 30);  // Keep it around the closing note
    noButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}
