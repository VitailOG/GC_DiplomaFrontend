import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginResponse} from "../../models/auth";
import authApi from "../../http/api/auth";

interface LoginData{
    username: string,
    password: string,
}

export const fetchLogin = createAsyncThunk<ILoginResponse, LoginData, {rejectValue: string}>(
    'auth/fetchLogin',
    async (values: LoginData, {rejectWithValue}) => {
        const response = await authApi.createToken('token/create', values)
        return response.data
    }
)
