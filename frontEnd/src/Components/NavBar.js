import React from "react"
import "../styles/NavBar.css"
import {NavLink} from "react-router-dom";



class NavBar extends React.Component{
    render(){
        return(
        <header className="header">
            <div ><NavLink to="/" className="brand">PTM</NavLink></div>
            <nav>
                <ul>
                    <li><NavLink to="/UsersList" className="navBarLinks" activeClassName="activeClassLinks">Users List</NavLink></li>
                    <li><NavLink to="/Todos" className="navBarLinks" activeClassName="activeClassLinks">Todo Lists</NavLink></li>
                    <li><NavLink to="/Posts" className="navBarLinks" activeClassName="activeClassLinks">Posts</NavLink></li>
                    <li><NavLink to="/Albums" className="navBarLinks" activeClassName="activeClassLinks">Albums</NavLink></li>
                </ul>
            </nav>
            <div className="auth"><a href="https://www.youtube.com/watch?v=UXiAyIZjk7c" target="_blank" rel="noreferrer">Logout</a></div>
        </header>
        )
        
    }

}

export default NavBar;