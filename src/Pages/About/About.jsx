import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const About = () => {
   const userInfo = useContext(AuthContext);
//    console.log(userInfo);
  
    return (
        <div>
            <h1>About</h1>
        </div>
    );
};

export default About;