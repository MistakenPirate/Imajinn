import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()


export const UserContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({})
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(null)

    useEffect(() => {
        const fetchUserProfile = async () => {
            setLoading(true);
            setError(null);

            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
                }

                const response = await fetch('http://localhost:3000/profile', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUserInfo(userData);
                } else {
                    throw new Error('Failed to fetch user profile');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [userInfo]);



    return (
        <UserContext.Provider
        value={{ userInfo, setUserInfo, error }}>
            {children}
        </UserContext.Provider>
    )
}

