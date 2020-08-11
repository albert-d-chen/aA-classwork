import React from 'react';
import {uniqueId} from '../../util/id_generator'

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);

         this.state ={
            id: uniqueId(),
            title: "",
            body: "",
            done: false,
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    updateTitle(e) {
        this.setState({
            title: e.target.value
        })
        console.log(e);

    };

    updateBody(e) {
        this.setState({
            body: e.target.value
        })
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({
            id: uniqueId(),
            title: '',
            body: ''
        });
    };



    render () {
        
        return (
            <div>
                <h4>New Todo Form</h4> 
                <form onSubmit={this.handleSubmit}>
                    <label> Title:
                        <input 
                            type = 'text'
                            value = {this.state.title}
                            onChange={this.updateTitle}
                        />
                    </label>

                    <label> Body:
                        <input 
                            type = 'text'
                            value = {this.state.body}
                            onChange={this.updateBody}
                        />

                    </label>
                    <br/><br/>
                    {console.log(this.state)}
                    <input type='submit' value='Add Todo' />

                </form>
            </div>


        );
    }
}

export default ToDoForm;