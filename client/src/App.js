import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import Contact from './pages/Contact';
import Inproject from './pages/Inproject';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Workspace from './pages/Workspace';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Potatoes from './pages/Potatoes';
import {ProjectProvider} from './utils/GlobalState'

import auth from './utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const autth=auth.loggedIn();

function App() {
  return (
    <ApolloProvider client={client}>
      
      <div className="App">
        
        <Router>
        <Nav />
          {/* this is our global helper below */}
          <ProjectProvider>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
             { autth &&
            <Route
              path="/project/:id"
              element={<Inproject />}
            /> } 
            
           { autth &&
            <Route
              path="/workspace"
              element={<Workspace />}
            /> 
             } 
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/Signup"
              element={<Signup />}
            />

            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path='*'
              element={<Potatoes />}
            />
          </Routes>
          {/* bring this backin when we fix globalState */}
          </ProjectProvider>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
