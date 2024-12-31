import { TodoListReducer } from "./inputReducer";
import { combineReducers } from "redux";

const RootReducers = combineReducers({
            addTodo : TodoListReducer,
        }
    )

export default RootReducers;