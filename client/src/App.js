import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Task from './pages/Task';
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



function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Nav />
        <Router>
          {/* this is our global helper below */}
          {/* <ProjectProvider> */}
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path="/project/:id"
              element={<Inproject />}
            />
            <Route
              path="/workspace"
              element={<Workspace />}
            />
            <Route
              path="/Contact"
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
          {/* </ProjectProvider> */}
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
