import React from "react"
import "../styles/NavBar.css"
import {Link} from "react-router-dom";



class NavBar extends React.Component{
    render(){
        return(
        <header className="header">
            <div className="brand">PTM</div>
            <nav>
                <ul>
                    <li><Link to="/">Users List</Link></li>
                    <li><Link to="/Todos">Todo Lists</Link></li>
                    <li><Link to="/Posts">Posts</Link></li>
                    <li><Link to="/Albums">Albums</Link></li>
                </ul>
            </nav>
            <div className="auth"><a href="https://www.youtube.com/watch?v=UXiAyIZjk7c" target="_blank" rel="noreferrer">Logout</a></div>
        </header>
        )
        
    }

}

export default NavBar;