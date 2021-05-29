import React from 'react';
import Form from "./Form";
import "../styles/UserList.css"
import axios from "axios"


class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.saveChanges = this.saveChanges.bind(this)
    this.cancelChanges = this.cancelChanges.bind(this)
  }
  
  state = {
    users: [],
    clicked: false,
    editClick: false,
    name:"",
    username:"",
    email:"",
    phone:""
    
  }
  
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  
  addUser = (param) => {
    this.setState({
      users: [...this.state.users,param]
    })
  }

  deleteUser = (e) => {
    const data = {
      method: "DELETE"
    };
    
    console.log(this.state);

    fetch("https://jsonplaceholder.typicode.com/users/" + e.target.parentElement.parentElement.id, data)


    e.target.parentElement.parentElement.remove()

  }


  editUser = (e) => {
    

    for(let i = 0; i<4; i++){
      e.target.parentElement.parentElement.children[i].children[0].readOnly = false
    }
    
    this.setState({editClick: true});
    e.target.parentElement.parentElement.classList.add("highlightTDs");
    //e.target.parentElement.parentElement.children[4].classList.add("hiddenTD");
    
    e.target.parentElement.parentElement.children[5].style.display = "table-cell";

    console.log(this.state)
  }

  saveChanges(e){
    this.setState({editClick: false});
    e.target.parentElement.parentElement.classList.remove("highlightTDs");
    for(let i = 0; i<4; i++){
      e.target.parentElement.parentElement.children[i].children[0].readOnly = true
    };
    e.target.parentElement.style.display = "none";
    
    
    let item;
    
    if(this.state.name !== ""){
      item = {name: this.state.name};
      // this.setState({users: [this.state.users.find(item => item.id == e.target.parentElement.parentElement.id).name = this.state.name] });
      this.setState({ name : ""})
      // console.log("wwww")

    } else if(this.state.username !== ""){
      item = {username: this.state.username};
      this.setState({ username : ""})
      // console.log("eeeee")

    } else if(this.state.email !== ""){
      item = {email: this.state.email};
      this.setState({ email : ""})

    } else if(this.state.phone !== ""){
      item = {phone: this.state.phone};
      this.setState({ phone : ""})
    }

    // if(item){
    //     axios.put("https://jsonplaceholder.typicode.com/users/" + e.target.parentElement.parentElement.id, item)
    //     .then(res=>{
    //     console.log(res.data)
    //   }).then(()=>{console.log(this.state)})
      
    // }


    // console.log(item)
    const data = {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: {
        'Content-type': 'application/json'
      }
    }

    if(item.name || item.username || item.email || item.phone){
      fetch("https://jsonplaceholder.typicode.com/users/" + e.target.parentElement.parentElement.id, data)
      .then((res)=> res.json())
      .then(jsonResponse => console.log(jsonResponse));
    }

    console.log(this.state)
  }

  cancelChanges(e){
    

    if(this.state.name !== ""){
      e.target.parentElement.parentElement.children[0].children[0].value = this.state.users[e.target.parentElement.parentElement.id-1].name;
      console.log(this.state.users)
    } else if(this.state.username !== ""){
      e.target.parentElement.parentElement.children[1].children[0].value = this.state.users[e.target.parentElement.parentElement.id-1].username;
    } else if(this.state.email !== ""){
      e.target.parentElement.parentElement.children[2].children[0].value = this.state.users[e.target.parentElement.parentElement.id-1].email;
    } else if(this.state.phone !== ""){
      e.target.parentElement.parentElement.children[3].children[0].value = this.state.users[e.target.parentElement.parentElement.id-1].phone;
    }

    this.setState({name: "", username: "", email: "", phone: ""})
    e.target.parentElement.style.display = "none";
    this.setState({editClick: false});
    e.target.parentElement.parentElement.classList.remove("highlightTDs");
    for(let i = 0; i<4; i++){
      e.target.parentElement.parentElement.children[i].children[0].readOnly = true
    }
    console.log(this.state)
  }

  handleUpdate = (e) => {
    
    this.setState({[e.target.name] : e.target.value});
    
    //console.log(this.state.users[e.target.parentElement.parentElement.id-1][e.target.className])
  }


  render() {
    if(this.state.users.length){
      return (
        <div>
          <h1 id="usersListHeader">All Users List</h1>
          <button onClick={this.handleClick} id="addButton">Add User</button>
          <div id="formComponent">
            {this.state.clicked ? <Form handleClick={this.handleClick} addUser={this.addUser}/> : null}
          </div>

          <table width="100%" id="usersListTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user,index) => {
                return (
                  <tr key={index} id={user.id} className="usersListTR">

                    <td><input type="text" defaultValue={user.name} name="name" onChange={this.handleUpdate} className="name userInfos" readOnly={true}/></td>

                    <td><input type="text" defaultValue={user.username} name="username" onChange={this.handleUpdate} className="username userInfos" readOnly={true}/></td>

                    <td><input type="text" defaultValue={user.email} name="email" onChange={this.handleUpdate} className="email userInfos" readOnly={true}/></td>

                    <td><input type="text" defaultValue={user.phone} name="phone" onChange={this.handleUpdate} className="phone userInfos" readOnly={true}/></td>

                    {!this.state.editClick && 
                    <td><span onClick={this.editUser} style={{color: "blue"}} className="editButtons">edit</span> / <span onClick={this.deleteUser} style={{color: "red"}} className="editButtons">delete</span></td>}
                     
                    
                    <td style={{display: "none"}}><span onClick={this.saveChanges} style={{color: "rgb(15, 172, 9)"}} className="editButtons">save</span> / <span onClick={this.cancelChanges} style={{color: "rgb(168, 9, 9)"}} className="editButtons">cancel</span></td>
                    
                    
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }
    return <div>There is no users exist</div>
  }

  fetchUsersList = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json
        })
    })
  }

  componentDidMount() {
    this.fetchUsersList()
  }
}

export default UsersList;
