import React, { Component } from 'react';
import "../styles/Posts.css";


export default class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            createPostClicked: false
        }
    }

    fetchPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(jsonResponse => {
            this.setState({
                posts: jsonResponse
            })
        })
    }
    componentDidMount(){
        this.fetchPosts()
    }

    removePost = (e) => {
        const data = {
            method: "DELETE"
        }

        fetch("https://jsonplaceholder.typicode.com/posts/" + e.target.parentElement.parentElement.id, data)
        .then(res => res.json())
        .then(jsonRes => console.log(jsonRes))
        e.target.parentElement.parentElement.remove()
    }

    createPostSection = ()=>{
        this.setState({createPostClicked : !this.state.createPostClicked})
        console.log(this.state)
    }


    addPostFunc = () => {

    }

    cancelPostAdding = () => {
        this.setState({createPostClicked : !this.state.createPostClicked})
    }


    render() {
        
        return (
            <div>
                <button onClick={this.createPostSection} id="createPostButton">Create Posts</button>
                {this.state.createPostClicked ? 
                <form>
                    <label htmlFor="title">Title</label><br />
                    <input placeholder="Enter your title!" id="titleInput"/> <br />
                    <label htmlFor="body">Body</label><br />
                    <input placeholder="Enter your post!" id="bodyInput"/> <br />
                    <button onClick={this.cancelPostAdding} id="cancelPostButton">Cancel</button>
                    <button onSubmit={this.addPostFunc} id="savePostButton">Save</button>
                </form>
                    :
                    null
                }



                {this.state.posts.map((item,index)=>{
                    return (
                        <div className="postContainer" id={item.id} key={index}>
                            <h3 key={index} className="postTitle">{item.title}</h3>
                            <span className="removeSpan">
                                <i className="fas fa-trash trashPostIcons" onClick={this.removePost}></i>
                                <i className="fas fa-pen editPostIcons" onClick={this.editPost}></i>
                                
                            </span>
                            <p className="postBody">{item.body}</p>
                            

                            <hr />
                        </div>
                        
                    )
                })}
            </div>
        )
    }
}








