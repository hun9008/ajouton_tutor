import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [className, setClassName] = useState('');
    const [classInfo, setClassInfo] = useState('');
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = () => {
        setDownloaded(true);
    };

    const [sendData, setSendData] = useState(false);

    useEffect(() => {
        if (sendData) {
            const backendURL = "https://backendurl.com/register";  // Replace with actual backend URL
            const data = {
                name: name,
                email: email,
                className: className,
                classInfo: classInfo,
                downloaded: downloaded
            };
            axios.post(backendURL, data)
                .then(response => {
                    console.log("Data sent successfully:", response.data);
                    setSendData(false);  // Reset after sending
                })
                .catch(error => {
                    console.error("Error sending data:", error);
                    setSendData(false);  // Reset even if there's an error
                });
        }
    }, [sendData, name, email, className, classInfo, downloaded]);
  

    return (
        <div className="login">
            <div className="bar">
                <div className="bar_text">amento</div>
            </div>
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
            <a href="https://pass.kksoft.kr:15823/v1/api/calendar/login" target="_blank" rel="noopener noreferrer">
                <button style={{ width: "300px", height: "40px" }}>Calendar Login</button>
            </a>
            <br/>
            <div style={{marginRight:330, fontWeight: 'bold', fontSize: 20}}>튜티 정보</div>
            {downloaded ? (
                <input type="file" accept=".xlsx" /> 
            ) : (
                <a href="/myExcel.xlsx" download className="download-button" onClick={handleDownload}>
                    엑셀 다운로드
                </a>
            )}
            <button style={{ marginTop: 20, padding: '10px 20px', fontSize: '15px' }} onClick={() => setSendData(true)}>
                등록하기
            </button>

        </div>
    );
}

export default App;
