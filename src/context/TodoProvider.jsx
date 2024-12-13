import React, { useContext, useEffect, useReducer } from 'react'

import TodoContext from './TodoContext'
import axios from 'axios';



const initalState = [];
const TodoReducer = (state, action) => {

    switch (action.type) {
        case "AddTodo":
            return [...state, action.payload]
        case "DeleteTodo":
            return state.filter(todo => todo.id !== action.payload)
        case "ListTodos":
            return action.payload;
        default:
            console.log("Unknown Action " + action.type);
            break;
    }
}

const TodoProvider = ({ children }) => {
    const [todoReducer, dispatch] = useReducer(TodoReducer, initalState);
    useEffect(() => {
        try {
            axios.get("http://localhost:3001/todos").then((response) => {
                dispatch({
                    type: "ListTodos",
                    payload: response.data,
                });
            })
        } catch (error) {
            console.error(error);
        }
    }, []);



    return (

        <TodoContext.Provider value={{ todoReducer, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
