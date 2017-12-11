import React, { Component } from 'react';

function getTime(){
    return(
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    );
}

class Clock extends Component {
    render(){
       return (
           <div className="clock"> 
                {getTime()}
            </div>
        );
    }
}


export default Clock;
