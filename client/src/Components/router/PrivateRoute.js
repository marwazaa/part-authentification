import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component:Component,...rest}) => {
    const isAuth=localStorage.getItem("token")
    if(isAuth){
       return <Route component={Component} {...rest}/>;    
    }
    return <Redirect path="/" />;
    
};

export default PrivateRoute
