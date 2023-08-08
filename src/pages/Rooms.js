import React from 'react'
import ContentofRoom from '../Componant/ContentofRoom'
import Otherinfo from '../Componant/Otherinfo'
import Footer from '../Componant/Footer';
export default function Rooms() {
  return (
    <div>
        <div className="hero" style={{backgroundImage:"url(https://www.thelagoonaresort.com/images/cb3aa2188cac24b2e43ec2c9c67c0c67.jpg)"}}>
        <div className="innerbanner">
          <div className="container">
            <div className="card">
              <div className="image">
                <img
                  href="/"
                  src="https://www.rknresorts.com/assets/images/room3.jpg"
                />
              </div>
              <div className="content">
                <h3>Home</h3>
                <p>
                   PARADISE VISTA RESORT
                </p>
                <a href="/" class="btn btn-dark">Home</a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <ContentofRoom/>
      <Otherinfo/>
       <Footer/>
    </div>
  )
}
