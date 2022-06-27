import axios from "axios";

import baseURL from '../http/api/urls'

const $axios = axios.create({
    baseURL,
    withCredentials: true
})

export default $axios;
