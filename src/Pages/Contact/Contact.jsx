import React from 'react';
import { useSelector } from 'react-redux';
// import useAuth from '../../Hooks/useAuth';


const Contact = () => {
    // const userinfo = useAuth();
    // console.log(userinfo);
    const text = useSelector((state) => state.textSlice.text);
    // const Counter = useSelector((state) => state.textSlice.text);
    // const count = useSelector(state => state.counter.value)


    console.log(text);
    return (
        <div>
            <h1>Welcome to contacts</h1>
        </div>
    );
};

export default Contact;