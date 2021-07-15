/* eslint-disable */

import React, { Component } from 'react';
import SimpleSlider from '../../pages/Home2Slider';
import Chart02 from '../chartcomponent/chart02';
import DateBox from '../box/DateBox';
import './Home.css'

function Home3( ){
    return(
        <div>
            <div className="home_3_Current">
                <p>Current</p>
                <div className="home_3_Slider">
                    <SimpleSlider></SimpleSlider>
                </div>
            </div>
            <Chart02></Chart02>
            <DateBox></DateBox>
        </div>
    )
}

export default Home3;