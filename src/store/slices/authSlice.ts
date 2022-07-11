import { createSlice } from '@reduxjs/toolkit';

import {fetchLogin} from '../actions/auth'

interface IAuth {
    isAuth: boolean,
    username: string,
    isLoading: boolean
}


const initialState: IAuth = {
    isAuth: false,
    username: '',
    isLoading: false
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchLogin.pending, (state, action) => {
            state.isLoading = true
            console.log('1')
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.isLoading = false
            console.log('2')
        })
        builder.addCase(fetchLogin.rejected, (state, action) => {
            state.isLoading = false
            console.log('3')
        })
    }
});


export default authSlice.reducer;
