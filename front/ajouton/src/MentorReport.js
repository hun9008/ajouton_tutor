import React, { useState } from "react";
import './MentorReport.css';


function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // months are 0-indexed in JS
    const day = String(today.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}
function MetorReport() {

    const [startDate, setStartDate] = useState(getCurrentDate());
    const [endDate, setEndDate] = useState(getCurrentDate());


    return (
        <div>
            <p className="title">튜터링 활동일지 다운로드</p>
            <p>자동으로 기록된 튜터링 활동들을 PDF로 간편한 활동일지를 만들어보세요! 
                활동일지를 만들고자 하는 날짜를 선택해주세요.</p>
            <h1>활동 기간을 선택해주세요</h1>
            <input 
                type="date" 
                id="start" 
                name="trip-start"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                min="2000-01-01" 
                max="2030-12-31"
            />
            <input 
                type="date" 
                id="end" 
                name="trip-end" 
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                min="2000-01-01" 
                max="2030-12-31"
            />

            <button className="button">PDF 파일생성</button>
        </div>
    );
}

export default MetorReport;
