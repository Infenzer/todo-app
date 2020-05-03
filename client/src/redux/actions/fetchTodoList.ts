import Axios from "axios"
import { storageKey, logout } from "./fetchAuth"
import { LOAD_TODO_LIST } from "../types"
import { ITodo } from "../reducers/todos"
import showLoader from "./showLoader"
import hideLoader from "./hideLoader"

export interface ILoadTodoList {
  type: typeof LOAD_TODO_LIST
  payload: {
    todoList: ITodo[]
  }
}

export const loadTodoList = (todoList: ITodo[]): ILoadTodoList => ({
  type: LOAD_TODO_LIST,
  payload: {
    todoList
  }
})

const fetchTodoList = () => {
  return dispatch => {
    const token = JSON.parse(localStorage.getItem(storageKey)).token
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    
    dispatch(showLoader())

    Axios.get('/api/todo', config)
      .then(res => {
        dispatch(loadTodoList(res.data.todoList))
        dispatch(hideLoader())
      },
      e => {
        dispatch(logout())
        dispatch(hideLoader())
        console.log(e.response.data.message)
      })
  }
}

export default fetchTodoList