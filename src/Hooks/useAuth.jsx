import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useAuth = () => {
    const info = useContext(AuthContext);
    return info
};

export default useAuth;