import axios from 'axios'
import React, { Component } from 'react'
import '../styles/Albums.css'

// import AlbumForm from "./AlbumForm"



 class Albums extends Component {
    constructor(props){
        super(props)

        this.state = {
            albums: [],
            input: "",
            showForm: false
        }
    }

    componentDidMount() {
        this.getAlbums()
    }

    getAlbums = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => {
            //console.log(json)
            return this.setState({albums: json})
        })
    }

    showAddAlbum = () => {
        this.setState({showForm : !this.state.showForm, input: ""})
    }

    cancelAddAlbum = () => {
        this.setState({showForm : !this.state.showForm, input: ""})
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        
    }
    approveAddAlbum = (e) => {
        if(this.state.input !== ""){
            axios.post('https://jsonplaceholder.typicode.com/albums', {title:this.state.input})
            .then(res => {
                console.log(res.data)
                this.setState({albums: [...this.state.albums, res.data]});

                e.target.nextElementSibling.style.display = "inline-block";
                e.target.previousElementSibling.previousElementSibling.style.display = "none"
                setTimeout(()=>{
                    e.target.nextElementSibling.style.display = "none";
                },2000)
            })
        } else {
            e.target.previousElementSibling.previousElementSibling.style.display = "inline-block"
        }
        
    }
    

    render() {
        
        return (
            <div>
             <h1 id="albumHeader">Albums List</h1>
             <button id="addButtonAlbums" onClick={this.showAddAlbum}>Add</button>
             {this.state.showForm ? 
             <div className="addAlbumDiv">
                <input name="input" id="albumInput" value={this.state.input} onChange={this.handleChange} placeholder="Enter your item!"></input>
                <span id="albumRequire">*required</span>

                <i className="fas fa-window-close cancelAlbumAdd" onClick={this.cancelAddAlbum}></i>
                <i className="fas fa-check-square approveAlbumAdd" onClick={this.approveAddAlbum}></i>

                <span id="albumSuccesful">Succesfully added!</span>
             </div> : ""}
             
             <div className='album-container'>
             {this.state.albums.map((item,index) => {
                 return (
                    <div className='container' key={index}>
                        <span className="albumItem">{item.title}</span>
                    </div>
                 ) 
             })}
             </div>
            

            </div>
        )
         
}
 }
    


export default Albums;





// <table>
// <tbody>
// <tr>
//     {/* <th>UserID</th> */}
//     <th>USER-ID</th>
//     <th>ID</th>
//     <th>TITLE</th>
// </tr>

// {this.state.albums.map((album) => {
//     return (
        
//         <tr key={album.id}>

//         {/* <td >{post.userId}</td> */}
//         <td >{album.userId}</td>
//         <td >{album.id}</td>
//         <td >{album.title}</td>

//     </tr>
    
   
//     )
// })}
// </tbody>
 

// </table>