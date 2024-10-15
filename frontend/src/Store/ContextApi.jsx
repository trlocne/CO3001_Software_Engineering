import React, {createContext, useState, useContext, useEffect, Children} from 'react';
import toast from 'react-hot-toast';
import api from '../Services/api';

const ContextApi = createContext();

export const ContextProvider = ({children}) => {
    // Tìm token in the localstronge
    const getToken = localStrorange.getItem("JWT_TOKEN") ? JSON.stringify(localStrorange.getItem("JWT_TOKEN")) : null;

    // Find is the user status from localStorage
    const getIsAdmin = localStrorange.getItem("isAdmin") ? JSON.stringify(localStrorange.getItem("isAdmin")) : false;

    const [token, setToken] = useState(getToken);

    const [currentUser, setCurrentUser] = useState(null);

    const [isAdmin, setIsAdmin] = useState(getIsAdmin);

    const fetchUser = async () => {
        const user = JSON.parse(localStrorange.getItem("USER"));
        console.log("USER:", user);
        if (user?.username){
            try {
                const {data} = await api.get(`/auth/user`);

                const roles = data.roles;

                if (roles.includes("ROLE_ADMIN")){
                    localStorage.setItem("isAdmin", true);
                    setIsAdmin(true);
                } else {
                    localStorage.removeItem("isAdmin");
                    setIsAdmin(false);
                }
                setCurrentUser(data);
            }
            catch (error){
                console.error("Failed to fetch user", error);
                toast.error("Failed to fetch current user");
            }
        }

        useEffect(() => {
            fetchUser();
        }, [token])
    }

    return (
        <ContextApi.Provider 
            value={{
                token, 
                setToken, 
                currentUser, 
                setCurrentUser, 
                isAdmin, 
                setIsAdmin
            }}
        >
            children
        </ContextApi.Provider>
    )
    
}

export const useAuth = () => {
    return useContext(ContextApi);
}