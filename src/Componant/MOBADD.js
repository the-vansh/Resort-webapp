import React from 'react'
import './Servic.css';
import Title from './Title';
import {MdEmail} from "@react-icons/all-files/md/MdEmail";
import {MdLocationOn} from "@react-icons/all-files/md/MdLocationOn";
import {MdCall} from "@react-icons/all-files/md/MdCall";


export default function MOBADD() {
  const connect = [
    {
      icon: <MdLocationOn/>,
      title: "Address",
      info: "Badrinath highway Shivpuri kthya (T.G.) Uttarakhand...",
    },
    {
      icon: <MdCall/>,
      title: "For Call",
      number: "+919997718442",
    },
    {
      icon: <MdEmail />,
      title: "Email",
      email: "paradisevistaresort@gmail.com",
    },
  ];
  return (
<div>
       <section className="services"style={{marginTop:"30px"}}>
      <Title title="Connect With Us" />
      <div className="services-center">
        {connect.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p><a href="tel:+919997718442" style={{color:"black"}}>{item.number}</a></p>
              <address> <a href="mailto:paradisevistaresort@gmail.com"  style={{color:"black"}}>{item.email}</a></address>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
    </div>
  )
}
