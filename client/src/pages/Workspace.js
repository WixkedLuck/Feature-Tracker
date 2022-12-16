// Landing Page
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import ProjectList from "../components/ProjectList/index"
import "../stylesheets/Workspace.css";
import Lottie from "lottie-react";
import hacker from "../lottie/happy-hacker.json"
import { useProjectContext } from '../utils/GlobalState';
import { QUERY_ALLUSERS, USER_WORKSPACE } from '../utils/queries';
import { CREATE_PROJECT } from '../utils/mutations';

function Workspace() {
  // renaming data var to project
  const [createProject, {data: project}] = useMutation(CREATE_PROJECT, {
    // when create project runs, UserWorkspace re-runs & gets the new project created
    refetchQueries: [USER_WORKSPACE]
  })
  const { loading, data } = useQuery(QUERY_ALLUSERS);
  const { data: self } = useQuery(USER_WORKSPACE);
  // data = users, users is an object underneath the query in queries.js files
  const users = data?.users || []

  const user = self?.user || {}

  console.log(users);

  const [team, setTeam] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  function onSubmit (e) {
    e.preventDefault();
    createProject({
      variables: {
        // must be users b/c of typedefs & mutations
        name, description, users: team 
      }
    })
  }

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
                  <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required placeholder="Project: 1"></input>

                  <label htmlFor="description" id="name-label">Project description:</label>
                  <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} required placeholder="Lorem Ipsum"></input>
                  <p>Add teammates: OPTIONAL </p>
                  {/* NEED TO LOOP OVER ALL USERS IN DATABASE  */}
                  {console.log(users)}
                  {!!users.length && users.filter(u => u._id != user._id).map((item) => (
                  <div>
                    <input type="checkbox" onChange={e => { 
                      if (e.target.checked) {
                        // item represent user
                        // taking current state & creating new array, take current array & add new id
                        setTeam(team => [...team, item._id])
                        // might have to consider checking the array, to see if the id exist inside the array already (don't want to duplicate a user)
                      } else {
                        // filter creates new array
                        // return everybody who is not of the id checked
                        setTeam(team => team.filter(t => t != item._id))
                      }
                     }}   id="front-end" value="Front-end Users"></input>
                    <label for="front-end">{item.firstName}</label>
                  </div>
                  ))}

                  <button type="submit" id="submit" onClick={onSubmit}>Submit</button>
                     {/* Need to close modal & re-run workspace quiery form porject_list.js */}
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