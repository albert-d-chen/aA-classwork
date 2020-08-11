import React from 'react';


class ToDoListItem extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        // console.log(this.props.todo)
        return (
            <div>
                <li>
                    {this.props.todo.title}
                </li>
            </div>
        )
    }
}

export default ToDoListItem;