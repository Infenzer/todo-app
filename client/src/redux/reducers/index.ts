import { combineReducers } from "redux";
import todos from "./todos";
import alert from "./alert";
import register from "./register";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  todos,
  alert,
  register,
})

export default rootReducer