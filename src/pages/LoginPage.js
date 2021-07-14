import React from 'react';
import './login.css';

function LoginPage(){
        return(
            <div>
                <p className="login_Slogan1">IoT기술과 예술이 만나다</p>
                <p className="login_Slogan2">작품의 가치를 좀 더 선명하게 확인 해 보세요.</p>
                <div className="login_box">
                    <img src="/img/full_logo.png" alt="로고 이미지" />
                    <input maxlength="20" type="text" placeholder="ID" />
                    <input maxlength="20" type="password" placeholder="Password" />
                    <div className="login_btn"><p>Log in</p></div>
                </div>
            </div>
        )
}
export default LoginPage;
