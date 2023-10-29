import React from "react";
import { useNavigate } from "react-router-dom";
import AMENTO from "./AMENTO.svg";



function Header() {

    const navigate = useNavigate();
    const CreateLink = () => {
            navigate("/login");
          };
    const Landing = () => {
            navigate("/");
          }

 


    const headerStyle = {
        background: "#405678",
        display: "flex",
        width: "1440p",  // 유연하게 화면 전체 폭을 사용
        height: "50px",
        padding: "30px 1245px 24px 43px",
        alignItems: "center",
        flexShrink: 0,
    }

    const subMenu = {
        display: "flex",
        flexShrink: 0,


    }


    const img= {
    
        marginTop: "30px",
        marginleft: "30px",

    }

    const menu = {
        color:"#FFF",
        size: "50px",
        style: "normal",
        weight: "700",
        lineheight: "16px",
        marginLeft: "1089px"

    }

    return (
        <div style={headerStyle}>
            <img onClick={Landing} style={img} src={AMENTO} alt="AMENTO" /> 


            <div style={subMenu}>
            <p style={menu} onClick={CreateLink}>튜터링 등록</p>

            </div>

        </div>
    );
}

export default Header;
