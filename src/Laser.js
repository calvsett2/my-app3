import React, { Component } from 'react';

class Laser extends Component {
    constructor(props){
        super(props)
        this.state.laserOn = false;
    }
    render(){
        return (
            <div className="laser">
                This is my laser.
            </div>
        )
    }
}

export default Laser;
