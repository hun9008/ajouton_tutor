import React, { useState } from "react";

function SuccJoin() {
   
    const url = 'http://reservation.page/create';

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
            <h1>축하합니다!</h1>
            <h1>튜터링 예약 신청을 완료했습니다.</h1>

            <p>생성된 URL 링크를 통해 튜티들은 튜터링 예약을 신청할 수 있습니다.</p>
            <p>생성된 URL 링크</p>
            <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #ccc', 
                borderRadius: '5px', 
                padding: '10px', 
                width: '400px', 
                height: '25px',
                margin: 'auto'
            }}>
                <p style={{ fontWeight: 'bold',  marginLeft: '10px'}}>
                    http://reservation.page/create</p>

                <button 
                    onClick={handleCopy}
                    style={{
                        background: '#405678',
                        color: '#EDEFF3',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginLeft: '30px',
                        alignItems: 'right',
                    }}>
                    URL 복사하기
                </button>
            </div>
            
            <p>날짜 선택</p>
            <input type="date" id="date" name="date" />
            <p>시간 선택</p>
            <input type="time" id="time" name="time" />

        </div>

 
    );
}

export default SuccJoin;