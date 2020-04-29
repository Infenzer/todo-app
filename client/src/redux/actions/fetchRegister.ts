import Axios from "axios"
import {REGISTER} from '../types'
import showAlert from "./showAlert"
import hideAlert from "./hideAlert"

export interface IRegister {
  type: typeof REGISTER
}

const register = (): IRegister => ({
  type: REGISTER,
})

const fetchRegister = (email: string, password: string) => {
  return dispatch => {
    Axios.post('/api/auth/register', {email,password})
      .then(
        res => {
          console.log(res)
          console.log(res.data.message)

          dispatch(showAlert('SUCCESS', res.data.message))
          setTimeout(() => {
            dispatch(hideAlert())
            dispatch(register())
          }, 2500)

        },
        e => {
          console.log(e.response)
          console.log(e.response.data.message)
          dispatch(showAlert('ERROR', e.response.data.message))

          setTimeout(() => {
            dispatch(hideAlert())
          }, 2500)
        }
      )
  }
}

export default fetchRegister