import React from "react";
import { useNavigate } from "react-router-dom";

function SuccApply() {

    const navigate = useNavigate();
    const reapply = () => {
            navigate("/TutorApplication");
          };

    return(
        <div>
            <h1>튜터링 예약 신청을 완료했습니다.</h1>
            <p>새로운 튜터링 예약을 신청하고 싶으시면 아래 버튼을 눌러주세요.</p>
            <button onClick={reapply}> 새로 신청하기</button>
        </div>
    );
}

export default SuccApply;
    