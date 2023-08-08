import React from 'react'
import Slider from '../Componant/Slider'
import Moredetail from '../Componant/Moredetail';
import Footer from '../Componant/Footer';
export default function Mountain() {
  const Image = [
    "https://media-cdn.tripadvisor.com/media/photo-s/0b/4c/5b/7b/mountain-view-from-our.jpg",
    "https://thumbs.dreamstime.com/b/view-colorful-sky-rishikesh-mountains-sunset-sunset-landscape-mountain-rishikesh-168105448.jpg",
    "https://q-xx.bstatic.com/xdata/images/hotel/max500/238750155.jpg?k=4f46df8e6a1211ba1cdee6c12a2cc9d8f7ac4fc56bb412a08d53067ad8882f30&o=",
    "https://www.guptasen.com/wp-content/uploads/2021/08/brilliant-mountain-view-from-apartment-rishikesh.jpg",
  ];
  const other={
    "heading":"Mountain veiw",
    "image":"https://thumbs.dreamstime.com/b/view-colorful-sky-rishikesh-mountains-sunset-sunset-landscape-mountain-rishikesh-168105448.jpg",
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
