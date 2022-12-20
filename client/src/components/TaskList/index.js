import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PROJECT_TASKS } from '../../utils/queries';

import { FaTrashAlt, FaHistory } from "react-icons/fa";

import { useParams } from "react-router-dom";
import { CREATE_TASK, DELETE_TASK } from '../../utils/mutations';

export default function TaskList({ id }) {
    const projectId = useParams();
    const [deleteTask, { taskData }] = useMutation(DELETE_TASK)

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
                <td><button type="button" className="btn btn-submit btn-pd" data-bs-toggle="modal" data-bs-target="#updateTaskModal"><FaHistory /></button></td>
                <td><form onSubmit={e => {
                // e.preventDefault(); can add this if we dont want the page to rerender (we would need to figure out how to just update the task list)
                deleteTask({ variables: { id: task._id }})
                }} value={task._id}>
                    <button id={task._id} value={task._id} type="submit" className="btn btn-primary btn-pd"><FaTrashAlt value={task._id}/></button></form></td>
            






            
            
            
            </tr>

                    

        ))
    );
}