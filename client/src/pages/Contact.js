import React from 'react';

export default function Contact() {
    return(
        <section className="about" id="about-me">
         <form id="contact-form">
        <h1 id="title">Contact Me:</h1>
        <label for="name" id="name-label">Name:</label>
        <input type="text" id="name" required placeholder="Enter your name"></input> 
        <label for="email" id="email-label">Email:</label>
        <input type="email" id="email" required placeholder="Enter your email"></input> 
        <p>Please write your message here: </p>
        <textarea id="comments" placeholder='Enter your message'></textarea>
        <button type="submit" id="submit">Submit</button>
       
    </form>
      
   
      </section> 
    );
}
//Contact Page