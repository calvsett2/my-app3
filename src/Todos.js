import React, {Component} from 'react';

let all_todos = [ 
                    {   id:1, title: "title1"}, 
                    {   id:2, title: "title2"}, 
                    {   id:3, title: "title3"}, 
                    {   id:4, title: "title4"}, 
                ]

class Todos extends Component{
    constructor(props){
        super(props)
        this.state = {all_todos}
    }
    render(){
        return (
        <div>this is todos component</div>
        )
    }

}

export default Todos;
