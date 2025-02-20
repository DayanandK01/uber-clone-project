import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProtectedWrapper = ({ children }) => {
    const navigate = useNavigate();
    
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        const checkAuth = () => {
            const newToken = localStorage.getItem("token");
            setToken(newToken);
            if (!newToken) {
                navigate('/login');
            }
        };

        // Listen for changes in localStorage
        window.addEventListener("storage", checkAuth);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("storage", checkAuth);
        };
    }, [navigate]);

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    return <>{children}</>;
};

export default UserProtectedWrapper;
