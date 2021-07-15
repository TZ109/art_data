/* eslint-disable */

import React, { Component } from 'react';
import ShowWindow2 from '../showWindow/ShowWindow2';
import Chart01 from '../chartcomponent/chart01';
import  './Home.css';


function Home( ){
    return(
        <div>
            <div className="Weekly">Weekly exhibition</div>
            <div className="show_window_flexbox2">
                <ShowWindow2 />
                <ShowWindow2 />
                <ShowWindow2 />
            </div>   
            <Chart01/>
        </div>
    )
}
export default Home;
