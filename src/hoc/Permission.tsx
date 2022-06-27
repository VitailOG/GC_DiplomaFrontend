import React from "react";

interface PermissionProps {
    children: JSX.Element,
    perm: string
}

const Permission = ({perm, children}: PermissionProps) => {

    return (
        <>
            {children}
        </>
    )
};

export default Permission;
