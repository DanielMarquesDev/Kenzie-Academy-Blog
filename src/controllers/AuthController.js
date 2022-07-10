import config from '../config/config.js';

export default class AuthController {
    static data = []

    static async login(formData){
        const loginEndpoint = `${config.apiUrl}/users/login`;
        let body = {};

        for(const [key, value] of formData) {
            body[key] = value;
        }
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    userId:1,
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlIiwiaWF0IjoxNjU3MDMwMjU3LCJleHAiOjE2NTcwNDEwNTd9.9bDVMdmHjxcYgCynSMaDrQxApfSBey0M3ffYs_m42MY"
                });
            }, 2000);
            // reject({ message: 'Error when logging in' });
        })

        // return fetch(loginEndpoint, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(body)
        // })
        // .then(response => response.json());
    }

    static async getUser(userId, userToken){
        const usersEndpoint = `${config.apiUrl}/users/${userId}`;
           
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    email: 'teste@kenzie.com.br',
                    username: 'Daniel Marques',
                    avatarUrl: 'https://github.com/phmc99.png',
                    createdAt: '2022-07-01T00:00:00.000Z'
                });
            }, 2000);
            // reject({ message: 'Error when getting user data' });
        });

        // return fetch(usersEndpoint, {
        //     method: 'GET',
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `Bearer ${userToken}`
        //     }
        // })
        // .then(response => response.json());
    }
}