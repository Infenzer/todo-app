import { combineReducers } from "redux";
import todos from "./todos";
import alert from "./alert";
import register from "./register";
import loader from "./loader";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  todos,
  alert,
  register,
  loader
})

export default rootReducer