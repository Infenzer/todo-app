import { connect, ConnectedProps } from "react-redux";
import TodoList from "../components/TodoList";
import { RootState } from "../redux/reducers";
import deleteTodo from "../redux/actions/deleteTodo";
import toggleTodo from "../redux/actions/toggleTodo";

export type TodoListProps = ConnectedProps<typeof connector>

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id: number) => {
    return dispatch(deleteTodo(id))
  },
  
  toggleTodo: (id: number) => {
    return dispatch(toggleTodo(id))
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(TodoList)