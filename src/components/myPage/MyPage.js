import React, { Component, useEffect, useState } from 'react';
import  './MyPage.css';
import islogin from '../../pages/isLogin';
import {Link} from 'react-router-dom';

import axios from 'axios';

function MyPage({history}){
       // console.log(islogin);
        const [userdata, setUserdata] = useState({
                username:'',
                name:'',
                email:''
        })


       


       useEffect(() => {
        let temp =  document.cookie.toString().split(';')
        for(let i=0; i< temp.length; i++)
        {
                let temp2 = temp[i].toString().split('user=')
                
                if(temp2.length == 2)
                {
                        
                        axios.post('http://localhost:4000/api/myPage',{
                                user: temp2[1]
                        })      
                        .then((result) => {
                                if(result.data.success==false)
                                {
                                        alert('로그인이 필요합니다')
                                        history.push('/loginPage')
                                }

                                else{
                                        setUserdata(result.data)
                                }
                        })
                        .catch()
       
                }
                
        }

       }, [])
        

    return(
            <div className="myPage_Page">
                {/*개인 정보*/}
                <p className="personal_data_title">내 정보</p>
                <div className="personal_data_div">
                        <p>이름 : {userdata ? userdata.name : null}</p>
                        <p>이메일 : {userdata ? userdata.email : null}</p>
                </div>
                <Link to={`/transfer?mine=${userdata.username}`}><div className="Transfer_button"><p>보유 작품 양도</p></div> </Link>
                
                {/*보유 중인  작품 목록*/}
                <p className="name">보유 작품</p>
                <div className="collection">
                        <div className="collection_header_flex">
                                <div><p className="collect_num">번호</p></div>
                                <div><p className="collect_art">작품명</p></div>
                                <div><p className="collect_artist">작가명</p></div>
                                <div><p className="collect_day">구매 날짜</p></div>
                        </div>
                        {/*이 데이터의 반복 */}
                        <div className="collection_data_flex">
                                <div><p className="data_num">1</p></div>
                                <div><p className="data_picture1">picutrepppppppppppppppppppppppppppppppppppp</p></div>
                                <div><p className="data_artist1">artist</p></div>
                                <div><p>21.07.16</p></div>
                        </div>
                        <div className="collection_data_flex">
                                <div><p className="data_num">2</p></div>
                                <div><p className="data_picture1">picutre</p></div>
                                <div><p className="data_artist1">artist</p></div>
                                <div><p>21.07.16</p></div>
                        </div>      
                        <div className="collection_data_flex">
                                <div><p className="data_num">3</p></div>
                                <div><p className="data_picture1">picutre</p></div>
                                <div><p className="data_artist1">artist</p></div>
                                <div><p>21.07.16</p></div>
                        </div>         
                        <div className="collection_data_flex">
                                <div><p className="data_num">4</p></div>
                                <div><p className="data_picture1">picutre</p></div>
                                <div><p className="data_artist1">artist</p></div>
                                <div><p>21.07.16</p></div>
                        </div>    
                        <div className="collection_data_flex">
                                <div><p className="data_num">5</p></div>
                                <div><p className="data_picture1">picutre</p></div>
                                <div><p className="data_artist1">artist</p></div>
                                <div><p>21.07.16</p></div>
                        </div>    
                        {/* 데이터 반복 끝. */}     
                </div>
                <p className="name">관심 작품</p>
                <div className="like_art">
                <div className="collection_header_flex">
                                <div><p className="like_art_num">번호</p></div>
                                <div><p className="like_art_art">작품명</p></div>
                                <div><p className="like_art_artist">작가명</p></div>
                                
                        </div>
                        {/*이 데이터의 반복 */}
                        <div className="collection_data_flex">
                                <div><p className="data_num">1</p></div>
                                <div><p className="data_picture2">picutre</p></div>
                                <div><p className="data_artist2">artist</p></div>
             
                        </div>
                        <div className="collection_data_flex">
                                <div><p  className="data_num">2</p></div>
                                <div><p className="data_picture2">picutre</p></div>
                                <div><p className="data_artist2">artist</p></div>
                      
                        </div>      
                        <div className="collection_data_flex">
                                <div><p  className="data_num">3</p></div>
                                <div><p className="data_picture2">picutre</p></div>
                                <div><p className="data_artist2">artist</p></div>
                                
                        </div>         
                        <div className="collection_data_flex">
                                <div><p className="data_num">4</p></div>
                                <div><p className="data_picture2">picutre</p></div>
                                <div><p className="data_artist2">artist</p></div>
                        </div>    
                        <div className="collection_data_flex">
                                <div><p className="data_num">5</p></div>
                                <div><p className="data_picture2">picutre</p></div>
                                <div><p className="data_artist2">artist</p></div>
                        </div>    
                        {/* 데이터 반복 끝. */}   
                </div>


            </div>


    )

}
export default MyPage;