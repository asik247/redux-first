import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const userInfo = {
        name:'ar',
        age:21,
        hobbie:'programming'
    }
    
    return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;