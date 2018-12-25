import React from "react";
import Navbar from "./navbar.jsx";

class Header extends React.Component {
    render(){
        return(
            <div className="header row" >
              <div className="portrait four columns"></div>
              <h1 className="title eight columns" > Dev Blog of Sam Bragge </h1>
              <Navbar/>
            </div>
        );
    }
};


export default Header;
