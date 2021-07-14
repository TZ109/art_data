import react,{ useState } from 'react';
import './box.css';
import Chart04 from '../chartcomponent/chart04';
import Slidercomponent01 from '../../pages/slider/slidercomponent01';
import SimpleSlider2 from '../../pages/Slider';

function Artist01(){
    const[like, setlike] = useState(65);
    const dislike = 100 - like; 
    let like_dislike;
    
    if(like>=50){
        console.log('right');
        like_dislike = `linear-gradient(to right,#181818 ${like}%,#D0D0D0 ${dislike}%)`;
    }
    else{
        console.log('left');
        like_dislike = `linear-gradient(to left,#D0D0D0 ${dislike}%,#181818 ${like}%)`;
    }
    console.log(like_dislike);
    return(
        <div className="artist01_Page">
            <div className="artist01_Artist_Info">
                <p className="artist01_Artist_title">Artist</p>       
                <div className="artist01_Artist_Info_div">
                    <p className="artist01_Artist_name">Joan Miro</p>
                    <p className="artist01_Artist_button">&gt;&gt; Artist’s website</p>
                    <textarea spellcheck="false" className="artist01_Artist_textarea" readonly="readonly" disabled>
                    호안 미로 이 페라(카탈루냐어: Joan Miró i Ferrà 주안 미로 이 페라[1], 1893년 4월 20일 ~ 1983년 12월 25일)은 스페인 카탈루냐 지방의 바르셀로나 출신의 화가, 조각가, 도예가이다.

바르셀로나 근처인 몬토로이크에서 출생하여 바르셀로나 미술 학교를 중퇴하고 1919년 파리로 나와 작품 활동을 시작하였다. 초기의 작품에는 사물에 대한 정밀한 형태적 감수성과 친밀감이 드는 서정적인 감동이 조화를 이루고 있다. 1923년부터 바실리 칸딘스키의 영향을 받아 초현실주의 화풍으로 바뀌었다. 그의 작품은 밝고 가벼운 색채와 소박하며 단순한 형식으로 이루어져 신선한 정서가 풍긴다. 1928년에는 네덜란드를 여행하였고, 그 해에 미국에서 개인전을 열었다. 1937년 파리 만국 박람회에 출품한 〈추수〉가 유명하다. 1947년 미국으로 건너가 신시내티 호텔 벽화, 하버드 대학 벽화를 그렸다. 1948년 귀국한 후로는 파리와 바르셀로나에서 제작생활을 하였다. 1954년 베네치아 국제전에서 판화 부문 국제상을 받았다. 1983년 12월 25일 성탄절에 90세의 나이로 사망하였다.

미로의 작품에는 초현실주의 특유한 어두운 느낌이나 심리묘사는 적고 밝은 소박성이 특질이며 모두를 순수한 상징기호로 바꾸어 가는 매력이 있다. 대표작으로 〈야곡〉 〈곡립의 귀〉 〈해맑은 웃음〉 등이 있다.
                    </textarea>
                    <div className="artist01_Artist_people">
                        <p class="artist01_Artist_people_name">누적 전시 관람객</p>
                        <p className="artist01_Artist_people_num">351</p>
                    </div> 
                    <div className="artist01_Artist_time">
                        <p className="artist01_Artist_time_name">누적 전시 관람 체류 시간</p>
                        <p className="artist01_Artist_time_num">1894:36:41</p>
                    </div>
                    <p className="artist01_time_line"></p>
                </div>
            </div>
            <div className="artist01_Artist_Fav_Art">
                <p className="artist01_Artist_Fav_title">작가 주요 작품</p>
                <div className="artist01_Artist_Fav_Art_div">
                    <div className="Fav_Art_slider">
                        <SimpleSlider2></SimpleSlider2>
                    </div>
                </div>
            </div>
            <div className="artist01_Artist_Old">
                <p className="artist01_Artist_Old_title">작가 연령별 선호도</p>
                <div className="artist01_Artist_Old_graph_div">
                    <div className="artist01_Artist_Old_graph">
                        <Chart04></Chart04>
                    </div>
                </div>
            </div>
            <p className="artist01_Art_Like_title">작품 관객 반응</p>
            <div className="artist01_Art_Like">
                
                <div className="artist01_Art_Like_div">
                    <div className="artist01_Art_Like_graph">
                        <div className="Art_like_title">
                            <p>긍정</p>
                            <p>부정</p>
                        </div>
                        <div className="Art_like_num">
                            <p>{like}</p>
                            <p>{100-like}</p>
                        </div>
                        <div className="bar_state" style={{background:`${like_dislike}`}}>확인</div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Artist01;
