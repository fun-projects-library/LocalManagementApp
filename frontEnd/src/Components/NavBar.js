import React from "react"
import "../styles/NavBar.css"
import {NavLink, Redirect} from "react-router-dom";



class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password: "",
            loggedIn: false
        }

    }

    handleChange = (e) => {
        this.setState({password: e.target.value})
    }

    passwordCheck = (e) => {
        if(this.state.password === "ptm"){
            this.setState({password: "", loggedIn: true})
        } else {
            this.setState({password: "", loggedIn: false})
        }
    }


    render(){
        return(
        <header className="header">
            <div ><NavLink to="/" className="brand">PTM</NavLink></div>
            <nav>
                {this.state.loggedIn ? 
                <ul className="navBarUL">
                    <li><NavLink to="/UsersList" className="navBarLinks" activeClassName="activeClassLinks">Users List</NavLink></li>
                    <li><NavLink to="/Todos" className="navBarLinks" activeClassName="activeClassLinks">Todo Lists</NavLink></li>
                    <li><NavLink to="/Posts" className="navBarLinks" activeClassName="activeClassLinks">Posts</NavLink></li>
                    <li><NavLink to="/Albums" className="navBarLinks" activeClassName="activeClassLinks">Albums</NavLink></li>
                </ul> : <Redirect to="/" />}
            </nav>
            <div className="auth">
                {!this.state.loggedIn ? <input placeholder="password: ptm" id="passwordInput" onChange={this.handleChange} value={this.state.password} onKeyUp={(e)=> {return e.key === "Enter" ? this.passwordCheck() : ""}}/> : ""}
                
                <span id="loginSpan" onClick={this.passwordCheck}>{this.state.loggedIn ? "Logout" : "Login"}</span>
            </div>
        </header>
        )
        
    }

}

export default NavBar;