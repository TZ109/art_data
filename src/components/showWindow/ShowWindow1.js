/* eslint-disable */
import React,{useState} from 'react';
import './ShowWindow.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Zoomimage from './Zoomimage';
function ShowWindow1(props){
    return(
       <div className="show_window1">
         <div>
           <Zoomimage image={props.data.imgUrl} size='250'></Zoomimage>
          </div>
         <div>
           <p className="artist_name1">{props.data.artist}</p>
           <p className="day1">{props.data.day}</p>
           <p className="musium_name1">{props.data.musium}</p>
         </div>
       </div>
    )
}

export default ShowWindow1;