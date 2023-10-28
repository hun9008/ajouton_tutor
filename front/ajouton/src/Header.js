import React from "react";

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

    return (
        <div style={headerStyle}>
            <h1 className="title">멘토</h1>
        </div>
    );
}

export default Header;
