import { TOGGLE_TODO } from "../types";

export interface IToggleTodo {
  type: 'TOGGLE_TODO'
  payload: {
    id: number
  }
}

const toggleTodo = (id: number): IToggleTodo => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
})

export default toggleTodo