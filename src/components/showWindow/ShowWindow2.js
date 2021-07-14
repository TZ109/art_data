/* eslint-disable */
import React,{useState} from 'react';
import '../../App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function ShowWindow2(){
    return(
    <div className="show_window2">
        <div><img className="show_window2_picture" src="/img/picture.png" alt="그림" /></div>
        <div className="total_name2">
            <p className="name2">Joan miro :</p>
            <p className="name2">Fondation maeght</p>
            <p className="musium_name2">Guggenhiem Museum</p>
        </div>
        <img className="plus_btn2" src="/img/plus_btn.png" alt="+" />
    </div> 
    )
}

export default ShowWindow2;