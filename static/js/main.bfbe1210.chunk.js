(this["webpackJsonppersonal-task-management"]=this["webpackJsonppersonal-task-management"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(31),r=n.n(c),l=n(12),i=n(2),o=(n(37),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))}),h=n(7),d=n(8),u=n(10),j=n(9),m=(n(38),n(0)),p=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("div",{className:"brand",children:"PTM"}),Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(l.b,{to:"/",children:"Users List"})}),Object(m.jsx)("li",{children:Object(m.jsx)(l.b,{to:"/todos",children:"Todo Lists"})}),Object(m.jsx)("li",{children:Object(m.jsx)(l.b,{to:"/posts",children:"Posts"})}),Object(m.jsx)("li",{children:Object(m.jsx)(l.b,{to:"/albums",children:"Albums"})})]})}),Object(m.jsx)("div",{className:"auth",children:Object(m.jsx)("a",{href:"https://www.youtube.com/watch?v=UXiAyIZjk7c",target:"_blank",rel:"noreferrer",children:"Logout"})})]})}}]),n}(s.a.Component),b=n(14),O=n(18),f=n(17),g=n(16),x=n.n(g),y=(n(66),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={name:"",username:"",email:"",phone:""},e.handleChange=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){console.log(t),""===e.state.name?t.target.parentElement.children[1].style.display="inline-block":""===e.state.username?t.target.parentElement.children[3].style.display="inline-block":""===e.state.email?t.target.parentElement.children[5].style.display="inline-block":""===e.state.phone?t.target.parentElement.children[7].style.display="inline-block":x.a.post("https://jsonplaceholder.typicode.com/users",e.state).then((function(n){console.log(n.data),e.props.addUser(n.data),e.setState({name:"",username:"",email:"",phone:""}),t.target.parentElement.children[1].style.display="none",t.target.parentElement.children[3].style.display="none",t.target.parentElement.children[5].style.display="none",t.target.parentElement.children[7].style.display="none"}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{onChange:this.handleChange,name:"name",placeholder:"name",className:"addInputs",value:this.state.name})," ",Object(m.jsx)("span",{id:"nameRequire",className:"requires",children:"*required"}),Object(m.jsx)("input",{onChange:this.handleChange,name:"username",placeholder:"username",className:"addInputs",value:this.state.username})," ",Object(m.jsx)("span",{id:"usernameRequire",className:"requires",children:"*required"}),Object(m.jsx)("input",{onChange:this.handleChange,name:"email",placeholder:"email",className:"addInputs",value:this.state.email})," ",Object(m.jsx)("span",{id:"emailRequire",className:"requires",children:"*required"}),Object(m.jsx)("input",{onChange:this.handleChange,name:"phone",placeholder:"phone",className:"addInputs",value:this.state.phone})," ",Object(m.jsx)("span",{id:"phoneRequire",className:"requires",children:"*required"}),Object(m.jsx)("button",{onClick:this.props.handleClick,className:"addButtons",children:"-"}),Object(m.jsx)("button",{onClick:this.handleSubmit,type:"button",className:"addButtons",children:"+"})]})})}}]),n}(a.Component)),v=(n(67),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={users:[],clicked:!1,editClick:!1,name:"",username:"",email:"",phone:""},a.handleClick=function(){a.setState({clicked:!a.state.clicked})},a.addUser=function(e){a.setState({users:[].concat(Object(O.a)(a.state.users),[e])})},a.deleteUser=function(e){console.log(a.state),fetch("https://jsonplaceholder.typicode.com/users/"+e.target.parentElement.parentElement.id,{method:"DELETE"}),e.target.parentElement.parentElement.remove()},a.editUser=function(e){for(var t=0;t<4;t++)e.target.parentElement.parentElement.children[t].children[0].readOnly=!1;a.setState({editClick:!0}),e.target.parentElement.parentElement.classList.add("highlightTDs"),e.target.parentElement.parentElement.children[5].style.display="table-cell",console.log(a.state)},a.handleUpdate=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.fetchUsersList=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){a.setState({users:e})}))},a.saveChanges=a.saveChanges.bind(Object(f.a)(a)),a.cancelChanges=a.cancelChanges.bind(Object(f.a)(a)),a}return Object(d.a)(n,[{key:"saveChanges",value:function(e){this.setState({editClick:!1}),e.target.parentElement.parentElement.classList.remove("highlightTDs");for(var t=0;t<4;t++)e.target.parentElement.parentElement.children[t].children[0].readOnly=!0;var n;e.target.parentElement.style.display="none",""!==this.state.name?(n={name:this.state.name},this.setState({name:""})):""!==this.state.username?(n={username:this.state.username},this.setState({username:""})):""!==this.state.email?(n={email:this.state.email},this.setState({email:""})):""!==this.state.phone&&(n={phone:this.state.phone},this.setState({phone:""}));var a={method:"PUT",body:JSON.stringify(n),headers:{"Content-type":"application/json"}};(n.name||n.username||n.email||n.phone)&&fetch("https://jsonplaceholder.typicode.com/users/"+e.target.parentElement.parentElement.id,a).then((function(e){return e.json()})).then((function(e){return console.log(e)})),console.log(this.state)}},{key:"cancelChanges",value:function(e){""!==this.state.name?(e.target.parentElement.parentElement.children[0].children[0].value=this.state.users[e.target.parentElement.parentElement.id-1].name,console.log(this.state.users)):""!==this.state.username?e.target.parentElement.parentElement.children[1].children[0].value=this.state.users[e.target.parentElement.parentElement.id-1].username:""!==this.state.email?e.target.parentElement.parentElement.children[2].children[0].value=this.state.users[e.target.parentElement.parentElement.id-1].email:""!==this.state.phone&&(e.target.parentElement.parentElement.children[3].children[0].value=this.state.users[e.target.parentElement.parentElement.id-1].phone),this.setState({name:"",username:"",email:"",phone:""}),e.target.parentElement.style.display="none",this.setState({editClick:!1}),e.target.parentElement.parentElement.classList.remove("highlightTDs");for(var t=0;t<4;t++)e.target.parentElement.parentElement.children[t].children[0].readOnly=!0;console.log(this.state)}},{key:"render",value:function(){var e=this;return this.state.users.length?Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{id:"usersListHeader",children:"All Users List"}),Object(m.jsx)("button",{onClick:this.handleClick,id:"addButton",children:"Add User"}),Object(m.jsx)("div",{id:"formComponent",children:this.state.clicked?Object(m.jsx)(y,{handleClick:this.handleClick,addUser:this.addUser}):null}),Object(m.jsxs)("table",{width:"100%",id:"usersListTable",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Username"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{children:"Phone"})]})}),Object(m.jsx)("tbody",{children:this.state.users.map((function(t,n){return Object(m.jsxs)("tr",{id:t.id,className:"usersListTR",children:[Object(m.jsx)("td",{children:Object(m.jsx)("input",{type:"text",defaultValue:t.name,name:"name",onChange:e.handleUpdate,className:"name userInfos",readOnly:!0})}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{type:"text",defaultValue:t.username,name:"username",onChange:e.handleUpdate,className:"username userInfos",readOnly:!0})}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{type:"text",defaultValue:t.email,name:"email",onChange:e.handleUpdate,className:"email userInfos",readOnly:!0})}),Object(m.jsx)("td",{children:Object(m.jsx)("input",{type:"text",defaultValue:t.phone,name:"phone",onChange:e.handleUpdate,className:"phone userInfos",readOnly:!0})}),!e.state.editClick&&Object(m.jsxs)("td",{children:[Object(m.jsx)("span",{onClick:e.editUser,style:{color:"blue"},className:"editButtons",children:"edit"})," / ",Object(m.jsx)("span",{onClick:e.deleteUser,style:{color:"red"},className:"editButtons",children:"delete"})]}),Object(m.jsxs)("td",{style:{display:"none"},children:[Object(m.jsx)("span",{onClick:e.saveChanges,style:{color:"rgb(15, 172, 9)"},className:"editButtons",children:"save"})," / ",Object(m.jsx)("span",{onClick:e.cancelChanges,style:{color:"rgb(168, 9, 9)"},className:"editButtons",children:"cancel"})]})]},n)}))})]})]}):Object(m.jsx)("div",{children:"There is no users exist"})}},{key:"componentDidMount",value:function(){this.fetchUsersList()}}]),n}(s.a.Component)),E=(n(68),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).removeItem=function(e){fetch("http://127.0.0.1:8080/api/todoitems/"+e.target.parentElement.id,{method:"DELETE"}),e.target.parentElement.remove()},a.completeItem=function(e){console.log(e.target.parentElement.id),e.target.parentElement.querySelector(".todoItems").style.textDecoration=e.target.checked?"line-through":"none"},a.handleChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.handleAddInput=function(){x.a.post("https://jsonplaceholder.typicode.com/todos",{title:a.state.input}).then((function(e){a.setState({todos:[].concat(Object(O.a)(a.state.todos),[e.data]),input:""})}))},a.state={todos:[],input:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.todosFetch()}},{key:"todosFetch",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json()})).then((function(t){e.setState({todos:t})}))}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{id:"mainDiv",children:[Object(m.jsx)("label",{children:"Enter your item here!"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{name:"input",id:"todo_input",value:this.state.input,onChange:this.handleChange}),Object(m.jsx)("button",{id:"addButton",onClick:this.handleAddInput,children:"ADD"}),Object(m.jsx)("ul",{children:this.state.todos.map((function(t){return Object(m.jsxs)("li",{id:t.id,children:[Object(m.jsx)("input",{type:"checkbox",onClick:e.completeItem}),Object(m.jsx)("input",{type:"text",defaultValue:t.title,className:"todoItems"}),Object(m.jsx)("span",{id:"deleteSpan",onClick:e.removeItem,children:"Delete"})]},t.id)}))})]})}}]),n}(a.Component)),C=(n(69),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).fetchPosts=function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){a.setState({posts:e})}))},a.removePost=function(e){fetch("https://jsonplaceholder.typicode.com/posts"+e.target.parentElement.id,{method:"DELETE"}),e.target.parentElement.remove()},a.state={posts:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.fetchPosts()}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{children:this.state.posts.map((function(t,n){return Object(m.jsxs)("div",{className:"postItems",id:t.id,children:[Object(m.jsx)("h3",{children:t.title},n),Object(m.jsx)("span",{id:"removeSpan",onClick:e.removePost,children:"Delete"}),Object(m.jsx)("p",{children:t.body}),Object(m.jsx)("hr",{})]},n)}))})}}]),n}(a.Component)),k=(n(70),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getAlbums=function(){fetch("https://jsonplaceholder.typicode.com/albums").then((function(e){return e.json()})).then((function(e){return a.setState({albums:e})}))},a.state={albums:[],showForm:!1},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getAlbums()}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Albums List"}),Object(m.jsx)("button",{children:"Add"}),Object(m.jsx)("div",{className:"album-container",children:this.state.albums.map((function(e,t){return Object(m.jsx)("a",{href:"https://www.youtube.com/watch?v=UXiAyIZjk7c",target:"_blank",rel:"noreferrer",className:"container",children:e.title},t)}))})]})}}]),n}(a.Component));r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/posts",children:Object(m.jsx)(C,{})}),Object(m.jsx)(i.a,{path:"/todos",children:Object(m.jsx)(E,{})}),Object(m.jsx)(i.a,{path:"/albums",children:Object(m.jsx)(k,{})}),Object(m.jsx)(i.a,{path:"/",children:Object(m.jsx)(v,{})})]})]})}),document.getElementById("root")),o()}},[[71,1,2]]]);
//# sourceMappingURL=main.bfbe1210.chunk.js.map