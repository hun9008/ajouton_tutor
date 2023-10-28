import React, {useState} from 'react';
// import axios from 'axios';
import './App.css';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [className, setClassName] = useState('');
    const [classInfo, setClassInfo] = useState('');
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = () => {
        setDownloaded(true);
    };

    // const [token, setToken] = useState('');

    // const handleGoogleSuccess = async (response) => {
    //     try {
    //         // Use the authorization code to get the access and refresh tokens
    //         const result = await axios.post('https://oauth2.googleapis.com/token', {
    //             code: response.code,
    //             client_id: '188993087518-sgpan8fbqrn6kfv9huu9j2rumgr536pu.apps.googleusercontent.com',
    //             client_secret: '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',
    //             redirect_uri: 'http://localhost:3000/',
    //             grant_type: 'authorization_code',
    //         });

    //         const { access_token, refresh_token } = result.data;

    //         console.log('Access Token:', access_token);
    //         console.log('Refresh Token:', refresh_token);

    //         setToken(access_token);
    //     } catch (error) {
    //         console.error('Error getting tokens:', error.response);
    //     }
    // };
  

    return (
        <div className="login">
            <div style={{marginRight:340, marginTop: 80, fontWeight: 'bold', fontSize: 20}}>튜터 정보</div>
            <br/>
            <div style={{marginRight:370, marginBottom: 10}}>이름</div>
            <textarea 
                className="textBox" 
                placeholder="이름을 입력해주세요..." 
                value={name} 
                onChange={e => setName(e.target.value)}
            />
            <br/>
            <div style={{marginRight:360, marginBottom: 10}}>이메일</div>
            <textarea 
                className="textBox" 
                placeholder="이메일을 입력해주세요..." 
                value={email} 
                onChange={e => setEmail(e.target.value)}
            />
            <br/>
            <div style={{marginRight:340, fontWeight: 'bold', fontSize: 20}}>과목 정보</div>
            <br/>
            <div style={{marginRight:360, marginBottom: 10}}>수업명</div>
            <textarea 
                className="textBox" 
                placeholder="수업이름을 입력해주세요..." 
                value={className} 
                onChange={e => setClassName(e.target.value)}
            />
            <br/>
            <div style={{marginRight:340, marginBottom: 10}}>수업정보</div>
            <textarea 
                className="textBox" 
                placeholder="수업정보를 입력해주세요..." 
                value={classInfo} 
                onChange={e => setClassInfo(e.target.value)}
            />
            <br/>
            <div style={{marginRight:320 ,fontWeight: 'bold', fontSize: 20}}>구글 캘린더</div>
            <br/>
            <GoogleOAuthProvider
                clientId="188993087518-sgpan8fbqrn6kfv9huu9j2rumgr536pu.apps.googleusercontent.com"
                buttonText="Login with Google"
                scope="https://www.googleapis.com/auth/calendar">
                <div>
                <GoogleLogin
                    responseType="code"
                    onSuccess={(credentialResponse) => {
                        console.log(credentialResponse)
                        console.log('Token:', credentialResponse.access_token);
                    }}
                    // onSuccess={handleGoogleSuccess}
                    onError={() =>{
                        console.log('login fail');
                    }}
                    width="300px"
                    useOnTap
                />
                </div>
            </GoogleOAuthProvider>
            <br/>
            <div style={{marginRight:330, fontWeight: 'bold', fontSize: 20}}>튜티 정보</div>
            {downloaded ? (
                <input type="file" accept=".xlsx" /> 
            ) : (
                <a href="/myExcel.xlsx" download className="download-button" onClick={handleDownload}>
                    엑셀 다운로드
                </a>
            )}
            <button style={{ marginTop: 20, padding: '10px 20px', fontSize: '15px' }}>
                등록하기
            </button>

        </div>
    );
}

export default App;
