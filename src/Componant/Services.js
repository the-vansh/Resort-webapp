import React from 'react'
import Title from './Title';
import './Servic.css';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default function Services() {
    const services = [
        {
          icon: <FaCocktail />,
          title: "Free Cocktails",
          info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, provident.",
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, provident.",
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttle",
          info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, provident.",
        },
        {
          icon: <FaBeer />,
          title: "Strongest Beer",
          info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, provident.",
        },
      ];
  return (
    <div>
       <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
    </div>
  )
}
