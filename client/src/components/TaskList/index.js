import React, { useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PROJECT_TASKS } from '../../utils/queries';
import { DELETE_TASK } from '../../utils/mutations';
import { FaTrashAlt, FaHistory } from "react-icons/fa";

import { useParams } from "react-router-dom";


export default function TaskList({ id }) {
    const projectId = useParams();
    
    const { data } = useQuery(QUERY_PROJECT_TASKS, {
        variables: { id: projectId.id },


    });
    

      

    return (
        !!data?.project?.tasks.length && data?.project?.tasks.map((task)  => (
           
            <tr>
                <td>{task.description}</td>
                <td>{task.priority}</td>
                <td>{task.status.toString()}</td>
                {/* add task modal button */}
                
                <td><button type="button" className="btn btn-submit" data-bs-toggle="modal" data-bs-target="#updateTaskModal"><FaHistory /></button></td>
                <td key={task._id}><button className="btn btn-primary btn-pd" ><FaTrashAlt /></button></td>
                {console.log(task._id)}
            </tr>
        ))
    );
}