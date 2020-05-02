import { TOGGLE_TODO } from "../types";

export interface IToggleTodo {
  type: 'TOGGLE_TODO'
  payload: {
    id: string
  }
}

const toggleTodo = (id: string): IToggleTodo => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
})

export default toggleTodo