import AuthController from "../controllers/AuthController.js";
import PostController from "../controllers/PostController.js";
import { getItem } from "../utils/storage.js"

const userAvatar  = document.querySelector('.profile__figure--img');
const userName    = document.querySelector('.profile__userName');
const postInput   = document.querySelector('.share__text');
const shareButton = document.querySelector('.share__button');
const postForm    = document.querySelector('.post__form');
const formCounter = document.querySelector('.form__counter');

const handleCountTextLetters = (event) => {
    const counter = event.target.value.length;
    formCounter.innerText = `${counter} / 250`;
}

const getMostRecentPosts = async (userToken, page) => {
    // Call api to get posts (PostsController)
}

(async () => {
    // Gets userId and token fron localStorage
    const useId = getItem('@UserId');
    const userToken = getItem('@UserToken');
    
    // Gets user data from api
    const { avatarUrl, username } = await AuthController.getUser(useId, userToken);

    // Set user's name and avatar
    userAvatar.src = avatarUrl;
    userName.innerText = username;

    // Gets post's page
    const urlParams = new URLSearchParams(location.search);
    const page = urlParams.get('page');

    // Gets most recent posts
    let posts = await getMostRecentPosts(userToken, page);
    
    // Uptades page with most recent posts

    postInput.addEventListener('keyup', handleCountTextLetters);

    postForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Get post data
        const formData = new FormData(postForm);

        // Shows loading and disable submit button
        shareButton.innerHTML = '...';
        shareButton.setAttribute('disabled', '');

        // Save post into api
        await PostController.create(formData);

        // Hides loading and enable submit button
        shareButton.innerHTML = '+';
        shareButton.removeAttribute('disabled');

        // Calls api to get most recent posts
        posts = await getMostRecentPosts(userToken, page);

        // Uptades page with most recent posts
    });
})();