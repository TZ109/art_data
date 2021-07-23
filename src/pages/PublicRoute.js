import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import isLogin from './isLogin';

function PublicRoute({ component: Component, restricted, ...rest }) {
    
  //console.log(document.cookie)
    return (
      <Route
        {...rest}
        render={props =>
          isLogin() && restricted ? (
            <Redirect to="/myPage" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }
  
  export default PublicRoute;