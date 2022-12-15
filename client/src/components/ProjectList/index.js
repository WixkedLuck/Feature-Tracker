
//import use effect which does the following: allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.
import React, { useEffect } from 'react';
//import our apollo query (database)
import { useQuery } from '@apollo/client';
//import global state changes to affect all pages. data mayshow up on these pages and change as needed
import { useProjectContext } from '../../utils/GlobalState';
//import action: you can think of an action as an event that describes something that happened in the application.
import { SET_PROJECT} from '../../utils/actions';
//import the query that we need for this section aka specific data needed from the database:
import { QUERY_WORKSPACE } from '../../utils/queries';

import { Link } from "react-router-dom";
function ProjectList() {
    const [state, dispatch] = useProjectContext();
    const { projects } = state;
 

    const { loading, data } = useQuery(QUERY_WORKSPACE);

    useEffect(() => {
        if (data) {
            console.log(data);
            dispatch({
                type: SET_PROJECT,
                payload: data.workspace[0].projects
                    
                
               
             

            });

        } 
    }, [data, loading, dispatch]);

    return (

        !!projects.length && projects.map((item) => (
            <div class="col">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <Link to={`/project/${item._id}`}><button type="button" class="btn btn-primary">Open Project</button> </Link>
            </div>
        ))
    );
}

export default ProjectList;
