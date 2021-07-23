/* eslint-disable */

import React, { Component, useState, useEffect } from 'react';
import SimpleSlider from '../slider/Home2Slider';
import Chart02 from '../chartcomponent/chart02';
import DateBox from '../box/DateBox';
import './Home.css'

import  axios from 'axios';

function Home3(){
    const [sliderdata, setsliderdata] = useState(
        [
            {
                artist:'',
                type:'',
                size:'',
                musium:'',
                imgUrl:''
            }
        ] 
    );
    const[ graph, setgraph] = useState(
        [
            {
                name : ``,
                '전시 관람 체류 시간' : 0,
                '전시 관람객': 0
            }
        ]
    );
    const [date, setdate] = useState(
        [
            {
                data : ''
            }
        ]
    );

    useEffect(()=>{
        axios.get("http://localhost:4000/api/home3/slider").
          then((res)=>{
          
         setsliderdata(res.data)

          })
          .catch(()=>{
          alert('error');
          });


          axios.get("http://localhost:4000/api/home3/graph").
          then((res)=>{
         // console.log(res.data)
         setgraph(res.data)
          })
          .catch(()=>{
          alert('error');
          });


          axios.get("http://localhost:4000/api/home3/date").
          then((res)=>{
         // console.log(res.data)
         setdate(res.data)
          })
          .catch(()=>{
          alert('error');
          });

      },[])
      //console.log('data');
     // console.log(sliderdata);
    return(
        <div>
            <div className="home_3_Current">
                <p>Current</p>
                <div className="home_3_Slider">
                    <SimpleSlider dataset={sliderdata}></SimpleSlider>
                </div>
        </div>
            <Chart02 data={graph}></Chart02> 
            <DateBox data={date}></DateBox>
        </div>
    )
}

export default Home3;