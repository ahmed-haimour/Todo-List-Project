import { createContext, useReducer, useContext } from "react";
import todosReducer from "../reducers/todosReducer";
import { create } from "@mui/material/styles/createTransitions";

export const TodosContext = createContext([]);
const DispatchContext = createContext(null);

const TodosProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todosReducer, []);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}
export const useTodos = () => {
    return useContext(TodosContext);
}

export const useTodosDispatch = () => {
    return useContext(DispatchContext);
}
export default TodosProvider;
