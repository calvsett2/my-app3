import React, { Component } from 'react';

class Laser extends Component {
    constructor(props){
        super(props)
        this.state= {laserOn: "laseroff"};
        this.switchLaser = this.switchLaser.bind(this);
    }
    
    switchLaser(){
        this.setState( {laserOn:  "laseron"}
        )
        console.log("Laser was fired!");
    }
    render(){
        return (
            <div className="laser">
                This is my laser. laserOn: {this.state.laserOn}.
                <p onClick={this.switchLaser}>Fire the Laser!</p>
            </div>
        )
    }
}

export default Laser;
