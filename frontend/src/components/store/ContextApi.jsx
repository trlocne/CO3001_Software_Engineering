import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
        fetch('http://localhost:5000/user', {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
            if (data.error) {
                toast.error(data.error);
                localStorage.removeItem('token');
            } else {
                setUser(data);
            }
            setLoading(false);
            });
        } else {
        setLoading(false);
        }
    }, []);
    
    return (
        <ContextApi.Provider value={{ user, setUser, loading }}>
        {children}
        </ContextApi.Provider>
    );
}

export const useMyContext = () => {
    return useContext(ContextApi);
}