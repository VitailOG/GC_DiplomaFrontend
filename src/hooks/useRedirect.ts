import {useNavigate} from "react-router-dom";

type PermissionType = 'student' | 'methodist'
type ReturnRedirectType = (permissions: PermissionType) => void


export const useRedirect = (): ReturnRedirectType => {
    const navigate = useNavigate()

    const redirect = (permissions: PermissionType): void => {

        switch (permissions) {
            case 'methodist':
                navigate('/subject')
                break

            case 'student':
                navigate('/student')
                break
        }
    }

    return redirect

}
