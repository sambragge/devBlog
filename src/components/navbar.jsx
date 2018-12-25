import React from "react";

const navItems = [
  {path:"/", name:"Home"}
].map(item=>(
  <li className="three columns">{item.name}</li>
));

class Navbar extends React.Component {
  render(){
    return(
      <ul className="navbar row" >
        {navItems}
      </ul>
    );
  }
};

export default Navbar;
