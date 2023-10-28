import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TutorApplication.css';

function ToutorApplication() {

    const [isOfflineSelected, setIsOfflineSelected] = useState(false);
    const [studentNumber, setStudentNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState(''); // If offline is selected
    const [question, setQuestion] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [locationType, setLocationType] = useState('');

    const isFormComplete = () => {
        // locationType이 설정되어 있는지 확인
        return studentNumber && date && time && locationType && ((locationType === 'offline' && location) || locationType === 'online') && question;
    };

    const handleOfflineChange = (e) => {
        setIsOfflineSelected(e.target.checked);
        if (!e.target.checked) {
            setLocation(''); 
        }
    }


    const navigate = useNavigate();

    const handleSubmit = () => {
        if (isFormComplete() && !isSubmitted) {
            navigate("/SuccApply");
        }
    };

    return (
        <div>
            <div className="top">
            <h1 className="title">
                아주대학교 소프트웨어학과 <br />
                SCE204 Object Oriented Programming and Practice (Yenewondim Sinshaw) <br />
                코드트레이닝 서비스 신청 페이지
            </h1>
            </div>
            <div className='line'/>
            <p className='inst'>
                안녕하세요. SCE204 Object Oriented Programming and Practice (Yenewondim Sinshaw) 과목의 코드트레이너 김경수입니다. <br />
                코딩트레이너들의 주요 목표는 과제 제출에 실패한 학생들에게 코드의 오류를 컴토해서 해결 방안을 조언해주거나, 수강에 어려움을 겪는(실습 시간이나 수업 내용) <br />
                학생들의 문제 해결을 가이드하고, 수강생들의 코딩 역량 배양을 위한 과목 담당 교수님의 조력자가 되는 것입니다.<br />
                여러분이 잘 모르는 내용이 생길 때 이메일을 이용해서 누군가에게 그 내용을 물어보는 일은 정말로 쉽지 않은 일입니다. <br />
                매번 모르는 내용이 생길 때 마다 귀찮게 이메일을 보내자니 차라리 안물어보고 말지라는 생각이 드는것은 어찌보면 당연한 일이죠. <br />
                그런 여러분들을 위해 간단한 코딩트레이닝 세션 예약 서비스를 만들었습니다.<br />
                아래에 학번을 입력한 뒤 조회 버튼을 누르고 줌 미팅을 원하는 날짜와 시간을 선택하세요. <br />
                그리고 질문 내용을 간단히 입력한 후 신청하기 버튼을 누르면 짜잔. 코드트레이너들에게 귀찮게 이메일을 보내지 않아도 편하게 코드트레이닝 세션을 예약할 수 있습니다. <br />
                심지어 코드트레이너의 개인 구글 캘린더와 실시간으로 연동되어서 코드트레이닝 세션 예약이 훨씬 더 수월해지죠.<br />
                신청 후 발송되는 이메일에 줌 링크가 같이 들어있습니다. 예약한 시간에 메일에 들어있는 URL로 줌 세션에 참여하세요. <br />
                수업 중이나 실습 시간에 생겼던 궁금한 내용을 이 페이지를 통해 편하게 질문하셨으면 좋겠습니다. 그럼 그 때 뵙도록 하겠습니다. 고맙습니다.<br />
                아주대학교 SCE204 Object Oriented Programming and Practice (Yenewondim Sinshaw)코드트레이너 김경수 드림.<br />
            </p>

            <div className="container">

                    <p className='bold'>튜터링 예약 신청</p>

                    <p className='menu'>학번</p>
                    <div className="studentnum">
                    
                    <input 
                    className='textbox' 
                    type="text" 
                    placeholder="학번을 입력하세요"
                    value={studentNumber}
                    onChange={e => setStudentNumber(e.target.value)}
                    />
                    <button className='button1'>조회</button>

                    <p className='menu'>날짜선택</p>
                    <input 
                    className='datebox'
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    />

                   
                    
                    <p className='menu'>시간선택</p>
                    <input 
                    className='timebox'
                    type="time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    />

                <p className='menu'>장소</p>
                <div>
                <label>
                    <input 
                        className='radio' 
                        type="radio" 
                        name="location" 
                        value="online" 
                        checked={locationType === "online"}
                        onChange={() => setLocationType("online")}
                    />
                    온라인
                </label>
                <label>
                    <input 
                        className='radio' 
                        type="radio" 
                        name="location" 
                        value="offline" 
                        checked={locationType === "offline"}
                        onChange={() => setLocationType("offline")}
                    />
                    오프라인
                </label>
                </div>
                      {locationType === "offline" && (
                    <div>
                        <p className='menu'>장소 추가</p>
                        <input 
                            className='textbox' 
                            type="text" 
                            placeholder="오프라인 장소를 입력하세요"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                        />
                    </div>
                )}

                <p className='menu'>질문 내용</p>
                <input 
                    className='qtext' 
                    type="text" 
                    placeholder="질문 내용을 입력하세요"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                />

                    
                   



                </div> 
                <button 
                className={`button2 ${isFormComplete() ? 'active' : ''}`} 
                disabled={!isFormComplete() || isSubmitted}
                onClick={handleSubmit}
                 >
                {isFormComplete() ? '신청하기' : '비활성화'}
                </button>
            </div>



        </div>
    );
}

export default ToutorApplication;