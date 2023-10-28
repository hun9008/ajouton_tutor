import React from "react";
import { useNavigate } from "react-router-dom";



function Header() {

    const navigate = useNavigate();
    const CreateLink = () => {
            navigate("/login");
          };

 


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


    const bar_text= {
        textalign: "center",
        font: "Frieda",
        size: "40px",
        style: "normal",
        weight: "400",
       height: "37px", 
        marginleft: "30px",
        color:"#FFF",
      }

    return (
        <div style={headerStyle}>
            <div style={bar_text}>amento</div>


            <div style={subMenu}>
            <p onClick={CreateLink}>튜터링 등록</p>

            </div>

        </div>
    );
}

export default Header;
