import React, {useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_id', 'template_id', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
         alert("Sorry for in conveniance please try to send Email form your gmail app to the mail id given below")
          console.log(error.text);
          
      });
      

  };

  return (
    <div className='maindivcon'>
    <form class="form" ref={form} onSubmit={sendEmail}>
      <h2>CONTACT US</h2>
      <p type="text"><input name="user_name"  placeholder="Write your name here.."></input></p>
      <p type="email"><input name="user_email"   placeholder="Let us know how to contact you back.."></input></p>
      <p type="Message:"><input name="message"  placeholder="What would you like to tell us.."></input></p>
      <button type='submit'>Send Message</button>
      <div className='elsecont'>
        <span class="fa fa-phone"><a href="tel:+919997718442">9997718442</a></span>
        <span class="fa fa-envelope-o"><a href="mailto:paradisevistaresort@gmail.com">paradisevistaresort@gmail.com</a></span>
      </div>
    </form>
    </div>
  );
};
export default ContactUs;