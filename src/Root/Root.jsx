import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Components/Nav&Foot/Nav';
import Foot from '../Components/Nav&Foot/Foot';

const Root = () => {
    return (
        <div className=''>
            <Nav></Nav>
           <main className='max-w-7xl mx-auto p-4 h-screen'>
             <Outlet></Outlet>
           </main>
            <Foot></Foot>
        </div>
    );
};

export default Root;