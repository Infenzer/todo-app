import { IAddTodo } from "../actions/addTodo"

export interface ITodo {
  text: string
  id: number
  checked: boolean
  timeCreate: string
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
          text: action.payload.text,
          timeCreate: action.payload.timeCreate
        }
      ]
    default: return state
  }
}

export default todos