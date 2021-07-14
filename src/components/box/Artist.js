import react from 'react';
import './box.css'
const Art = () =>{
    return(
        <div className="art_box">
            <img src="/img/picture2.png" alt="사진" />
        </div>
    )
}

function Artist(){
    return(
        <div className="artist_flex_box">
            <Art/>
            <Art/>
            <Art/>
            <Art/>
            <Art/>
            <Art/>
            <Art/>
            <Art/>
            <Art/>
            <Art/>
            <Art/>
            <Art/>
            <Art/>
            <Art/>
            <Art/>
            <Art/>
        </div>
    )

}
export default Artist;