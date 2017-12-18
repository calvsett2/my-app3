import React, { Component } from 'react';

class Laser extends Component {
    constructor(props){
        super(props)
        this.state= {laserOn: "laseroff"};
        this.switchLaser = this.switchLaser.bind(this);
    }
    
    switchLaser(){
        if(this.state.laserOn === "laseroff"){
            this.setState( {laserOn:  "laseron"})
            console.log("Laser was fired!");
        }else{
            this.setState( {laserOn:  "laseroff"})
        }
    }
    render(){
        return (
            <div className="laser">
                This is my laser. laserOn: {this.state.laserOn}.
                <p onClick={this.switchLaser}>Switch the Laser!</p>
            </div>
        )
    }
}

export default Laser;
