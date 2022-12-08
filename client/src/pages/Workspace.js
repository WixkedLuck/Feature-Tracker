// Landing Page
import React from 'react';

import "../stylesheets/Workspace.css";
import people from '../images/people.svg';

function Workspace() {
  return (
    <div >
      <div class="container mt-5 header">
        <h1 className='h1x'>Workspaces</h1>
        <img className='sized' alt='working-people' src={people}></img>
      </div>
      <h2 className='h2x mt-5'>Your tracked Projects:</h2>
      
    </div>


  )
  // hi


}

export default Workspace;