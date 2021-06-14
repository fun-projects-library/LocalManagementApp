import React, { Component } from 'react'
import axios from "axios";
import '../styles/Form.css';

export default class Form extends Component {
    state = {
        name: "",
        username: "",
        email: "",
        phone: "",
    }

    handleChange = (e) => {
        //console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {

        // console.log(e.target.parentElement.children[10])

        
        if(this.state.name === ""){
            e.target.parentElement.children[1].style.display = "inline-block"
        } else if(this.state.username === "") {
            e.target.parentElement.children[3].style.display = "inline-block";
        } else if(this.state.email === ""){
            e.target.parentElement.children[5].style.display = "inline-block"
        } else if(this.state.phone === ""){
            e.target.parentElement.children[7].style.display = "inline-block"
        } else {
            axios.post("http://localhost:8080/api/usersList", this.state)
            .then(resp=>{
            console.log(resp.data);
            this.props.addUser(resp.data);
            this.setState({name: "", username:"", email: "", phone:""});
            e.target.parentElement.children[1].style.display = "none";
            e.target.parentElement.children[3].style.display = "none"
            e.target.parentElement.children[5].style.display = "none"
            e.target.parentElement.children[7].style.display = "none";
            e.target.parentElement.children[10].style.display = "inline-block"
            setTimeout(()=>{
                e.target.parentElement.children[10].style.display = "none"
            },2000)
            
        })
        }
        
        
    }
    
    render() {
        // console.log(this.state)
        return (
            <div>
                <form>
                    <input onChange={this.handleChange} name="name" placeholder="name" className="addInputs" value={this.state.name}></input> <span id="nameRequire" className="requires">*required</span>

                    <input onChange={this.handleChange} name="username" placeholder="username" className="addInputs" value={this.state.username}></input > <span id="usernameRequire" className="requires">*required</span>

                    <input onChange={this.handleChange} name="email" placeholder="email" className="addInputs" value={this.state.email}></input> <span id="emailRequire" className="requires">*required</span>

                    <input onChange={this.handleChange} name="phone" placeholder="phone" className="addInputs" value={this.state.phone}></input> <span id="phoneRequire" className="requires">*required</span>

                    <button onClick={this.props.handleClick} className="addButtons">-</button>
                    <button onClick={this.handleSubmit} type="button" className="addButtons">+</button>
                    <span id="userSuccesful">Succesfully added!</span>
                </form>
            </div>
        )
    }
}
