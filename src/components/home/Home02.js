/* eslint-disable */
import React, { Component ,useEffect, useState} from 'react';
import './Home.css'
import Zoomimage from '../showWindow/Zoomimage';


import axios from 'axios';

function Home2() {
    const [artData, setArtData] = useState([{
        imageurl : '',
        artname : '',
        displaydate:'',
        artist:'',
        arttext:''
    }
    ]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/home2')
        .then((res) => {
           // console.log(res.data)
            setArtData(res.data)
        })
        .catch(()=>{
            console.log('error')
        })
    }, [])

    return(
        <div className="home_2_div">
            <div className="home_2_div_img"><Zoomimage image='picture.png' size='548'></Zoomimage></div>
            <div className="home_2_text">
                  {artData ? <p className="home_2_text_1">{artData.artist}</p> : null}
                {artData ? <p className="home_2_text_1">{artData.artname}</p> : null}
                {artData ? <p className="home_2_text_2">{artData.displaydate}</p> : null}
                {artData ? <p className="home_2_text_2">{artData.artist}</p> : null}
            </div>
            <div className="home_2_textArea">
            {artData ? artData.arttext : null}
           
            </div>
            <div className="home_2_btn">
                <p>View more</p>
            </div>    
        </div>
    )
}
export default Home2;