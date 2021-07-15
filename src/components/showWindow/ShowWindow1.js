/* eslint-disable */
import React,{useState} from 'react';
import './ShowWindow.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function ShowWindow1(props){
    return(
       <div className="show_window1">
         <div><img src="/img/picture.png" alt="그림" /></div>
         <div>
           <p className="artist_name1">Joan Miro : Joan</p>
           <p className="day1">Mar 2 - Jul 21, 2021</p>
           <p className="musium_name1">MoMA Museum</p>
         </div>
       </div>
    )
}

export default ShowWindow1;