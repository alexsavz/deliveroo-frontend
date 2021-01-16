import React from "react";
import logo from "../logo-teal.svg";

const Header = (props) => {
  return (
    <header>
        <div className="topbar"><img src={logo} alt="logo deliveroo"/></div>
        <div className="header-main">
            <div className="header-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
            <img src={props.src} alt="header"/>
        </div>    
    </header>
);
}

export default Header;