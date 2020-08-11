import React from 'react';
import ToDoListContainer from './todos/todo_list_container';
// import ToDoListItem from './'
const App = (props) => {
    return (
        <div>
            <h1>To Do List</h1>
            <ToDoListContainer />
            {/* <ToDoListItem /> */}
        </div>
        
    )
}

export default App;