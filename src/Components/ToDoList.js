import axios from 'axios';
import React, { Component } from 'react'
import "../styles/TodoLists.css"


export default class TodoLists extends Component {
    constructor(props){
        super(props);
        this.state={
            todos: [],
            input: ""
        }
    }

    componentDidMount(){
        this.todosFetch()
    }

    todosFetch(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            this.setState({
                todos: json
            })
    })
    }

    removeItem = (e) => {
        const data = {
            method: 'DELETE',
        }
        
        fetch('http://127.0.0.1:8080/api/todoitems/' + e.target.parentElement.id, data);
        e.target.parentElement.remove();

    }

    completeItem =(e)=>{
        console.log(e.target.parentElement.id);
        
        e.target.parentElement.querySelector(".todoItems").style.textDecoration = e.target.checked ? 'line-through' : 'none';
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleAddInput = () => {
        axios.post("https://jsonplaceholder.typicode.com/todos", {title: this.state.input})
        .then(response => {
            this.setState({
                todos: [...this.state.todos, response.data],
                input: ""
            })
        })
    }

    render() {
        //console.log(this.state.todos)
        return (
            <div id="mainDiv">
                <label style={{fontSize: "25px", fontWeight:"bold"}}>To Do List</label>
                <br/>
                <input name="input" id="todo_input" value={this.state.input} onChange={this.handleChange} placeholder="Enter your item!"></input>
                <button id="addButton" onClick={this.handleAddInput}>ADD</button>
                <ul>
                {this.state.todos.map((item)=>{
                    return(
                        
                        <li key={item.id} id={item.id} className="todosList">
                            <input type="checkbox" onClick={this.completeItem}/>
                            <input type="text" defaultValue={item.title} className="todoItems"/> 
                            <span id="deleteSpan" onClick={this.removeItem}>Delete</span>
                        </li>
                    ) 
                })}
                </ul>
                
            </div>
        )
    }
}
