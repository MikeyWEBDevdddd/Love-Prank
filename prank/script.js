const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

// Make the "No" button move randomly
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Show the full-screen pop-up when "Yes" is clicked
yesBtn.addEventListener('click', () => {
    popup.style.display = 'flex'; // Show the pop-up
});

// Close the pop-up when the "Close" button is clicked
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the pop-up
});
