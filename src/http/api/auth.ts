import $axios from "../index";

import BaseAPI from "./base";


interface ILogin {
    username: string,
    password: string
}


class AuthAPI extends BaseAPI {

    async createToken(url: string, values: ILogin){
        const res = await $axios.post(`${this.baseUrl}/${url}/`, values)
        console.log(res)
    }

}

let ins = new AuthAPI('auth')

export default ins;
