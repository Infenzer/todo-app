import { connect, ConnectedProps } from "react-redux";
import TodoList from "../components/TodoList";
import { RootState } from "../redux/reducers";
import deleteTodo from "../redux/actions/deleteTodo";
import toggleTodo from "../redux/actions/toggleTodo";
import fetchTodoList from "../redux/actions/fetchTodoList";

export type TodoListProps = ConnectedProps<typeof connector>

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
  isLoading: state.loader.isLoading
})

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id: string) => {
    return dispatch(deleteTodo(id))
  },
  
  toggleTodo: (id: string) => {
    return dispatch(toggleTodo(id))
  },

  loadTodoList: () => {
    return dispatch(fetchTodoList())
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(TodoList)