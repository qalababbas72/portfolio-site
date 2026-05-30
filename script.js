// Interaction script initialized for Syed Qalab e Abbas's Clean Portfolio Hub
document.addEventListener('DOMContentLoaded', () => {
    const navigationLinks = document.querySelectorAll('.nav-links a');
    
    navigationLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Reset colors for all nav items
            navigationLinks.forEach(navLink => navLink.style.color = '');
            // Highlight the clicked item
            event.target.style.color = '#38bdf8';
        });
    });

    console.log("Portfolio interface tracking active.");
});