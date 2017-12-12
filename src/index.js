import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// example splitting large components into smaller components

function formatDate(date){
    return date.toLocaleDateString();
}

function Component(props){
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar" 
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)} 
            </div>
        </div>
    )
}

let props = {
         author: {
           avatarUrl: "../public/puppy.jpg", 
           name: "Calvin Settachatgul",
         }, 
         text : "something something somehting this is text", 
         date : new Date()
}

ReactDOM.render(<Component {...props}/>, document.getElementById('root'));
registerServiceWorker();
