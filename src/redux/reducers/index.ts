import { combineReducers } from "redux";
import todos from "./todos";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  todos,
})

export default rootReducer