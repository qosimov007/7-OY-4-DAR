import { combineReducers, createStore } from "redux";
import { todoReducer  } from "./todoreducer";
import { composeWithDevTools } from "@redux-devtools/extension";
const rootReducer = combineReducers({
    todos: todoReducer
});
export const store = ereateStore(rootReducer, composeWithDevTools() )