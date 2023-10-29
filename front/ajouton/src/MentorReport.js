import React, { useState, useEffect } from "react";
import './MentorReport.css';
import axios from "axios";

function generateDateRange(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dateArray = [];

    while (start <= end) {
        dateArray.push(new Date(start).toISOString().split('T')[0]);
        start.setDate(start.getDate() + 1);
    }
    return dateArray;
}

function MetorReport() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [dateRange, setDateRange] = useState([]);

    useEffect(() => {
        setDateRange(generateDateRange(startDate, endDate));
    }, [startDate, endDate]);

    const handleGeneratePDF = async () => {
        const url = 'https://pass.kksoft.kr:15823/v1/api/download';
        try {
            const response = await axios.get(url, {
                headers: {
                    'start-date': startDate,
                    'end-date': endDate
                },
                responseType: 'blob' // Add this line
            });
            
            // Convert the blob into a URL and open in a new tab
            const blobURL = URL.createObjectURL(response.data);
            window.open(blobURL, '_blank');

        } catch (error) {
            console.error("Error fetching data from backend:", error);
        }
    }

    return (
        <div>
            <h2 className="title">튜터링 활동일지 다운로드</h2>
            <p>자동으로 기록된 튜터링 활동들을 PDF로 간편한 활동일지를 만들어보세요!<br/> 
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
                placeholder="시작일" 
            />
            <span> ~ </span>
            <input 
                type="date" 
                id="end" 
                name="trip-end" 
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                min="2000-01-01" 
                max="2030-12-31"
                placeholder="마지막일" 
            />

            <button className="button" onClick={handleGeneratePDF}>PDF 파일생성</button>
        </div>
    );
}

export default MetorReport;
