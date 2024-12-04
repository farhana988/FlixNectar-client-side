/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    const location = useLocation()

    if(loading){ 
        return <h1>LOADING......</h1>
    }
    if(user){
        return children
        
    }
    return  <Navigate state={{from:location.pathname}} to="/login"></Navigate>
};

export default PrivateRoute;