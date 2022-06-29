import React, { FC, useState } from "react";
import {useNavigate} from "react-router-dom";

import ins from "../../http/api/auth";
import ins2 from "../../http/api/students";
import {useCookies} from "react-cookie";


const Login: FC = () => {
    const navigete = useNavigate()

    const [cookie, setCookie] = useCookies(["access", "refresh"])

    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const x = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prevState => ({...data, username: e.target.value}))
    }

    const x1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prevState => ({...data, password: e.target.value}))
    }

    const x2 = async () => {
         try {
             const res = await ins.createToken('token/create', data)
             localStorage.setItem('access', res.data.access)
             navigete('/subject')
             // setCookie("access", res.data.access, {domain: "127.0.0.1:8000"})
             // setCookie("refresh", res.data.refresh)
         }catch (e) {
            console.log('error')
         }
    }

    return <>
        <input type="text" onChange={x}/> <br/>
        <input type="password" onChange={x1}/>
        <br/>
        <button onClick={x2}>few</button>
        </>
};

export default Login;