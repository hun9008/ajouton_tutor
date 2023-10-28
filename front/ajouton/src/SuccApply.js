import React from "react";
import { useNavigate } from "react-router-dom";

function SuccApply() {

    const navigate = useNavigate();
    const reapply = () => {
            navigate("/TutorApplication");
          };

          const button = {
            display: "flex",
            width: "300px",
            height: "54px",
            padding: "19px 20px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexShrink: "0",
            borderRadius: "10px",
            background: "var(--primary-color, #405678)",
            color: "#EDEFF3",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "16px",
            textAlign: "center",
            margin: "auto",
        }
        


    return(
        <div>
            <h1>튜터링 예약 신청을 완료했습니다.</h1>
            <p>새로운 튜터링 예약을 신청하고 싶으시면 아래 버튼을 눌러주세요.</p>
            <button style={button} onClick={reapply}> 새로 신청하기</button>
        </div>
    );
}

export default SuccApply;
    