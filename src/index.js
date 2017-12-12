import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// example of the App component rendering Welcome component many times
// can't import App from another file because both App variables are in the global namespace

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

function App(){
    return (
        <div>
            <Welcome name="Calvin"/>
            <Welcome name="Chris"/>
            <Welcome name="Ben"/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
