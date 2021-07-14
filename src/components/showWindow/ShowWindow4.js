import React from 'react';
import '../../App.css';


function ShowWindow4(props){
    return(
       <div className="show_window4">
         <div><img className="show_window4_img" src="/img/picture.png" alt="그림" /></div>
         <div className="show_window4_text">
           <p className="artist_name4">Joan Miro : Joan</p>
           <p className="art_name4">Fondation maeght</p>
           <p className="musium_name4">MoMA Museum</p>
         </div>
         <img className="plus_btn4" src="/img/plus_btn.png" alt="" />
       </div>
    )
}

export default ShowWindow4;