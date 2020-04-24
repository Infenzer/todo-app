import { IAddTodo } from "../actions/addTodo"
import { IDeleteTodo } from "../actions/deleteTodo"
import { IToggleTodo } from "../actions/toggleTodo"

export interface ITodo {
  text: string
  id: number
  checked: boolean
  timeCreate: string
}

export type TodosState = ITodo[]

type ActionType = IAddTodo | IDeleteTodo | IToggleTodo

const todos = (state: TodosState = [], action: ActionType): TodosState => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          checked: false,
          text: action.payload.text,
          timeCreate: action.payload.timeCreate
        }
      ]
    case 'DELETE_TODO': 
      return state.filter(todo => todo.id !== action.payload.id)
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, checked: !todo.checked}
        }
        return todo
      })
    default: return state
  }
}

export default todos