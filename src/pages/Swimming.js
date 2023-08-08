import React from 'react'
import Slider from '../Componant/Slider'
import Moredetail from '../Componant/Moredetail';
import Footer from '../Componant/Footer';
export default function Swimming() {
  const Image = [
    "https://media.gettyimages.com/id/1153089889/vector/pool-party-invitation-vector-illustration-with-water-swimming-pool-vector-background.jpg?s=612x612&w=gi&k=20&c=2DO17vDkm3uGSqbJDpVP4oGdlLvCyvcRQJ4XzSQq0x0=",
    "https://media.istockphoto.com/id/1174882601/photo/enjoying-pool-party-with-friends.jpg?s=612x612&w=0&k=20&c=_HSjmaVpaaRUD8pDKS0BF2hMnWewcp9QKVvEi4W8hxc=",
    "https://www.thespruce.com/thmb/c-6AY-OESKKDbdojqDsXnKXpcpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swimming-pool-designs-4159530-hero-2-9952c017a0124ec4846612836903ad2c.jpg",
    "https://www.swimmingpool.com/images/products/pools&spas/lighting/lighting-lighting-lockman.jpg",
  ];
  const other={
    "heading":"Swimming Pools",
    "image":"https://www.thespruce.com/thmb/c-6AY-OESKKDbdojqDsXnKXpcpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swimming-pool-designs-4159530-hero-2-9952c017a0124ec4846612836903ad2c.jpg",
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
