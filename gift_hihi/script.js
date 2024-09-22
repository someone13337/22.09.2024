window.onload = function() {
    const heartsContainer = document.getElementById('hearts');

    // Create many hearts
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's'; // Random duration between 2s and 4s
        heartsContainer.appendChild(heart);

        // Fade in effect
        setTimeout(() => {
            heart.style.opacity = 1;
        }, i * 100); // Stagger the appearance of hearts
    }

    setTimeout(() => {
        heartsContainer.style.display = 'none';
        document.getElementById('present').style.display = 'block';
    }, 2000); // Show present after 2 seconds

    // Clickable Present
    const present = document.getElementById('present');
    present.addEventListener('click', () => {
        present.style.display = 'none';
        const letterContainer = document.getElementById('letter');
        letterContainer.classList.add('letter-show');
        setTimeout(() => {
            letterContainer.style.display = 'block';
        }, 10);
    });

    // Clickable Envelope to reveal message
    const envelope = document.querySelector('.letter img');
    envelope.addEventListener('click', () => {
        envelope.style.display = 'none';
        const message = document.getElementById('message');
        message.style.display = 'block';
    });
};
