import { IAuth } from "../actions/fetchAuth";


export interface AuthState {
  isAuth: boolean
}

type ActionType = IAuth

const initalState: AuthState = {
  isAuth: false
}

const auth = (state = initalState, action: ActionType): AuthState => {
  switch(action.type) {
    case 'AUTH':
      return {
        ...state,
        isAuth: true
      }
    default: return state
  }
}

export default auth