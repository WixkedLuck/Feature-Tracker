// import React from 'react';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'

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

      

      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    );
}
//Contact Page

//Updated info.