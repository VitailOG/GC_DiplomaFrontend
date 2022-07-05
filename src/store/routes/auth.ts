import { createAsyncThunk } from '@reduxjs/toolkit';


interface Ilogin{
    refresh: string,
    access: string,
    permission: string,
}


// export const loginRoute = createAsyncThunk<Ilogin, undefined, {rejectValue: string}>(
//     'login/loginRoute',
//     async () => {}
// )

