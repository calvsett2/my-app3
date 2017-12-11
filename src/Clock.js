import React, { Component } from 'react';

function tick(){
    const element = {
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    }
    ReactDOM.render(
        element, 
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
