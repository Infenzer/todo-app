import { AUTH } from "../types"
import Axios from "axios"
import hideLoader from "./hideLoader"
import { autoCloseAlert } from "./showAlert"
import showLoader from "./showLoader"


export interface IAuth {
  type: typeof AUTH
}

const auth = (): IAuth => ({
  type: AUTH
})

const fetchAuth = (email: string, password: string) => {
  return dispatch => {
    dispatch(showLoader())

    Axios.post('/api/auth/login', {email, password})
      .then(
        res => {
          dispatch(auth())
        },
        e => {
          dispatch(hideLoader())
          dispatch(autoCloseAlert('ERROR', e.response.data.message, 2500))
        }
      )
  }
}

export default fetchAuth