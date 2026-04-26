function updateClock() {
    const now = new Date();
    
    // Time Elements
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = now.getSeconds();
    
    // Update Display
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    
    // Date Display
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-GB', options);
    
    // Seconds Sweep Animation
    const ring = document.getElementById('seconds-ring');
    const degrees = (seconds / 60) * 360;
    ring.style.setProperty('--rotate', `${degrees}deg`);
    
    // Applying the rotation directly to the ring container or handle
    // For a smoother move, we use CSS variables or direct transform
    const ringElement = document.querySelector('.seconds-ring');
    ringElement.style.transform = `rotate(${degrees}deg)`;
}

// Initial Call
updateClock();

// Set interval for every second
setInterval(updateClock, 1000);

// Add interactive subtle parallax
document.addEventListener('mousemove', (e) => {
    const aura = document.getElementById('aura');
    const x = (e.clientX / window.innerWidth - 0.5) * 50;
    const y = (e.clientY / window.innerHeight - 0.5) * 50;
    
    aura.style.transform = `translate(${x}px, ${y}px)`;
});
