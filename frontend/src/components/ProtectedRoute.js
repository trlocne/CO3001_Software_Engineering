import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Store/ContextApi";

const ProtectedRoute = ({children, adminPage}) => {
    const {token, isAdmin} = useAuth();
    if (!token){
        return <Navigate to="/Signup" />;
    }

    if (adminPage && !isAdmin){
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute;