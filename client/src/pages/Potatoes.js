import React from "react";
import Auth from "../utils/auth";
import Lottie from "lottie-react";
import ufo from "../lottie/ufo.json";
import "../stylesheets/potatoes.css";

export default function Potatoes() {
    // If you are logged in Page Doesn't Exist
    if (Auth.loggedIn()) {
        return (
            <div class="container text-center p-4">
                <h1 className="mt-5">Oh potatoes. That page doesn't exist!</h1>

                <div class="d-grid gap-2 col-6 mx-auto">
                    <a href="/" class="btn btn-primary" type="button">Return to Home Page</a>
                </div>
                <Lottie className='resize' animationData={ufo} loop={true} />
            </div>
        )
        // If you are NOT logged in, please log in.
    } else {
        return (
            <div class="container text-center p-4">
                <h1 className="mt-5">Oh no you're not logged in. Please log in!</h1>

                <div class="d-grid gap-2 col-6 mx-auto">
                    <a href="/" class="btn btn-primary" type="button">Return to Home Page</a>
                </div>
                <Lottie className='resize' animationData={ufo} loop={true} />
            </div>
        )
    }
}