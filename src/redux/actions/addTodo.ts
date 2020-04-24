import { ADD_TODO } from "../types";

export interface IAddTodo {
  type: 'ADD_TODO'
  id: number
  payload: {
    text: string
    timeCreate: string
  }
}

let calcId = 0

const addTodo = (text: string, timeCreate: string): IAddTodo => ({
  type: ADD_TODO,
  id: calcId++,
  payload: {
    text,
    timeCreate,
  }
})

export default addTodo