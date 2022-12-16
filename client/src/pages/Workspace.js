// Landing Page
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import ProjectList from "../components/ProjectList/index"
import "../stylesheets/Workspace.css";
import Lottie from "lottie-react";
import hacker from "../lottie/happy-hacker.json"
import { useProjectContext } from '../utils/GlobalState';
import { UPDATE_ALLUSERS } from '../utils/actions';
import { QUERY_ALLUSERS } from '../utils/queries';





function Workspace() {
  const [state, dispatch] = useProjectContext();
  const { users } = state;
  const { loading, data } = useQuery(QUERY_ALLUSERS);
  console.log(users);

  useEffect(() => {
    console.log(data);
    if (data) {
      console.log(data);
      dispatch({
        type: UPDATE_ALLUSERS,
        payload: data.users[0]
      });

    }
  }, [data, loading, dispatch]);

  return (
    <div >
      <div className="container mt-5 header">
        <h1 className='h1x'>Workspaces</h1>
        <Lottie className='sized' animationData={hacker} loop={true} />
      </div>
      <h2 className='h2x mt-5'>Your tracked Projects:</h2>
      {/* mock up of folders getting generated here  */}
      <div className="container text-center">
        <div className="row row-cols-2 mt-5">
          {/* place itema here  */}
          <ProjectList />

        </div>
      </div>
      {/* add project section  */}
      <div className="container mt-5 header mb-5">
        <h1 className='h1x'>Create a new Project: </h1>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          +
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 ftcolor" id="exampleModalLabel">Create new Project:</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="survey-form" className='formcolor'>

                  <label htmlFor="name" id="name-label">Project Name:</label>
                  <input type="text" id="name" required placeholder="Project: 1"></input>

                  <label htmlFor="description" id="name-label">Project description:</label>
                  <input type="text" id="description" required placeholder="Lorem Ipsum"></input>
                  <p>Add teammates: OPTIONAL </p>
                  {/* NEED TO LOOP OVER ALL USERS IN DATABASE  */}
                  {console.log(users)}
                  {/* {!!users.length && users.map((item) => (
                  <div>
                    <input type="checkbox" id="front-end" value="Front-end Users"></input>
                    <label for="front-end">{item.firstName}</label>
                  </div>
                  ))} */}

                  <button type="submit" id="submit">Submit</button>

                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

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