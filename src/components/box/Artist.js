import react, {useState, useEffect} from 'react';
import './box.css'
import axios from 'axios';
import Zoomimage from '../showWindow/Zoomimage';
const Art = (props) =>{
    return(
        <div className="art_box">
            <Zoomimage image={props.imgUrl} size='260'></Zoomimage>
        </div>
    )
}

function Artist(){
    const [img,setimg] = useState(
        [
            {
                imgUrl : ''
            }
        ]
    )
    useEffect(()=>{
        axios.get("http://localhost:4000/api/artist/img").
          then((res)=>{
         // console.log(res.data)
        setimg(res.data);

          })
          .catch(()=>{
          alert('error');
          });
        
    },[])

    return(
        <div className="artist_flex_box">
            {img[0].imgUrl != '' && img.map( (part) => <Art imgUrl={part.imgUrl}/>)}
        </div>
    )

}
export default Artist;