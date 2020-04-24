import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { RootState } from "../redux/reducers";

const mapStateToProps = (state: RootState) => ({
  todos: state.todos
})

const connector = connect(mapStateToProps)

export default connector(TodoList)