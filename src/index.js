import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// example splitting large components into smaller components

function formatDate(date){
    return date.toLocaleDateString();
}

function Comment(props){
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)} 
            </div>
        </div>
    )
}

// extracting avatar component
function Avatar(props){
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}

// extracting UserInfo compoenent that renders Avatar
function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}


let props = {
         author: {
           avatarUrl: "../public/puppy.jpg", 
           name: "Calvin Settachatgul",
         }, 
         text : "somehting this is text", 
         date : new Date()
}

ReactDOM.render(<Comment {...props}/>, document.getElementById('root'));
registerServiceWorker();
