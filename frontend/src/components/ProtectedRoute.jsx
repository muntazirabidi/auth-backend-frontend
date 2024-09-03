import {Navigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import api from '../api';
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../constants';
import { useState, useEffect } from 'react';

function ProtectedRoute({element}) {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false));
    }, []);

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        if (refresh) {
            try {
                const res = await api.post('/auth/token/refresh/', {
                    refresh: refreshToken,
                });
                if (res.status !== 200) {
                    localStorage.removeItem(ACCESS_TOKEN, res.data.access);
                    setIsAuthorized(true);
                } else {
                    setIsAuthorized(false);
                }
                const {access} = response.data;
                localStorage.setItem(ACCESS_TOKEN, access);
                return true;
            } catch (error) {
                console.error(error);
                setIsAuthorized(false);
            }
        }
        return false;
    };

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return
        }
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const Now = Date.now() / 1000;

        if (tokenExpiration < Now) {
            const result = await refreshToken();
            setIsAuthorized(result);
        }
    
    }

    if (isAuthorized === null) {
        return <div>Loading..</div>;
    }
    return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;