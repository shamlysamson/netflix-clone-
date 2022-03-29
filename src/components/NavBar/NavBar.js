import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React from 'react';
import "./NavBar.css";
function NavBar(){

return(
  
        <div className="navbar">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
            <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
            
         
            <div className="container">
      
        <div className="left">
          <span>Home</span>
          <span>TV shows</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        </div>
        
        <div className="right">
        <Search className="icon" />
          <span>KID</span>
          <div className="profile">
          <Notifications className="icon" />
          <ArrowDropDown className="icon" />
          </div>
        </div>
        </div>
       
            
         
     
  
    
  );
};


export default NavBar;