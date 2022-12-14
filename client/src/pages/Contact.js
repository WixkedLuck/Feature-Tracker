// import React from 'react';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'
import "../stylesheets/Contact.css"
export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_40eof1d', 'template_oryn39p', form.current, '8Squa9oHHvp4K3_NG')
      .then((result) => {
          console.log(result.text);
          console.log("message sent! :D")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


    return(

      
      <div>
       
      <form className='contact-us' ref={form} onSubmit={sendEmail}>
      <h1> Contact Us:</h1>
      <label className='font'>Name</label>
      <input type="text" placeholder='John Doe' name="user_name" /> <br></br>
      <label className='font'>Email</label>
      <input type="email" placeholder='YourEmail@gmail.com' name="user_email" /><br></br>
      <label className='font' >Message</label>
      <textarea name="message" placeholder='Awesome Site! I Love SmolByte!' /><br></br>
      <input className='Btn'  type="submit" value="Send" />
    </form>
    </div>
    );
}
//Contact Page

//Updated info.