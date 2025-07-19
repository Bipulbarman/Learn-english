document.addEventListener('DOMContentLoaded', () => {
    const contentFrame = document.getElementById('contentFrame');
    const navButtons = document.querySelectorAll('.nav-button');
    const bottomNav = document.querySelector('.bottom-nav');
    const navToggleButton = document.getElementById('nav-toggle-button');

    // Function to load content into the iframe
    function loadPage(pageName) {
        contentFrame.src = `pages/${pageName}.html`;
        [span_0](start_span)// Update active state of navigation buttons[span_0](end_span)
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

    // Add event listener to the toggle button
    navToggleButton.addEventListener('click', () => {
        bottomNav.classList.toggle('visible');
    });

    [span_1](start_span)// It defaults to 'home.html' as set in index.html src[span_1](end_span)
});
