import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Welcome extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>;
    }
}

const element = <Welcome name="Calvin" />;

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
