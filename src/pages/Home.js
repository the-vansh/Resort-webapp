import React from "react";
import Somecontent from "../Componant/Somecontent";
import "./Home.css";
import Services from "../Componant/Services";
import Footer from "../Componant/Footer";
export default function Home() {
  return (
    <div>
      <div className="hero">
        <div className="innerbanner">
          <div className="container">
            <div className="card">
              <div className="image">
                <img
                  href="/Rooms"
                  src="https://images.unsplash.com/photo-1605537964076-3cb0ea2ff329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwcmVzb3J0fGVufDB8fDB8fHww&w=1000&q=80"
                />
              </div>
              <div className="content">
                <h3>OUR ROOMS</h3>
                <p>
                  Available at best Prices
                </p>
                <a href="/Rooms" class="btn btn-dark">Our Rooms</a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Services/>
      <Somecontent/>
      <Footer/>
    </div>

    
  );
}

