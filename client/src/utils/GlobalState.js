import React, { createContext, useContext } from "react";
// import { useProductReducer } from './reducers'
import { useProjectReducer } from './reducers'

const ProjectContext = createContext();
const { Provider } = ProjectContext;

const ProjectProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProjectReducer ({
    // To Do: Need to Review with team
    projects: [],
    tasks: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useProjectContext = () => {
  return useContext(ProjectContext);
};

export { ProjectProvider, useProjectContext };
