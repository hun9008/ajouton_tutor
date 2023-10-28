import React from "react";
import { Link } from "react-router-dom"; 
import MetorReport from "./MentorReport";

function Header() {
    const headerStyle = {
        background: "#405678",
        display: "flex",
        width: "1440px",
        height: "50px",
        padding: "30px 1245px 24px 43px",
        alignItems: "center",
        flexShrink: 0,
    }

    const subMenu = {
        display: "flex",
        flexShrink: 0,
        marginLeft: "1000px",
        gap : "15px",
        color:"#FFF",
        size: "18px",
        style: "normal",
        weight: "700",
    }

    return (
        <div style={headerStyle}>
            <h1 className="title">멘토</h1>
            <div style={subMenu}>
                <p>예약 링크 생성</p>
               
                    <p Link to="/MentorReport">활동일지 내보내기</p>
               
            </div>
        </div>
    );
}

export default Header;
