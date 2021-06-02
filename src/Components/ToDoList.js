import axios from 'axios';
import React, { Component } from 'react'
import "../styles/TodoLists.css"


export default class TodoLists extends Component {
    constructor(props){
        super(props);
        // this.myRef = createRef();
        this.state={
            todos: [],
            input: "",
            editClick: false,
            updateInputValue: "",
            oneClickEdit : false
        }
    }

    componentDidMount(){
        this.todosFetch();
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
        
        fetch('https://jsonplaceholder.typicode.com/todos/' + e.target.parentElement.parentElement.id, data)
        .then(response => response.json())
        .then(jsonResponse => console.log(jsonResponse))
        e.target.parentElement.parentElement.remove();

    }

    completeItem =(e)=>{
        // if condition is written in the inline CSS!!

        axios.put("https://jsonplaceholder.typicode.com/todos/" + e.target.parentElement.id, {completed: e.target.checked})
        .then(res => console.log(res.data))
        
        e.target.parentElement.querySelector(".todoItems").style.textDecoration = e.target.checked ? 'line-through' : 'none';

        
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleAddInput = (e) => {

        if(this.state.input){
            axios.post("https://jsonplaceholder.typicode.com/todos", {title: this.state.input})
            .then(response => {
                console.log(response.data)
                this.setState({
                    todos: [...this.state.todos, response.data],
                    input: ""
                });
                e.target.previousElementSibling.style.display = "none";
                e.target.nextElementSibling.style.display = "inline-block";
                setTimeout(()=>{
                    e.target.nextElementSibling.style.display = "none";
                },2000)
        })
        } else {
            e.target.previousElementSibling.style.display = "inline-block"
        }
        
    }

    editTodos = (e) => {
        // console.log(this.state)
        // this.myRef.current.focus()

        if(!this.state.oneClickEdit){
            e.target.parentElement.parentElement.children[1].readOnly = false
            e.target.parentElement.parentElement.children[1].classList.add("highlightInputs");


            this.setState({editClick: true, oneClickEdit: !this.state.oneClickEdit});
            e.target.parentElement.classList.add("hideClassName")
            e.target.parentElement.parentElement.children[3].classList.add("showClassName")
        }
        
        
    }

    cancelChanges = (e)=> {

        //console.log(e.target.parentElement.previousElementSibling.previousElementSibling)

        if(this.state.updateInputValue !== ""){
            e.target.parentElement.previousElementSibling.previousElementSibling.value = this.state.todos[e.target.parentElement.parentElement.id-1].title;
        }
        

        e.target.parentElement.parentElement.children[1].readOnly = true;
        e.target.parentElement.parentElement.children[3].classList.remove("showClassName");
        e.target.parentElement.parentElement.children[2].classList.remove("hideClassName");
        e.target.parentElement.parentElement.children[1].classList.remove("highlightInputs");
        //console.log(e.target.parentElement.parentElement.children[2])

        this.setState({oneClickEdit: !this.state.oneClickEdit})


    }
    saveChanges = (e) => {

        

        if(this.state.updateInputValue !== ""){
            axios.put("https://jsonplaceholder.typicode.com/todos/" + e.target.parentElement.parentElement.id, { title: this.state.updateInputValue})
            .then( res => console.log(res.data) )
            .then(()=>{
                this.setState({...this.state, todos: this.state.todos.filter(item => {
                    return item.id == e.target.parentElement.parentElement.id ? item.title = this.state.updateInputValue : item
                })});
                this.setState({updateInputValue: "", oneClickEdit: !this.state.oneClickEdit});
            })
        }
        
        e.target.parentElement.parentElement.children[1].readOnly = true;
        e.target.parentElement.parentElement.children[1].classList.remove("highlightInputs");
        e.target.parentElement.parentElement.children[3].classList.remove("showClassName");
        e.target.parentElement.parentElement.children[2].classList.remove("hideClassName")
    }


    handleUpdate = (e) => {

        this.setState({
            updateInputValue: e.target.value
        })
    }

    render() {
        // console.log(this.state.todos)
        return (
            <div id="mainDiv">
                <label style={{fontSize: "25px", fontWeight:"bold"}}>To Do List</label>
                <br/>
                <input name="input" id="todo_input" value={this.state.input} onChange={this.handleChange} placeholder="Enter your item!"></input>
                <span id="usernameRequire" className="requires">*required</span>
                <button id="addButton" onClick={this.handleAddInput}>ADD</button>
                <span id="userSuccesful">Succesfully added!</span>
                <ul>
                {this.state.todos.map((item)=>{
                    return(
                        
                        <li key={item.id} id={item.id} className="todosList">
                            <input type="checkbox" onClick={this.completeItem}/>
                            <input type="text" defaultValue={item.title} className="todoItems" readOnly={true} onChange={this.handleUpdate} style={{textDecoration: item.checked ? "line-through" : "none"}}/> 
                            {/* <span id="deleteSpan" onClick={this.removeItem}>Delete</span> */}
                            <span>
                                <i className="fas fa-pen editIcons" onClick={this.editTodos}></i>
                                <i className="fas fa-trash trashIcons" id="deleteSpan" onClick={this.removeItem}></i>
                            </span>
                            
                            <span className="iconsToEdit">
                                <i className="far fa-check-circle checkIcons" onClick={this.saveChanges}></i>
                                <i className="fas fa-times-circle cancelIcons" onClick={this.cancelChanges}></i>
                            </span>

                            
                            
                        </li>
                    ) 
                })}
                </ul>
                
            </div>
        )
    }
}
