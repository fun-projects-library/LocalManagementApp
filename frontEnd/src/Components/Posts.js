import axios from 'axios';
import {useReducer, useEffect, useRef } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import "../styles/Posts.css";



const initalState = { posts: [], createPostClicked: false, title: "", body: ""}


const reducer = (state, action) => {
    switch(action.type){
        case "setPosts" : return {...state, posts: action.payload};
        case "addPost" : return {...state, posts: [...state.posts, action.payload], title: "", body: ""};
        case "createSection" : return {...state, createPostClicked: action.payload};
        case "title" : return {...state, title: action.payload};
        case "body" : return {...state, body: action.payload};
        //case "find" : return {...state, find: action.payload};
        default:
            return state;
    }
}


export default function Posts() {
    
    const titleRef = useRef();
    const bodyRef = useRef();
    const succesfulRef = useRef()

    const [state, dispatch] = useReducer(reducer, initalState);
    let { url } = useRouteMatch();
    //console.log(path, url)

    
    useEffect(() => {
        fetch("http://localhost:8080/api/posts")
            .then(res => res.json())
            .then(jsonResponse => {
                dispatch({type: "setPosts", payload: jsonResponse})
            })
        //console.log(state)
    }, [])

    const removePost = (e) => {
        const data = {
            method: "DELETE"
        }

        fetch("http://localhost:8080/api/posts/" + e.target.parentElement.parentElement.id, data)
        .then(res => res.json())
        .then(jsonRes => console.log(jsonRes))
        e.target.parentElement.parentElement.remove(); 
    }

    const createPostSection = ()=>{
        
        dispatch({type: "createSection", payload: !state.createPostClicked})
        //console.log(state)
    }

    const addPostFunc = () => {
        let item = {title: state.title, body:state.body};
        console.log(item)
        if(item.title === ""){
            titleRef.current.style.display = "inline-block";
        } else if(item.body === ""){
            bodyRef.current.style.display = "inline-block";
        } else {
            axios.post("http://localhost:8080/api/posts", item)
            .then(res => {
                console.log(res.data);
                dispatch({type: "addPost", payload: res.data});
                titleRef.current.style.display = "none"
                bodyRef.current.style.display = "none";
                succesfulRef.current.style.display = "inline-block";
                setTimeout(()=>{
                    succesfulRef.current.style.display = "none";
                },2000)
            })
            .catch(err=>{console.log(err)})
        }

        
    }

    const cancelPostAdding = () => {
        dispatch({type: "createSection", payload: !state.createPostClicked})
    }

    const handleChange = (e) => {
        dispatch({type: e.target.name, payload: e.target.value})
        
    }
    

    return (
        <div>
            <h1 id="postHeader">All Posts</h1>

            <button onClick={createPostSection} id="createPostButton">Create Posts</button>

            

            {state.createPostClicked ? 
            <div id="postsForm">
                <label htmlFor="title">Title</label><br />
                <input placeholder="Enter your title!" id="titleInput" name="title" onChange={handleChange} value={state.title}/> <span id="titleRequire" className="requires" ref={titleRef}>*required</span> 
                <br />

                <label htmlFor="body">Body</label><br />
                <input placeholder="Enter your post!" id="bodyInput" name="body" onChange={handleChange} value={state.body}/> <span id="bodyRequire" className="requires" ref={bodyRef}>*required</span> 
                <br />

                <button onClick={cancelPostAdding} id="cancelPostButton">Cancel</button>
                <button onClick={addPostFunc} id="savePostButton">Save</button>
                <span id="userSuccesful" ref={succesfulRef}>Succesfully added!</span>
            </div>
                :
                ""
            }

            <div>
                {state.posts.map((item,index)=>{
                return (
                    <div className="postContainer" id={item.id} key={index}>
                        <h3 key={index} className="postTitle">{item.title}</h3>
                        
                        <span className="removeSpan">


                            <i className="fas fa-trash trashPostIcons" onClick={removePost}></i>
                            <Link to={`${url}/${item.id}`}><i className="fas fa-pen editPostIcons"></i></Link>
                            
                            
                        </span>
                        <p className="postBody">{item.body}</p>
                        <hr />
                    </div>
                    
                    )
                })}
            </div>
            
            {/* <Switch> 
                <Route path="/Posts/:id"><EditPost state={state} editPost={editPost} /></Route>
            </Switch> */}
            
            
        </div>
    )
}





// class Posts extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             posts: [],
//             createPostClicked: false
//         }
//     }

//     fetchPosts = () => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => res.json())
//         .then(jsonResponse => {
//             this.setState({
//                 posts: jsonResponse
//             })
//         })
//     }
//     componentDidMount(){
//         this.fetchPosts()
//     }

//     removePost = (e) => {
//         const data = {
//             method: "DELETE"
//         }

//         fetch("https://jsonplaceholder.typicode.com/posts/" + e.target.parentElement.parentElement.id, data)
//         .then(res => res.json())
//         .then(jsonRes => console.log(jsonRes))
//         e.target.parentElement.parentElement.remove();

        
//     }

//     createPostSection = ()=>{
//         this.setState({createPostClicked : !this.state.createPostClicked})
//         console.log(this.state)
//     }


//     addPostFunc = () => {

//     }

//     cancelPostAdding = () => {
//         this.setState({createPostClicked : !this.state.createPostClicked})
//     }

//     editPost = () => {
//         console.log(this.props.match)
//     }


//     render() {
//         console.log(this.props.match)
//         return (
//             <div>
//                 <h2 id="postHeader">All Posts</h2>
//                 <button onClick={this.createPostSection} id="createPostButton">Create Posts</button>
//                 {this.state.createPostClicked ? 
//                 <form>
//                     <label htmlFor="title">Title</label><br />
//                     <input placeholder="Enter your title!" id="titleInput"/> <br />
//                     <label htmlFor="body">Body</label><br />
//                     <input placeholder="Enter your post!" id="bodyInput"/> <br />
//                     <button onClick={this.cancelPostAdding} id="cancelPostButton">Cancel</button>
//                     <button onSubmit={this.addPostFunc} id="savePostButton">Save</button>
//                 </form>
//                     :
//                     ""
//                 }

//                 <div>
//                     {this.state.posts.map((item,index)=>{
//                     return (
//                         <div className="postContainer" id={item.id} key={index}>
//                             <h3 key={index} className="postTitle">{item.title}</h3>
//                             <h4>{`${this.props.match.url}/` + item.id}</h4>
//                             <span className="removeSpan">


//                                 <i className="fas fa-trash trashPostIcons" onClick={this.removePost}></i>
//                                 <Link to={`${this.props.match.url}/${item.id}`}><i className="fas fa-pen editPostIcons" onClick={this.editPost}></i></Link>
                                
                                
//                             </span>
//                             <p className="postBody">{item.body}</p>
                            

//                             <hr />
//                         </div>
                        
//                         )
//                     })}
//                 </div>
                
//                 <Switch>
//                     <Route path={`${this.props.match.path}/:id`} component={EditPost}></Route>
//                 </Switch>
                
                
//             </div>
//         )
//     }
// }



// export default withRouter(Posts);




