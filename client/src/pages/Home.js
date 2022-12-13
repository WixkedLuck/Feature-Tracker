import React from "react";

const homeCSS = require('../stylesheets')

export default function Home() {


return (
      
    <section className="home App" id="homepage">
      <h1 className='Title'>SmolBytes App: </h1>

    <div className="card" style={{ width: "18rem", backgroundColor: "rgba(32,33,36, 0.6)", color: "whitesmoke"}}>
     <p className="card-body">SmolBytes is here to help you organize your project management tasks into smoller bytes.  The objective here is to help organize user information and create ease of use in daily life.</p>

     </div>
   
    <img className='photo' title='homepageimage' alt='homepage image' src="#"></img>
    </section>
    ) 
    
    }