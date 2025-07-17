document.addEventListener('DOMContentLoaded', () => {
    const contentFrame = document.getElementById('contentFrame');
    const navButtons = document.querySelectorAll('.nav-button');

    // Function to load content into the iframe
    function loadPage(pageName) {
        contentFrame.src = `pages/${pageName}.html`;

        // Update active state of navigation buttons
        navButtons.forEach(button => {
            if (button.dataset.page === pageName) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Add event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.dataset.page;
            loadPage(page);
        });
    });

    // Optional: Load a specific page on initial load if needed (e.g., from URL hash)
    // For now, it defaults to 'home.html' as set in index.html src.
});