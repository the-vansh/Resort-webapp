import React from 'react'
import Slider from '../Componant/Slider'
import Moredetail from '../Componant/Moredetail';
import Footer from '../Componant/Footer';
export default function Familystay() {
  const Image = [
    "https://media.istockphoto.com/id/508918346/photo/happy-family-in-bed.jpg?s=612x612&w=0&k=20&c=QTq-L4HOLNYgtz24cxxzikBDIQ6QnO56oUhz8faAkuM=",
    "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//itemimages/20/08/20080750_v1.jpeg",
    "https://media-cdn.tripadvisor.com/media/photo-s/1b/fd/f9/ba/aye-stay.jpg",
    "https://www.glenroyal.ie/image/fit/1000x800/cms/glenroyal/images/new/bedroom162-1_small.jpg",
  ];
  const other={
    "heading":"Family Stay Room",
    "image":"https://www.glenroyal.ie/image/fit/1000x800/cms/glenroyal/images/new/bedroom162-1_small.jpg",
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
