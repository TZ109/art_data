import './exhibition.css'
import react, {useState, useEffect} from 'react';
import SimpleSlider from '../slider/Home2Slider';
import Chart04 from '../chartcomponent/chart04';
import Chart05 from '../chartcomponent/chart05';
import Zoomimage from '../showWindow/Zoomimage';

import axios from 'axios';
function Exhibition3(){
    const [sliderdata,setsliderdata] = useState([
        {
                artist:'',
                type:'',
                size:'',
                musium:'',
                imgUrl:''
        }
    ])
    const [exhibition,setexhibition] = useState([
        {
            artist:'',
            arttype:'',
            artsize:'',
            musium:'',
            people_number: 0 ,
            total_people_number: 0,
            time : '',
            totaltime: ''
        }
    ])

    const [chart04data,setchart04data] = useState(
        [
            {
                name: '',
                value: 0 
            }
        ]
    )

    const [chart05data,setchart05data] = useState(
        [
            {
                name: '',
                'Day': 0,
            }
        ]
    )

    useEffect(()=>{
        
        axios.get("http://localhost:4000/api/home3/slider").
          then((res)=>{
         // console.log(res.data)
         setsliderdata(res.data)

          })
          .catch(()=>{
          alert('error');
          });


        axios.get("http://localhost:4000/api/exhibition3/exhibition").
          then((res)=>{
         // console.log(res.data)
         setexhibition(res.data)
          })
          .catch(()=>{
          alert('error');
          });

          
        axios.get("http://localhost:4000/api/exhibition2/chart04").
          then((res)=>{
         // console.log(res.data)
         setchart04data(res.data)
          })
          .catch(()=>{
          alert('error');
          });


          axios.get("http://localhost:4000/api/exhibition3/chart05").
          then((res)=>{
         // console.log(res.data)
         setchart05data(res.data)
          })
          .catch(()=>{
          alert('error');
          });
    },[])

    


        
    return(

        <div className="exhibition3_page">
            <div className="exhibition3_simpleSlider">
                <SimpleSlider dataset={sliderdata}></SimpleSlider>
            </div>
            <div className="exhibition3_artwork">
                <p className="exhibition3_artwork_title">Art work</p>
                <div className="exhibition3_artwork_box">
                    <div className="exhibition3_artwork_box_img"><Zoomimage image={exhibition[0].imgUrl} size='586'></Zoomimage></div>
                    <p className="artwork_box_artist">{exhibition[0].artist}</p>
                    <p className="artwork_box_arttype">{exhibition[0].arttype}</p>
                    <p className="artwork_box_artsize">{exhibition[0].artsize}</p>
                    <p className="artwork_box_musium">{exhibition[0].musium}</p>
                    <div className="exhibition3_people"> 
                        <p className="exhibition3_people_title">금일 전시 관람객</p>
                        <p className="exhibition3_people_number">{exhibition[0].people_number}</p>
                    </div>
                    <div className="exhibition3_total_people">
                        <p className="exhibition3_total_people_title">총 전시 관람객</p>
                        <p className="exhibition3_total_people_number">{exhibition[0].total_people_number}</p>
                    </div>
                    <p className="exhibition3_time_line">{exhibition[0].time}</p>
                </div>
            </div>
            <div className="art_cumulative_time">
                <p className="art_cumulative_time_title">작품 관람 누적 체류 시간</p>
                <div className="cum_time_graph_div">
                <div className="title_flex">
                <div className="title_flex_left">
                    <p>총 누적 체류 시간</p>
                    <p className="time">{exhibition[0].totaltime}</p>
                </div>
                <div className="title_flex_right">
                    <p>Day</p>
                    <p>Week</p>
                    <p>Month</p>
                    <p>Year</p>
                </div>
                </div>
                <div className="art_cumulative_time_graph">
                    <Chart05 data={chart05data}/>
                </div>
                </div>
            </div>
            <div className="exhibition3_old">
            <p className="exhibition3_old_graph_title">전시 연령별 선호도</p> 
            <div className="exhibition3_old_div">
                <div className="exhibition3_old_graph">
                    <Chart04 data={chart04data}/>
                </div>
            </div>
            </div>






        </div>
    )

}

export default Exhibition3;
