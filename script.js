document.addEventListener('DOMContentLoaded', () => {
    const contentFrame = document.getElementById('contentFrame');
    const navButtons = document.querySelectorAll('.nav-button');

    // --- New API Request Code ---
    // Function to fetch data from the new backend API
    async function fetchData() {
        try {
            const response = await fetch('https://learn-english-spoken.onrender.com/api/learn');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // You can now use this data in your application
        } catch (error) {
            // Handle error appropriately
        }
    }

    // Call the function to fetch data when the page loads
    fetchData();
    // --------------------------


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
});
