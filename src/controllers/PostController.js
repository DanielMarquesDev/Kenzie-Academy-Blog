import config from "../config/config.js";

const { apiUrl } = config;
  
export default class PostController {
    static async create(postData) {
        const postsEndpoint = `${apiUrl}/posts`;
        const body = {};

        for (const [key, value] of postData) {
            body[key] = value;
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(body);
            }, 2000);
            // reject({ message: 'Error when saving post' });
        });

        // return fetch(postsEndpoint, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `Bearer ${userToken}`
        //     },
        //     body: JSON.stringify(body)
        // })
        // .then(response => response.json());
    }
}