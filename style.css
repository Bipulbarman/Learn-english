/* Global Styles & Reset */
:root {
    --primary-color: #4285F4; /* Google Blue */
    --secondary-color: #EA4335; /* Google Red */
    --text-color: #3C4043; /* Dark Grey */
    --light-text-color: #5F6368; /* Medium Grey */
    --background-color: #F8F9FA; /* Light Grey Background */
    --surface-color: #FFFFFF; /* White for cards/containers */
    --border-color: #DADCE0; /* Light border */
    --shadow-color: rgba(0, 0, 0, 0.1);
}

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
}

/* App Container */
.app-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    height: 100vh;
    max-height: 900px;
    background-color: var(--surface-color);
    border-radius: 16px;
    box-shadow: 0 8px 30px var(--shadow-color);
    overflow: hidden;
}

/* Content Area */
.content-area {
    flex-grow: 1;
    overflow: hidden;
    position: relative;
}

.content-area iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
}

/* Bottom Navigation */
.bottom-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    background-color: var(--surface-color);
    border-top: 1px solid var(--border-color);
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.03);
    z-index: 10;
    transform: translateY(100%); /* Hidden by default */
    transition: transform 0.3s ease-in-out;
}

.bottom-nav.visible {
    transform: translateY(0); /* Shown when .visible class is added */
}

/* Navigation Toggle Button */
#nav-toggle-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 20;
    cursor: pointer;
    background-color: var(--primary-color);
    color: white;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, transform 0.3s;
}

#nav-toggle-button:hover {
    background-color: #357ae8;
    transform: scale(1.05);
}

.nav-button {
    background: none;
    border: none;
    color: var(--light-text-color);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 15px;
    border-radius: 10px;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-size: 0.85em;
    font-weight: 500;
}

.nav-button .material-icons {
    font-size: 24px;
    margin-bottom: 4px;
}

.nav-button:hover {
    background-color: #f0f0f0;
    color: var(--text-color);
}

.nav-button.active {
    color: var(--primary-color);
    background-color: #e8f0fe;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .app-container {
        border-radius: 0;
        height: 100vh;
        max-height: unset;
    }

    #nav-toggle-button {
        bottom: 15px;
        right: 15px;
    }
}
