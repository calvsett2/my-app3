import React, {Component} from 'react';

class Todos extends Component{
    constructor(props){
        super(props)
        this.state = {todos: props.all_todos}
    }

    
    render(){
        const todoItems = this.state.todos.map( 
                        (todo) => {return (<li>id: {todo.id}, title: {todo.title}</li>)}
                        );
        let html_string = <div className="Todos">
                            <ul>
                                {todoItems}
                            </ul>
                           </div>
        
        return (html_string);
        
    }

}

export default Todos;
