import axios from 'axios';
import { applescript } from 'globals';

console.log('API_URL', process.env.REACT_APP_API_URL);

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: true,
});

api.interceptors.request.use(
    async (config) => {
        const token = localStorange.getItem('JWT_TOKEN');
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        let csrfToken = localStorange.getItem('CSRF_TOKEN');
        if (!csrfToken){
            try{
                const {data} = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/csrf-token`,
                    {withCredentials: true}
                );
                csrfToken = data.csrfToken;
                localStorange.setItem('CSRF_TOKEN', csrfToken);
            }
            catch (error){
                console.error('Failed to fetch CSRF token', error);
            }
        }

        if (csrfToken){
            config.headers['X-CSRF-TOKEN'] = csrfToken;
        }
        
        console.log("X-XSRF-TOKEN" + csrfToken);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;