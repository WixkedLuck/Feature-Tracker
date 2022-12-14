import React from "react";
import Lottie from "lottie-react";
import ufo from "../lottie/ufo.json";
import "../stylesheets/potatoes.css"
export default function Potatoes() {
    return (
        <div class="container text-center p-4">
            <h1 className="mt-5">Oh potatoes. That page doesn't exist!</h1>
          
            <div class="d-grid gap-2 col-6 mx-auto">
                <a href="/" class="btn btn-primary" type="button">Return to Home Page</a>
            </div>
            <Lottie className='resize' animationData={ufo} loop={true} />
        </div>
    )
}