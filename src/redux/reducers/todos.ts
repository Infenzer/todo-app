import { IAddTodo } from "../actions/addTodo"

interface ITodo {
  text: string
  id: number
  checked: boolean
}

export type TodosState = ITodo[]

const todos = (state: TodosState = [], action: IAddTodo): TodosState => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          checked: false,
          text: action.payload.text
        }
      ]
    default: return state
  }
}

export default todos