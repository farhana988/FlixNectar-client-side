/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    const location = useLocation()

    if(loading){ 
        return <h1><span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span></h1>
    }
    if(user){
        return children
        
    }
    return  <Navigate state={{from:location.pathname}} to="/login"></Navigate>
};

export default PrivateRoute;