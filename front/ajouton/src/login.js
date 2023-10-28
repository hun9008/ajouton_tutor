import React, {useState} from 'react';
import './App.css';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [className, setClassName] = useState('');
    const [classInfo, setClassInfo] = useState('');

    return (
        <div className="login">
            <text>이름</text>
            <textarea 
                className="textBox" 
                placeholder="이름을 입력해주세요..." 
                value={name} 
                onChange={e => setName(e.target.value)}
            />
            <br/>
            <text>이메일</text>
            <textarea 
                className="textBox" 
                placeholder="이메일을 입력해주세요..." 
                value={email} 
                onChange={e => setEmail(e.target.value)}
            />
            <br/>
            <text>수업명</text>
            <textarea 
                className="textBox" 
                placeholder="수업이름을 입력해주세요..." 
                value={className} 
                onChange={e => setClassName(e.target.value)}
            />
            <br/>
            <text>수업정보</text>
            <textarea 
                className="textBox" 
                placeholder="수업정보를 입력해주세요..." 
                value={classInfo} 
                onChange={e => setClassInfo(e.target.value)}
            />
            <br/>
            <GoogleOAuthProvider
                clientId="188993087518-sgpan8fbqrn6kfv9huu9j2rumgr536pu.apps.googleusercontent.com"
                buttonText="Login with Google">
                <div>
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        console.log(credentialResponse)
                    }}
                    onError={() =>{
                        console.log('login fail');
                    }}
                    width="300px"
                    useOnTap
                />
                </div>
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;
