import React, { Component } from 'react';

class LoggingButton extends Component {
    // enssures `this` is boudn within handleClick
    handleClick = () => {
        console.log('this is: ', this);
    }
    render(){
        return (
            <button onClick={this.handleClick}>
                Logging Button
            </button>
        )
    }
}

export default LoggingButton
