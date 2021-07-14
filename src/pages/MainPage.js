/* eslint-disable */
import React, { PureComponent } from 'react';
import {BrowserRouter, Router, Switch, Route, Link} from 'react-router-dom'
import '../App.css';
import VaneTitle from '../components/VaneTitle';
import Sidebar from '../components/Sidebar/Sidebar';
import ShowWindow1 from '../components/showWindow/ShowWindow1';
import ShowWindow3 from '../components/showWindow/ShowWindow3';
import ShowWindow2 from '../components/showWindow/ShowWindow2';
import Chart01 from '../components/chartcomponent/chart01';
import ShowWindow4 from '../components/showWindow/ShowWindow4';
import SimpleSlider from './Home2Slider';
import Chart02 from '../components/chartcomponent/chart02';
import DateBox from '../components/box/DateBox';
import LoginPage from './LoginPage';
import Exhibition2 from '../components/exhibition/exhibition2';
import Artist from '../components/box/Artist';
import Exhibition3 from '../components/exhibition/exhibition3';
import Artwork from '../components/box/Artwork';

const Home = () =>{
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

const Home2 = () => {
    return(
        <div className="home_2_div">
            <img src="/img/picture.png" alt="" />
            <div className="home_2_text">
                <p className="home_2_text_1">Moon:</p>
                <p className="home_2_text_1">The Soft Moon Criminal</p>
                <p className="home_2_text_2">Apr 8 - Dec 20, 2021</p>
                <p className="home_2_text_2">Mmca</p>
            </div>
            <div className="home_2_textArea">
                <p>The Composition is one of ten large paintings which Miró produced in Barcelona in 1933.</p>
                <p>They were preceded by ten collages of newspaper illustrations and advertisements.</p>
                <p>In the new paintings, the painter subsequently clarified for himself the mutual </p>
                <p>relationships of painting elements regarding their shapes, colours, and incorporation</p>
                <p>in space. The Composition which comes from this series and which is in the collection</p>
                <p> of the National Gallery in Prague accomplishes this painter’s endeavour.</p>     
            </div>
            <div className="home_2_btn">
                <p>View more</p>
            </div>    
        </div>
    )
}

const Home3 = () =>{
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

const Home4 = () =>{
    return(
        <div className="new_artwork">
            <p>New artwork</p>
            <div className="new_artwork_box">
                <div className="new_first">
                    <div className="new_art">
                        <img src="/img/picture.png" alt="사진" />
                        <p>Pablo Picasso :</p>
                        <p>Girl</p>
                        <div className="new_art_btn">
                            <p>View more</p>
                        </div>
                    </div>
                </div>
                <div className="new_second">
                    <div className="new_art">
                        <img src="/img/picture.png" alt="사진" />
                        <p>Pablo Picasso :</p>
                        <p>Girl</p>
                        <div className="new_art_btn">
                            <p>View more</p>
                        </div>
                    </div>
                </div>
                <div className="new_third">
                    <div className="new_art">
                        <img src="/img/picture.png" alt="사진" />
                        <p>Pablo Picasso :</p>
                        <p>Girl</p>
                        <div className="new_art_btn">
                            <p>View more</p>
                        </div>
                    </div>
                </div>    
            </div>
            
        </div>
    )
}

const Test = () =>
{
    return (
        <LoginPage></LoginPage>
    )
}

const Exhibition = () =>
{
    return(
        <div class="show_window_flexbox2">
            <ShowWindow1/>
            <ShowWindow1/>
            <ShowWindow1/>
            <ShowWindow1/>
            <ShowWindow1/>
            <ShowWindow1/>
            <ShowWindow1/>
            <ShowWindow1/>
            <ShowWindow1/>
        </div>
    )
}

function MainPage(){

    return (
        <BrowserRouter> 
        <div>
            <VaneTitle />
            <Sidebar />
        </div>
        <div>
            <Switch>
            <Route path="/home3" Component={Home3} ><Home3></Home3></Route>
                <Route path="/home2" Component={Home2} ><Home2></Home2></Route>
                <Route path="/home4" Component={Home4} ><Home4></Home4></Route>
                <Route path="/exhibition" exact><Exhibition></Exhibition></Route>
                <Route path="/exhibition2" exact><Exhibition2></Exhibition2></Route>
                <Route path="/exhibition3" exact><Exhibition3></Exhibition3></Route>
                <Route path="/artwork" exact><Artwork></Artwork></Route>
                <Route path="/artist" exact><Artist></Artist></Route>
                <Route path="/" Component={Home} exact><Home></Home></Route>
                <Route path="/loginPage"><LoginPage></LoginPage></Route>
                

            </Switch>
           
            
        </div> 
        </BrowserRouter>
    )

}

export default MainPage;