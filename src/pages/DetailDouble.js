import React from 'react'
import Slider from '../Componant/Slider'
import Moredetail from '../Componant/Moredetail';
import Footer from '../Componant/Footer';
export default function DetailDouble() {
  const Image = [
    "https://media-cdn.tripadvisor.com/media/photo-s/0e/ee/46/c4/ex-double-bed-room.jpg",
    "https://www.ajmanproperties.ae/assets/easyimage/4/4e37bff847615d5794d975c97ec8f517.jpg",
    "https://bluerabbit-hotel.com/wp-content/uploads/2016/10/TL7_5015.jpg",
    "https://m.media-amazon.com/images/I/81uKbU2zx-L.jpg",
  ];
  const other={
    "heading":"Double Bed Room",
    "image":"https://bluerabbit-hotel.com/wp-content/uploads/2016/10/TL7_5015.jpg",
    "smallhead":"Welcome to our resort",
    "p1first":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultricies lectus. Fusce eget lorem nec urna vestibulum pulvinar. Etiam interdum vel lorem in tristique.",
    "p2second":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ultricies lectus. Fusce eget lorem nec urna vestibulum pulvinar. Etiam interdum vel lorem in tristique."
  };
  return (
    <div>
        <Slider Image={Image}/>
        <Moredetail other={other}/>
        <Footer/>
    </div>
  )
}
