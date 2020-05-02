import { DELETE_TODO } from "../types"

export interface IDeleteTodo {
  type: 'DELETE_TODO'
  payload: {
    id: string
  }
}

const deleteTodo = (id: string): IDeleteTodo => ({
  type: DELETE_TODO,
  payload: {
    id
  }
})

export default deleteTodo