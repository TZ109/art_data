import React,{useState} from 'react';
import axios from 'axios';
import './login.css';

function LoginPage({history}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function loginForm()
    {
        axios.post("http://localhost:4000/api/loginForm",{
            username: username,
            password: password,
        }, { withCredentials: true })
        .then((res) =>
        {
            //console.log(res.data.accessToken)
            //
            if(res.data.success==true)
            {
                alert('로그인성공');
                //console.log(history)
                history.goBack();
            }

            //
            else{

            }
        })
        .catch(() => {
            alert('error')
        })
    }
    

        return(
            <div>
                <p className="login_Slogan1">IoT기술과 예술이 만나다</p>
                <p className="login_Slogan2">작품의 가치를 좀 더 선명하게 확인 해 보세요.</p>
                <div className="login_box">
                    <img src="/img/full_logo.png" alt="로고 이미지" />
                    <input maxLength="20" type="text" placeholder="ID" onChange={(e) => setUsername(e.target.value)}/>
                    <input maxLength="20" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="login_btn"><a onClick={loginForm}><p>Log in</p></a></div>
                    
                </div>
            </div>
        )
}
export default LoginPage;
