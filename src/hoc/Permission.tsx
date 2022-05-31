import React from "react";


interface PermissionProps {
    children: JSX.Element,
    perm: string
}

const Permission = ({children, perm}: PermissionProps) => {
    console.log(perm)
    return (
        <div>
            {children}
        </div>
    )
};

export default Permission;

