import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

function SuccJoin() {
    const location = useLocation();
    const receivedSbjCode = location.state?.sbjCode;
    console.log(receivedSbjCode);
    const url = `http://reservation.page/create/${receivedSbjCode}`;
    
    const handleCopy = () => {
        
        const textarea = document.createElement("textarea");
        textarea.value = url;
        document.body.appendChild(textarea);
        
       
        textarea.select();
        document.execCommand("copy");
        
        document.body.removeChild(textarea);

       
        alert("URL이 복사되었습니다!");
    };

    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                marginTop: '100px',
            
            }}>축하합니다!</h1>
            <h1>튜터링 예약 신청을 완료했습니다.</h1>

            <p style={{
                textAlign: 'center',
                marginTop: '50px',
            }}>생성된 URL 링크를 통해 튜티들은 튜터링 예약을 신청할 수 있습니다.</p>
            <p>생성된 URL 링크</p>
            <div style={{ 
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ccc', 
                borderRadius: '5px', 
                padding: '10px', 
                width: '400px', 
                height: '20px',
                margin: 'auto',
                marginTop: '50px',
            }}>
                <p style={{ fontWeight: 'bold',  marginLeft: '10px'}}>
                    {url}</p>

                    <button 
                    onClick={handleCopy}
                    style={{
                        background: '#405678',
                        color: '#EDEFF3',
                        border: 'none',
                        padding: '10px 10px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginLeft: '50px',
                        alignItems: 'right',
                    }}>
                    URL 복사하기
                </button>
            </div>
            <button 
                    onClick={handleCopy}
                    style={{
                        background: '#405678',
                        color: '#EDEFF3',
                        border: 'none',
                        padding: '10px 10px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginLeft: '50px',
                        alignItems: 'right',
                    }}>
                    URL 복사하기
                </button>

        </div>

 
    );
}

export default SuccJoin;
