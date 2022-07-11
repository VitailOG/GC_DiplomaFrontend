import { AxiosResponse } from "axios";

import $axios from "../index";
import BaseAPI from "./base";
import { ILoginResponse } from '../../models/auth'


interface ILoginRequest {
    username: string,
    password: string
}

class AuthAPI extends BaseAPI {

    async createToken(url: string, values: ILoginRequest): Promise<AxiosResponse<ILoginResponse>>{
        return await $axios.post(`${this.baseUrl}/${url}/`, values)
    }
}

const authApi = new AuthAPI('auth')

export default authApi;
