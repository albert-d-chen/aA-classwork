import React from 'react';
import todosReducer from '../../reducers/todos_reducer';
import ToDoListItem from './todo_list_item';
import ToDoForm from './todo_form';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);   

        // this.props 

    }

    render () {
        
        return (
            <div>
                <ul>
                    <h3> HELLO To do list goes here</h3>
                    {
                        
                    this.props.todos.map( (todo,idx) => {
                        return (

                            <ToDoListItem key={idx} todo={todo}/>
                            // <li key={idx}>
                            //     {todo.title}
                            // </li>
                            
                        )
                    })


                    }

                </ul>
                <ToDoForm receiveTodo={this.props.receiveTodo}/>
            </div>
            
        )
        
    }
}

export default ToDoList;