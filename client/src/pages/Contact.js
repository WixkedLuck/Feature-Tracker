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
       
      <form className='contact-us p-0 pt-4' ref={form} onSubmit={sendEmail}>
      <h1 className='m-5'>Contact Us</h1>
      <input type="text" required placeholder='Name' name="user_name" /> <br></br>
      <input type="email" required placeholder='Email' name="user_email" /><br></br>
      <label className='font m-1' >Message</label>
      <textarea className='m-0 contact-text' name="message" required placeholder='Awesome Site! I Love SmolByte!' /><br></br>
      <input className="btn btn-primary m-5"  type="submit" value="Send" />
    </form>
    </div>
    );
}
//Contact Page

//Updated info.