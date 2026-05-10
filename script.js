document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    // Staggered animation for cards
    cards.forEach((card, index) => {
        // Add a slight delay based on the index to create a wave fade-in effect
        card.style.animationDelay = `${index * 0.08}s`;
        card.classList.add('animate-in');
    });

    // Interactive glow effect based on mouse position
    document.getElementById('subjects-grid').addEventListener('mousemove', e => {
        for(const card of cards) {
            const rect = card.getBoundingClientRect();
            // Calculate mouse position relative to the card
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Set CSS variables that drive the radial gradient mask in CSS
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    });
});
