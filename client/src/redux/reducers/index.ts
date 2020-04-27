import { combineReducers } from "redux";
import todos from "./todos";
import alert from "./alert";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  todos,
  alert
})

export default rootReducer