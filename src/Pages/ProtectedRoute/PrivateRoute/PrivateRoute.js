import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from "../../../Hooks/useAuth";
import Spinner from "react-bootstrap/Spinner";


  
const PrivateRoute = ({children, ...rest}) => {
   const {user , isLoading}= useAuth()

   if(isLoading) {
       return<div style={{minWidth:"100vh"}} className="d-flex justify-content-center align-items-center" > <Spinner animation="grow" variant="warning" /></div>;
   }

    return (
        <div>
         
           <Route
            {...rest}
            
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
        
        </div>
    );
};

export default PrivateRoute;