import React from 'react'
import './Moredetail.css';
export default function Moredetail({other}) {
  return (
    <div>
      <header>
    <h1>{other.heading}</h1>
  </header>
  <div class="containered">
    <div class="about-section">
      <div class="about-image">
        <img src={other.image} alt="About Us Image"/>
      </div>
      <div class="about-content">
        <h2>{other.smallhead}</h2>
        <p>{other.p1first}</p>
        <p>{other.p2second}</p>
        <a className='hire' href="/Contact">Contact Us</a>
      </div>
    </div>
  </div>
    </div>
  )
}
