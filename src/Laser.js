import React, { Component } from 'react';

class Laser extends Component {
    constructor(state){
        super(state)
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
