import React from 'react';
import { Outlet,Link } from 'react-router-dom';
const Layout=()=>{

    return (

        <>
         <Link to="/">Home </Link> | <Link to="/about">About us </Link> | <Link to="/contact">Contact </Link>| <Link to="/all">Users </Link>
            
            <div>
                Testing in outlet
                <Outlet/>

            </div>
        </>
    )
}
export default Layout;