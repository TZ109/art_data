import './exhibition.css'
import react from 'react';
import SimpleSlider from '../../pages/Home2Slider';
import Chart04 from '../chartcomponent/chart04';
import Chart05 from '../chartcomponent/chart05';
function Exhibition3(){
    return(

        <div className="exhibition3_page">
            <div className="exhibition3_simpleSlider">
                <SimpleSlider></SimpleSlider>
            </div>
            <div className="exhibition3_artwork">
                <p className="exhibition3_artwork_title">Art work</p>
                <div className="exhibition3_artwork_box">
                    <img src="/img/picture2.png" alt="그림"/>
                    <p className="artwork_box_artist">Joan Miro</p>
                    <p className="artwork_box_arttype">Composition(painting)</p>
                    <p className="artwork_box_artsize">1933, Oil On Canvas, 150X150</p>
                    <p className="artwork_box_musium">Sema Museum</p>
                    <div className="exhibition3_people"> 
                        <p className="exhibition3_people_title">금일 전시 관람객</p>
                        <p className="exhibition3_people_number">351</p>
                    </div>
                    <div className="exhibition3_total_people">
                        <p className="exhibition3_total_people_title">총 전시 관람객</p>
                        <p className="exhibition3_total_people_number">9,510</p>
                    </div>
                    <p className="exhibition3_time_line">2020. 02. 08 PM 14:00 기준</p>
                </div>
            </div>
            <div className="art_cumulative_time">
                <p className="art_cumulative_time_title">작품 관람 누적 체류 시간</p>
                <div className="cum_time_graph_div">
                <div className="title_flex">
                <div className="title_flex_left">
                    <p>총 누적 체류 시간</p>
                    <p className="time">283:36:41</p>
                </div>
                <div className="title_flex_right">
                    <p>Day</p>
                    <p>Week</p>
                    <p>Month</p>
                    <p>Year</p>
                </div>
                </div>
                <div className="art_cumulative_time_graph"><Chart05></Chart05></div>
                </div>
            </div>
            <div className="exhibition3_old">
            <p className="exhibition3_old_graph_title">전시 연령별 선호도</p> 
            <div className="exhibition3_old_div">
                <div className="exhibition3_old_graph"><Chart04></Chart04></div>
            </div>
            </div>






        </div>
    )

}

export default Exhibition3;
