// Landing Page
import React from 'react';

import "../stylesheets/Workspace.css";
import Lottie from "lottie-react";
import hacker from "../lottie/happy-hacker.json"

function Workspace() {
  return (
    <div >
      <div class="container mt-5 header">
        <h1 className='h1x'>Workspaces</h1>
        <Lottie className='sized' animationData={hacker} loop={true} />
      </div>
      <h2 className='h2x mt-5'>Your tracked Projects:</h2>
      {/* mock up of folders getting generated here  */}
      <div class="container text-center">
  <div class="row row-cols-2 mt-5">
    <div class="col">
      <h3>Project title</h3>
      <p>Lorem</p>
    <button type="button" class="btn btn-primary">Link to folder #1</button>
    </div>
    <div class="col">
    <h3>Project title</h3>
      <p>Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</p>
    <button type="button" class="btn btn-primary">Link to folder #2</button>
    </div>
    <div class="col">
    <h3>Project title</h3>
      <p>Lorem</p>
    <button type="button" class="btn btn-primary">Link to folder...</button>
    </div>
    <div class="col">
    <h3>Project title</h3>
      <p>Lorem</p>
    <button type="button" class="btn btn-primary">Continued...</button>
    </div>
  </div>
</div>
{/* add project section  */}
<div class="container mt-5 header mb-5">
        <h1 className='h1x'>Create a new Project: </h1>
        {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  +
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 ftcolor" id="exampleModalLabel">Create new Project:</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form id="survey-form" className='formcolor'>
     
        <label for="name" id="name-label">Project Name:</label>
        <input type="text" id="name" required placeholder="Project: 1"></input> 

        <label for="description" id="name-label">Project description:</label>
        <input type="text" id="description" required placeholder="Lorem Ipsum"></input> 
        <p>Add teammates:</p>
        <input type="checkbox" id="front-end" value="Front-end Projects"></input>
        <label for="front-end">Molly</label>
        <input type="checkbox" id="back-end" value="Back-end"></input>
        <label for="Back-end">David</label><br></br>

        <button type="submit" id="submit">Submit</button>
      
    </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

</div>
      </div>

   


  )
  // hi


}

export default Workspace;