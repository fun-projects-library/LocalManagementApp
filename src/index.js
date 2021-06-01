import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from "./Components/NavBar"
import UsersList from "./Components/UsersList";
import ToDoList from './Components/ToDoList';
import Posts from "./Components/Posts";
import Albums from "./Components/Albums";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <NavBar />
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/posts"><Posts /></Route>
        <Route path="/todos"><ToDoList /></Route>
        <Route path="/albums"><Albums /></Route>
        <Route path="/"><UsersList /></Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
