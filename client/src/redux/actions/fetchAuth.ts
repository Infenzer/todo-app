import { LOGIN as LOGIN, LOGOUT } from "../types"
import Axios from "axios"
import hideLoader from "./hideLoader"
import { autoCloseAlert } from "./showAlert"
import showLoader from "./showLoader"


export interface ILogin {
  type: typeof LOGIN
}

export interface ILogout {
  type: typeof LOGOUT
}

export const storageKey = 'userData'

export const login = (data: any): ILogin => {
  localStorage.setItem(storageKey, JSON.stringify(data))

  return {
    type: LOGIN
  }
}

export const logout = (): ILogout => {
  localStorage.removeItem(storageKey)

  return {
    type: LOGOUT
  }
}

const fetchAuth = (email: string, password: string) => {
  return dispatch => {
    dispatch(showLoader())

    Axios.post('/api/auth/login', {email, password})
      .then(
        res => {
          dispatch(login(res.data))
          dispatch(hideLoader())
        },
        e => {
          dispatch(hideLoader())
          dispatch(autoCloseAlert('ERROR', e.response.data.message, 2500))
        }
      )
  }
}

export default fetchAuth