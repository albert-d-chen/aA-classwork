import { connect } from 'react-redux';
import ToDoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, receiveTodos} from '../../actions/todo_actions';


const mapStateToProps = (state) => {
    return {
        todos: allTodos(state)
        //we're putting array as value inside object. 
    };
};



const mapDispatchToProps = (dispatch) => {

    return {
        receiveTodo: (todo) => dispatch(receiveTodo(todo))

    };

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)
