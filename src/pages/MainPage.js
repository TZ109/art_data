/* eslint-disable */

import React, { PureComponent } from 'react';
import {BrowserRouter, Router, Switch, Route, Link} from 'react-router-dom'
import '../App.css';

/* vaneTitle and  SideBar Part*/
import VaneTitle from '../components/VaneTitle';
import Sidebar from '../components/Sidebar/Sidebar';

/* Home import Part */
import Home from '../components/home/Home01';
import Home2 from '../components/home/Home02';
import Home3 from '../components/home/Home03';
import Home4 from '../components/home/Home04';

/* LoginPage Part */
import MyPage from '../components/myPage/MyPage';
import LoginPage from './LoginPage';
import SignupPage from './signupPage';

/* Exhibition Part */
import Exhibition from '../components/exhibition/exhibition1';
import Exhibition2 from '../components/exhibition/exhibition2';
import Exhibition3 from '../components/exhibition/exhibition3';

/* Artist Part */
import Artist from '../components/box/Artist';
import Artist01 from '../components/box/Artist01';

/*Artwork Part*/
import Artwork from '../components/box/Artwork';


import Transfer from '../components/myPage/Transfer';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function MainPage(){

    return (
        <BrowserRouter> 
        
        <div>
            <VaneTitle />
            <Sidebar />
        </div>
        
        <div>
            <Switch>
                <Route path="/home2" exact ><Home2></Home2></Route>
                <Route path="/home3" exact><Home3></Home3></Route>
                <Route path="/home4" exact><Home4></Home4></Route>
    
                <Route path="/exhibition" exact><Exhibition></Exhibition></Route>
                <Route path="/exhibition2" exact><Exhibition2></Exhibition2></Route>
                <Route path="/exhibition3" exact><Exhibition3></Exhibition3></Route>
    
                <Route path="/artwork" exact><Artwork></Artwork></Route>
    
                <Route path="/artist" exact><Artist></Artist></Route>
                <Route path="/artist01" exact><Artist01></Artist01></Route>
    
                <PublicRoute exact path="/loginPage" restricted={true} component={LoginPage}></PublicRoute>
                <PublicRoute path="/signupPage" restricted={true} component={SignupPage}></PublicRoute>
                <PrivateRoute path="/myPage" component={MyPage}></PrivateRoute>
                <PrivateRoute path="/transfer" component={Transfer}></PrivateRoute>
                <Route path="/"  exact><Home></Home></Route>
            </Switch>            
        </div> 
        
        </BrowserRouter>
    )

}

export default MainPage;