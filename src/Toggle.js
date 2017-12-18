import React, { Component } from 'react';

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        
        // this binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.setState(prevState => ({
             isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return(
            <div className='Toggle' onClick={this.handleClick}>
                Toggle: {this.state.isToggleOn ? 'ON' : 'OFF'}
            </div>
        )
    }
};

export default Toggle;
