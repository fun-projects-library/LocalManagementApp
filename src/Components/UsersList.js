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
    
    this.setState({editClick: true});
    e.target.parentElement.parentElement.classList.add("highlightTDs");
  }

  saveChanges(e){
    this.setState({editClick: false});
    e.target.parentElement.parentElement.classList.remove("highlightTDs");
    if(this.state.name){
      
    } else if(this.state.username){

    } else if(this.state.email){

    } else if(this.state.phone){

    }


    // axios.put("https://jsonplaceholder.typicode.com/users/" + e.target.parentElement.parentElement.id, )
  }

  cancelChanges(e){
    this.setState({editClick: false});
    e.target.parentElement.parentElement.classList.remove("highlightTDs")
  }

  handleUpdate = (e) => {
    console.log(e)
    this.setState({[e.target.className] : e.target.value})
  }


  render() {
    console.log(this.state)
    if(this.state.users.length){
      return (
        <div>
          <h2>All Users List</h2>
          <button onClick={this.handleClick}>Add</button>
          <div>
            {this.state.clicked ? <Form handleClick={this.handleClick} addUser={this.addUser}/> : null}
          </div>

          <table width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => {
                return (
                  <tr key={user.id} id={user.id}>
                    <td><input type="text" defaultValue={user.name} onChange={this.handleUpdate} className="name"/></td>
                    <td><input type="text" defaultValue={user.username} onChange={this.handleUpdate} className="username"/></td>
                    <td><input type="text" defaultValue={user.email} onChange={this.handleUpdate} className="email"/></td>
                    <td><input type="text" defaultValue={user.phone} onChange={this.handleUpdate} className="phone"/></td>

                    {!this.state.editClick ? 
                    <td><span onClick={this.editUser} style={{color: "blue"}} className="editButtons">edit</span> / <span onClick={this.deleteUser} style={{color: "red"}} className="editButtons">delete</span></td> 
                    :
                    <td><span onClick={this.saveChanges} style={{color: "rgb(15, 172, 9)"}} className="editButtons">save</span> / <span onClick={this.cancelChanges} style={{color: "rgb(168, 9, 9)"}} className="editButtons">cancel</span></td>
                    }
                    
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

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json
        })
    })
  }
}

export default UsersList;
