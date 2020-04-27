import React from 'react'
import Todo from './Todo'
import { TodoListProps } from '../containers/VisibleTodoList'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const TodoList: React.FC<TodoListProps> = (props) => {
  return(
    <TransitionGroup component="ul" className="list-group">
      {props.todos.map(todo => 
        (<CSSTransition
          key={todo.id}
          classNames='todo'
          timeout={800} 
        >
          <Todo
            {...todo} 
            onDeleteClick={props.deleteTodo}
            onToggleTodo={props.toggleTodo}
          />
        </CSSTransition>)
      )}
    </TransitionGroup>
  )
}

export default TodoList