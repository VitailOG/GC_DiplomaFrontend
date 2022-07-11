import React, {FC} from "react";

// import {useCookies} from "react-cookie";
import {useRedirect} from "../../hooks/useRedirect";
import {useAppDispatch} from "../../hooks/useRedux";
import {fetchLogin} from "../../store/actions/auth";

const Login: FC = () => {

    // const [cookie, setCookie] = useCookies(["access", "refresh"])

    const redirect = useRedirect()

    const dispatch = useAppDispatch()

    const x = (): void => {
        dispatch(fetchLogin({username: 'admin', password: '2'}))
        redirect('student')
    }

    return <>
        <button onClick={x}>qwe</button>
    </>
};

export default Login;
