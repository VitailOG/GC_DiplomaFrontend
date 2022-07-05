import { createSlice } from '@reduxjs/toolkit';

interface IAuth {
    isAuth: boolean,
    username: string
}


const initialState: IAuth = {
    isAuth: false,
    username: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {}
});


export default authSlice.reducer;
