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
import EditPost from "./Components/EditPost"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <NavBar />
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/Posts"><Posts /></Route>
        <Route exact path="/Todos"><ToDoList /></Route>
        <Route exact path="/Albums"><Albums /></Route>
        <Route path="/Posts/:id"><EditPost/></Route>
        <Route exact path="/"><UsersList /></Route>
        {/* <Route render={()=>{
          return <h1 style={{margin: "3%"}}>Error Page</h1>
        }}/> */}
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
