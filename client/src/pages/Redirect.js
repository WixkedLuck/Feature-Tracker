import React from "react";

export default function Redirect() {
    return (
        <div class="container text-center p-4">
            <h1>Oh potatoes. That page doesn't exist!</h1>
            <div class="d-grid gap-2 col-6 mx-auto">
                <a href="#" class="btn btn-primary" type="button">Return to Home Page</a>
            </div>
        </div>
    )
}