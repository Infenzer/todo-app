import { ADD_TODO } from "../types";

export interface IAddTodo {
  type: 'ADD_TODO'
  id: number
  payload: {
    text: string
  }
}

let calcId = 0

const addTodo = (text: string): IAddTodo => ({
  type: ADD_TODO,
  id: calcId++,
  payload: {
    text
  }
})

export default addTodo