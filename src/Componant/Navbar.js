import React from 'react'
import './Nav.css';
export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light ">
    <a className="navi mr-5 ml-2"href="/"><img style={{borderRadius:"15%"}} src="./PVR_LOGOS.png" alt="" width="100" height="90"/></a>
    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="  collapse navbar-collapse float-right" id="navbarNavAltMarkup">
      <div className=" nav-links navbar-nav float-right">
        <a className=" navilink nav-item nav-link ml-5 mx-5 " style={{color:"black", fontFamily:"cursive",fontSize:"large"}} href="/">Home <span className="sr-only">(current)</span></a>
        <a className=" navilink nav-item nav-link ml-5 mx-5 "style={{color:"black", fontFamily:"cursive",fontSize:"large"}} href="/Rooms">Rooms</a>
        <a className=" navilink nav-item nav-link ml-5 mx-5 " style={{color:"black",fontFamily:"cursive",fontSize:"large"}}  href="/Contact">Contact</a>

      </div>
    </div>
  </nav>
  );
}
