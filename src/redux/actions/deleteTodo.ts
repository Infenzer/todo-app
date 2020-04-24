import { DELETE_TODO } from "../types"

export interface IDeleteTodo {
  type: 'DELETE_TODO'
  payload: {
    id: number
  }
}

const deleteTodo = (id: number): IDeleteTodo => ({
  type: DELETE_TODO,
  payload: {
    id
  }
})

export default deleteTodo