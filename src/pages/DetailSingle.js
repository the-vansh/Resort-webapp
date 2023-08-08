import React from 'react'
import Slider from '../Componant/Slider'
import Moredetail from '../Componant/Moredetail';
import Footer from '../Componant/Footer';
export default function DetailSingle() {
  const Image = [
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    "https://m.media-amazon.com/images/I/819wnAy4o8L._AC_UF1000,1000_QL80_DpWeblab_.jpg",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBiZWR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Hotel_Room_with_queen_size_bed.jpg/1024px-Hotel_Room_with_queen_size_bed.jpg",
  ];
  const other={
    "heading":"Single Bed Room",
    "image":"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
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
