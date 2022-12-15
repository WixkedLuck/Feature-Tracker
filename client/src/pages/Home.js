import React from "react";


import "../stylesheets/Home.css"
import Lottie from "lottie-react";
import cat from "../lottie/cat.json";
export default function Home() {


  return (

    <section className="home App" id="homepage">
      <Lottie className='sized' animationData={cat} loop={true} />
      <h1 className='Title'>SmolBytes </h1>
      
      <div class="container mt-2 centerDiv">
        <h2 className="subtitle">About us:</h2>
        <p className="important">Have you ever bitten off more than you could chew? We’re here to help!</p>
        <p className="card-body"> Our tool helps you break your project into manageable pieces for you and your teams to work on.

          Create multiple projects, each with a customizable team and a unique list of tasks. Tasks have different priority levels(high, medium, and low) and can be marked completed as you and your team progress.
        </p>
        <h3 className="padding2x">Don't be that one person on a team:</h3>
        <p>"It's not a bug, it's a feature!"</p>
        <p className="mt-5"> Get started today! plus it's free</p>
        <a href="/login"><button type="button" className="btn btn-primary btn-lg padding" >Login</button></a>
      </div>


    </section>
  )

}