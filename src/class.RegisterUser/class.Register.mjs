import {submitedRegister, form, value} from './htmlTags.mjs'

export default class Register {
    static  base_url = "https://blog-m2.herokuapp.com/users/register"
    static  data     = []

    static async registerUser(registerData){
        return await fetch(this.base_url, {
            method : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerData)
        })
        .then(res => res.json())
        .then(res => {
            return res
            // localStorage.setItem('@Kenzie-Blog: user', JSON.stringify(res.response))
            // localStorage.setItem('@Kenzie-Token: user', JSON.stringify(res.token))
        })
        .catch(err => console.log(err))
    }

    
    static distribuingData(){
        value.forEach((userData) => {
        this.data.push(userData.value)
        })
    const newUser = {
            username  : this.data[0],
            email     : this.data[1],
            avatarUrl : this.data[2],
            password  : this.data[3]
        }
        console.log(newUser)
        this.apiAplication(newUser)
    }

    static async apiAplication(newUser){
        const response = await Register.registerUser(newUser)

        console.log(response)
        if(this.validateAplication(response)){
            document.location.href = '/m2-entrega-blog-m2-devmarques7/loginPage.html'
        } else {
            alert(response.message)
        }
    }

    static validateAplication(response){
        if(response.username){
            return true
        } else {
            return false 
        }
    }

}
