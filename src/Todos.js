import React, {Component} from 'react';

class Todos extends Component{
    constructor(props){
        super(props)
        this.state = {all_todos: all_todos}
    }
    render(){
        let html_string = (<div className="Todos">
                            <ul>
                                <li>id: 1 title: title1</li>
                                <li>id: 2 title: title2</li>
                                <li>id: 3 title: title3</li>
                                <li>id: 4 title: title4</li>
                            </ul>
                           </div>)
                    
               
        
        return html_string;
        
    }

}

export default Todos;
