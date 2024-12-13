import React, { useContext, useEffect, useReducer } from 'react'

import TodoContext from './TodoContext'


const initalState = [];
const TodoReducer = (state, action) => {

    switch (action.type) {
        case "AddTodo":
            return [...state,action.payload]
        case "DeleteTodo":
            return state.filter(todo => todo.id!== action.payload)
        case  "ListTodos":
            return action.payload;
        default:
            console.log("Unknown Action " + action.type);
            break;
    }
}

const TodoProvider = ({ children }) => {



    const [todoReducer, dispatch] = useReducer(TodoReducer,initalState);
    console.log(todoReducer);
    
    return (

        <TodoContext.Provider value={{ todoReducer, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
