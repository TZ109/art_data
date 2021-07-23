
import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import isLogin from './isLogin';

function PrivateRoute({component : Component, ...rest})
{
 
    //console.log(document.cookie);

    return (
        
        <Route {...rest} render={props =>
           isLogin() ? (
              <Component {...props} />
            ) : (
              <Redirect to="/loginPage" />
            )
          }
        />
      );
    }

    export default PrivateRoute;