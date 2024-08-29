document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scroll for anchor links
    const links = document.querySelectorAll('nav a');
    const moreInfoBtn = document.getElementById('more-info-btn');
    const moreInfoDiv = document.getElementById('more-info');
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    moreInfoBtn.addEventListener('click', () => {
        if (moreInfoDiv.style.display === 'none') {
            moreInfoDiv.style.display = 'block';
            moreInfoBtn.textContent = 'Less Info';
        } else {
            moreInfoDiv.style.display = 'none';
            moreInfoBtn.textContent = 'More Info';
        }
    });
});
