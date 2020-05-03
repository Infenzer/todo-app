import { DELETE_TODO } from "../types"
import Axios from "axios"
import { storageKey } from "./fetchAuth"
import { autoCloseAlert } from "./showAlert"

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

export const fetchDeleteTodo = (id: string) => {
  return dispatch => {
    const token = JSON.parse(localStorage.getItem(storageKey)).token
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    const data = { id }

    Axios.post('/api/todo/delete', data, config)
      .then(res => {
        const todoId = res.data.id
        dispatch(deleteTodo(todoId))
      },
      e => {
        dispatch(autoCloseAlert( 'WARNING', e.response.data.message, 2500 ))
      })
  }
}

export default deleteTodo