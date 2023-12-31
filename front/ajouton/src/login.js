import React, {useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './App.css';

// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [className, setClassName] = useState('');
    const [classInfo, setClassInfo] = useState('');
    const [downloaded, setDownloaded] = useState(false);
    const [sbjCode, setSbjCode] = useState('');

    const handleDownload = () => {
        setDownloaded(true);
    };


    const navigate = useNavigate();

    const refreshToken = "1//0eMpxcL8AMz6nCgYIARAAGA4SNwF-L9Ir5atHe5TE-c_aHmRTG8_tZZL7GG8ske6UC42DcaNu3ScyH4oPfY5bR4RCQmSmtVgsmRo";

    // const [refreshToken, setRefreshToken] = useState("");
    // useEffect(() => {
    //     axios.get("https://pass.kksoft.kr:15823/v1/api/calendar/login", {maxRedirects: 0})
    //         .then(response => {
    //             if (response.status === 302) {
    //                 const redirectURL = response.headers.location;
    //                 return axios.get(redirectURL);  // Manually handle the redirection
    //             }
    //             return response;
    //         })
    //         .then(response => {
    //             const token = response.data.refresh_token;  // Assuming the token is in the response's refresh_token property
    //             setRefreshToken(token);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching refresh token:", error);
    //         });
    // }, []);

    const [sendData, setSendData] = useState(false);
    const [encodedFile, setEncodedFile] = useState(""); // 상태 변수 추가

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const base64String = e.target.result.split(",")[1];
                setEncodedFile(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (sendData) {
            const backendURL = "https://pass.kksoft.kr:15823/v1/api/register";  // Replace with actual backend URL
            const data = {
                name: name,
                email: email,
                className: className,
                classInfo: classInfo,
                encodedFile: encodedFile,
                refresh_token: refreshToken,
                sbjCode: sbjCode,
            };
            axios.post(backendURL, data)
                .then(response => {
                    console.log("Data sent successfully:", response.data);
                    setSendData(false);  // Reset after sending
                    navigate("/SuccJoin" , { state: { sbjCode: sbjCode } });
                })
                .catch(error => {
                    console.error("Error sending data:", error);
                    setSendData(false);  // Reset even if there's an error
                });
        }
    }, [sendData, name, email, className, classInfo, encodedFile, refreshToken, sbjCode]);

    const textcont = {

        width: "400px",
        height: "40px",
        border: "1px solid var(--textfield, #BABABA)",
        borderRadius: "5px",
        padding: "5px",
        fontSize: "15px",
        marginBottom: "10px",
        marginRight: "10px",
        marginLeft: "-10px"
    }
  

    return (
        <div className="login">
            <div style={{marginLeft:-295, marginTop: 80, fontWeight: 'bold', fontSize: 20}}>튜터/팀장 정보</div>
            <br/>
            <div style={{marginRight:370, marginBottom: 10}}>이름</div>
            <input 
                style={textcont} 
                type="text"
                placeholder="이름을 입력해주세요..." 
                value={name} 
                onChange={e => setName(e.target.value)}
            />
            <br/>
            <div style={{marginRight:360, marginBottom: 10}}>이메일</div>
            <input 
                style={textcont} 
                type="text" 
                placeholder="이메일을 입력해주세요..." 
                value={email} 
                onChange={e => setEmail(e.target.value)}
            />
            <br/>
            <div style={{marginLeft:-270, fontWeight: 'bold', fontSize: 20, marginTop:35}}>과목/스터디 정보</div>
            <br/>
            <div style={{marginLeft:-310, marginBottom: 10}}>수업/스터디명</div>
            <input 
                style={textcont} 
                type="text" 
                placeholder="수업이름을 입력해주세요..." 
                value={className} 
                onChange={e => setClassName(e.target.value)}
            />
            <br/>
            <div style={{marginLeft:-290, marginBottom: 10}}>수업/스터디 정보</div>
            <input 
                style={textcont} 
                type="text" 
                placeholder="수업정보를 입력해주세요..." 
                value={classInfo} 
                onChange={e => setClassInfo(e.target.value)}
            />
            <br/>
            

            <div style={{marginRight:287 ,fontWeight: 'bold', fontSize: 20,marginTop:35}}>Google 캘린더</div>
            <br/>
          
            <a href="https://pass.kksoft.kr:15823/v1/api/calendar/login" target="_blank" rel="noopener noreferrer">
                <button style={{ width: "300px", height: "40px",backgroundColor: "#405678", color: "white", border: "none", borderRadius: "5px", fontSize: "15px", marginBottom: "10px", marginRight: "10px", marginLeft: "-10px" }}
                // onClick={() => {
                //     setTimeout(() => {
                //         axios.get("https://pass.kksoft.kr:15823/v1/api/calendar/login")
                //             .then(response => {
                //                 const token = response.data.refresh_token;  // Assuming the token is in the response's refresh_token property
                //                 setRefreshToken(token);
                //             })
                //             .catch(error => {
                //                 console.error("Error fetching refresh token:", error);
                //             });
                //     }, 10000);  // 10 seconds delay
                // }}
                >Calendar Login</button>
                
            </a>
            <br/>
<div style={{marginRight:250, fontWeight: 'bold', fontSize: 20,marginTop:35}}>튜티/스터디원 정보</div>
{downloaded ? (
    <div style={{ position: 'relative', display: 'inline-block' }}>
        <button className="custom-file-upload">
            파일 선택
        </button>
        <input 
            type="file" 
            accept=".xlsx" 
            onChange={handleFileChange} 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer'
                        }}
                    />
                </div>
            ) : (
                <a href="/myExcel.xlsx" download className="download-button" onClick={handleDownload}>
                    엑셀 다운로드
                </a>
            )}
            <button style={{backgroundColor: "#405678", marginTop: 20, padding: '10px 20px', fontSize: '15px' }} onClick={() => setSendData(true)}>
                등록하기
            </button>
        </div>
    );
}

export default App;