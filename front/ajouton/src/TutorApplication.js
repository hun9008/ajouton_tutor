import React from 'react';




function ToutorApplication() {

    return (
        <div>
            <h1 className="title">Application</h1>
            <p>튜터링 설명</p>

            <div className="container">

                <div className="studentnum">
                    
                    <input type="text" placeholder="학번을 입력하세요"></input>
                    <button>조회</button>

                    <p>날짜선택</p>
                    <input type="date"></input>
                    
                    <p>시간선택</p>
                    <input type="time"></input>

                    <p>질문 내용</p>
                    <input type="text" placeholder="질문 내용을 입력하세요"></input>

                    
                   



                </div> 
                <button>신청하기</button>   
            </div>



        </div>
    );
}

export default ToutorApplication;