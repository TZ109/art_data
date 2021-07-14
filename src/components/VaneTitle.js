/* eslint-disable */
import React,{useState} from 'react';
import Sidebar from './Sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import '../App.css';
import {Link} from 'react-router-dom';
function VaneTitle(){
    return(
      <>
      <div className="art_data_title">
        <div className="logo">
            <Link to="/">
              <img src="/img/logo.png" alt="로고" />
            </Link>       
        </div>
        <ul className="menu_bar">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/exhibition">Exhibition</Link></li>
          <li><Link to="/home3">Artist</Link></li>
          <li><Link to="/home4">Artwork</Link></li>
        </ul>
        <div className="search_bar">
          <input type="text" placeholder="검색"/>
          <img src="/img/search_btn.png" alt="검색버튼"/>
        </div>
        <div className="user_icon">
        <Link to="loginPage"><div className="icon_sample"></div></Link>
        </div>
      </div>
      </>
    )
  }

function Show_window_first(props){
    return(
       <div className="show_window">
         <div><img src="/img/picture.png" alt="그림" /></div>
         <div>
           <p className="artist_name">Joan Miro : Joan</p>
           <p className="day">Mar 2 - Jul 21, 2021</p>
           <p className="musium_name">MoMA Museum</p>
         </div>
       </div>
    )
  }
  function Main_show_window(props){
    return(
      <div className="main_show_window">
        <div><img src="/img/picture.png" alt="그림" /></div>
        <div>Joan Miro : Joan</div>
        <div>MoMA Museum</div>
      </div>
  
    )
  }
export default VaneTitle;