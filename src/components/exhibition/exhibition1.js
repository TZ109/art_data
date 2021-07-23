import './exhibition.css'
import react , {useState, useEffect} from 'react';
import ShowWindow1 from '../showWindow/ShowWindow1';

import axios from 'axios';

function Exhibition(){
    const [data, setdata] = useState([
        {
            artist:'',
            day:'',
            musium:'',
            imgUrl:''
        }
    ]
    )

    useEffect(() => {
        
        axios.get("http://localhost:4000/api/exhibition1/data").
        then((res)=>{
            console.log('받아온 것');
            console.log(res.data);
       // console.log(res.data)
            setdata(res.data);
            console.log('data');
            console.log(data);
        })
        .catch(()=>{
        alert('error');
        });

    },[])   
    
    return(
        <div class="show_window_flexbox2">
            {data[0].artist != '' && data.map( part => <div><ShowWindow1 data={part}/></div>)}
        </div>
    )
}

export default Exhibition;