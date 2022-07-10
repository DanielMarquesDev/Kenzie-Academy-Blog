import AuthController from "../controllers/AuthController.js";
import config from "../config/config.js"

const { appUrl, pages } = config;

const loginForm = document.getElementById('login-form');
const loginButton = document.querySelector('.submit__login');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        // Get form data
    const formData = new FormData(loginForm);

    // Shows loader and disable submit button
    loginButton.innerHTML = 'Loading...';
    loginButton.setAttribute('disabled', '');

    // Call login method
    const { userId, token } = await AuthController.login(formData);

    if (!userId || !token) {
        // show error message
    }

    // Redirects to home page
    window.location.href = `${appUrl}/${pages.home}`;

    } catch (error) {
        // Hides loader and enable submit button
        loginButton.innerHTML = 'Loading...';
        loginButton.setAttribute('disabled');

        // TODO: shows  server error
    }
})