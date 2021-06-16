import React from 'react';
import Form from "./Form";
import "../styles/UserList.css"
// import axios from "axios"


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
    
    //console.log(this.state);

    fetch("http://localhost:8080/api/usersList/" + e.target.parentElement.parentElement.id, data)
    .then((res) => res.json())
    .then(jsonRes => console.log(jsonRes))


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

    // console.log(this.state)
  }

  saveChanges(e){
    this.setState({editClick: false});
    e.target.parentElement.parentElement.classList.remove("highlightTDs");
    for(let i = 0; i<4; i++){
      e.target.parentElement.parentElement.children[i].children[0].readOnly = true
    };
    e.target.parentElement.style.display = "none";


    
    let item = {}

    if(this.state.name !== "" || this.state.username !== "" || this.state.email !== "" || this.state.phone !== ""){
      item = {name: this.state.name, username: this.state.username, email: this.state.email, phone: this.state.phone};
      this.setState({ name : "" , username: "", email: "", phone: ""})
    }

    if(item.name === ""){
      delete item.name
    }
    if(item.username === ""){
      delete item.username
    } 
    if(item.email === ""){
      delete item.email
    } 
    if(item.phone === ""){
      delete item.phone
    }


    const parentID = e.target.parentElement.parentElement.id;
    
    const data = {
      method: 'PUT',
      body: JSON.stringify(item),
      headers: {
        'Content-type': 'application/json'
      }
    }

    if(item.name || item.username || item.email || item.phone){
      fetch("http://localhost:8080/api/usersList/" + parentID, data)
      .then((res)=> res.json())
      .then(jsonResponse => {
        console.log(jsonResponse);
        
        if(item.name){
          this.setState({...this.state, users: this.state.users.filter(item => {
            return item.id === parentID ? item.name = jsonResponse.name : item
          })});
        }

        if(item.username){
          this.setState({...this.state, users: this.state.users.filter(item => {
            return item.id === parentID ? item.username = jsonResponse.username : item
          })});
        }

        if(item.email){
          this.setState({...this.state, users: this.state.users.filter(item => {
            return item.id === parentID ? item.email = jsonResponse.email : item
          })});
        }
        
        if(item.phone){
          this.setState({...this.state, users: this.state.users.filter(item => {
            return item.id === parentID ? item.phone = jsonResponse.phone : item
          })});
        }
        

      //console.log(this.state.users)
      });
    }

    // let indexNo = Object.keys(jsonResponse)[0];
    // let indexValue = Object.values(jsonResponse)[0];

    //console.log(this.state)
  }

  cancelChanges(e){


    if(this.state.name !== "" || this.state.username !== "" || this.state.email !== "" || this.state.phone !== ""){
      e.target.parentElement.parentElement.children[0].children[0].value = this.state.users[e.target.id].name;

      e.target.parentElement.parentElement.children[1].children[0].value = this.state.users[e.target.id].username;

      e.target.parentElement.parentElement.children[2].children[0].value = this.state.users[e.target.id].email;

      e.target.parentElement.parentElement.children[3].children[0].value = this.state.users[e.target.id].phone;
    }


    

    this.setState({name: "", username: "", email: "", phone: ""})
    e.target.parentElement.style.display = "none";
    this.setState({editClick: false});
    e.target.parentElement.parentElement.classList.remove("highlightTDs");
    for(let i = 0; i<4; i++){
      e.target.parentElement.parentElement.children[i].children[0].readOnly = true
    }
    //console.log(this.state)
  }

  handleUpdate = (e) => {
    

    this.setState({[e.target.name] : e.target.value})

   
    //console.log(this.state)
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
                     
                    
                    <td style={{display: "none"}}><span onClick={this.saveChanges} style={{color: "rgb(15, 172, 9)"}} className="editButtons">save</span> / <span onClick={this.cancelChanges} style={{color: "rgb(168, 9, 9)"}} className="editButtons" id={index}>cancel</span></td>
                    
                    
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }
    return (
      <>
        <button onClick={this.handleClick} id="addButton">Add User</button>
          <div id="formComponent">
            {this.state.clicked ? <Form handleClick={this.handleClick} addUser={this.addUser}/> : null}
          </div>
        <div>There is no users exist</div>
      </>
    )
  }

  fetchUsersList = () => {
    fetch('http://localhost:8080/api/usersList')
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
