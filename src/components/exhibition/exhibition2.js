import './exhibition.css'
import react from 'react';
import Chart03 from '../chartcomponent/chart03';
import Chart02 from '../chartcomponent/chart02';
import Chart04 from '../chartcomponent/chart04';
function Exhibition2(){
    return(
        <div className='exhibition_page'>
            <div className='exhibition2'>
                <p className='exhibition2_title'>Exhibition</p>
                <div className='exhibition2_box'>
                    <img src="/img/picture.png" alt="" />
                    <p className="exhibition2_artist">Joan Miro :</p>
                    <p className="exhibition2_day">apr 10 - may 11, 2021</p>
                    <p className="exhibition2_musium">MoMA Museum</p>
                    <div className="exhibition2_btn1"><p>Art Work</p></div>
                    <p className="exhibition2_textTitle">국가는 노인과 청소년의 복지향상</p>
                    <textarea spellcheck="false" className="exhibition2_textArea">을 위한 정책을 실시할 의무를 진다. 언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다.
                       학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및 교원의 지위에 관한 기본적인 사항은 법률로 정한다.
                       신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다.
                       대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다.원장은 국회의 동의를 얻어 대통령이 임명하고,
                       그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다. 모든 국민은 근로의 권리를 가진다.
                       국가는 사회적·경제적 방법으로 근로자의 고용의 증진과 적정임금의 보장에 노력하여야 하며,
                       법률이 정하는 바에 의하여 최저임금제를 시행하여야 한다.
                       선거에 있어서 최고득표자가 2인 이상인 때에는 국회의 재적의원 과반수가 출석한 공개회의에서 
                       다수표를 얻은 자를 당선자로 한다. 공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다.
                       헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다.
                       국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다.
                    </textarea>
                    <div className="exhibition2_data_box1">
                        <div>
                            <p className="data_box_name">금일 전시 관람객</p>
                        </div>
                        <div>
                            <p className="data_box_number">351</p>
                        </div>
                    </div>
                    <div className="exhibition2_data_box2">
                        <div>
                            <p className="data_box_name">금일 전시 관람 체류 시간</p>
                        </div>
                        <div>
                            <p className="data_box_number">194:36:41</p>
                        </div>
                    </div>
                    <div className="data_date"><p>2020. 02. 08 PM 14:00 기준</p></div>
                </div>
            </div>
            <p className="rank_title">주요 전시 작품</p>
            <div className="rank_table">
                <div className="table_header">
                    <div className="table_rank"><p className="table_font">순위</p></div>
                    <div className="table_art"><p className="table_font">작품</p></div>
                    <div className="table_time"><p className="table_font">관람 누적 체류 시간</p></div>
                </div>
                <div className="table_body">
                    <div className="body_rank"><p className="body_font">1</p></div>
                    <div className="body_art"><p className="body_font">Joan Miro : composition(painting)</p></div>
                    <div className="body_time"><p className="body_font">194:36:41</p></div>
                </div>
                <div className="table_body">
                    <div className="body_rank"><p className="body_font">2</p></div>
                    <div className="body_art"><p className="body_font">Joan Miro : composition(painting)</p></div>
                    <div className="body_time"><p className="body_font">194:36:41</p></div>
                </div>
                <div className="table_body">
                    <div className="body_rank"><p className="body_font">3</p></div>
                    <div className="body_art"><p className="body_font">Joan Miro : composition(painting)</p></div>
                    <div className="body_time"><p className="body_font">194:36:41</p></div>
                </div>
                <div className="table_body">
                    <div className="body_rank"><p className="body_font">4</p></div>
                    <div className="body_art"><p className="body_font">Joan Miro : composition(painting)</p></div>
                    <div className="body_time"><p className="body_font">194:36:41</p></div>
                </div>
                <div className="table_body">
                    <div className="body_rank"><p className="body_font">5</p></div>
                    <div className="body_art"><p className="body_font">Joan Miro : composition(painting)</p></div>
                    <div className="body_time"><p className="body_font">194:36:41</p></div>
                </div>
            </div>
            <p className="customer_title">시간대 별 관람객 수</p>
            <div className="customer_graph">
                
                <Chart03></Chart03>
            </div>
            <p className="old_title">전시 연령별 선호도</p>
            <div className="old_graph">
                <Chart04></Chart04>
            </div>

        </div>
    )
}

export default Exhibition2;
