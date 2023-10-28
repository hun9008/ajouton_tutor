import React from "react";
import { useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage.png";

function LandgingPage() {

    const navigate = useNavigate();
    const Start = () => {
            navigate("/login");
          };

    const button = {
        display: "flex",
        width: "300px",
        height: "54px",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        borderRadius: "10px",
        background: "var(--primary-color, #405678)",
        color: "#EDEFF3",
        fontFamily: "Pretendard",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "16px",
        margin: "auto",

    }

    const containerStyle = {
        position: 'relative',
        width: '100vw',
        height: '100vh',
    }

    const overlayContentStyle = {
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    }

    return  (
        <div style={containerStyle}>
            <img style={{ 
                width: '100%',
                height: "100vh", 
                objectFit: 'cover'
            }} src={LandingPage} alt="LandingPage" />

            <div style={overlayContentStyle}>
                <h1 style={{
                    color: "#EDEFF3", 
                    marginTop: '349px',
                    textAlign: 'center',
                    fontFamily: 'Pretendard',
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    marginBottom: '70px',
                }}> 
                    아멘토와 함께 <br />
                    효율적인 멘토링 활동을 시작해보세요!
                </h1>

                <button style={button} onClick={Start}>시작하기</button>
            </div>

                
            
        </div>
    );
}

export default LandgingPage;
