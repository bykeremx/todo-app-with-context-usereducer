import React, { useContext } from 'react'
import TodoCard from './TodoCard'
import TodoContext from '../context/TodoContext'
import { Col, Alert } from 'reactstrap';



const TodoListContainer = () => {
    const { todoReducer, dispatch } = useContext(TodoContext);
    const AlertShow = () => {
        return <>

            <Alert color="primary mt-3">
                <strong>
                    {todoReducer.length} Adet Todo Listesi Mevcut.
                </strong>
            </Alert>
        </>
    }
    return (
        <>
            {todoReducer.length > 0 ? todoReducer.map((todo, index) => (
                <Col xs={4} key={index}>
                    <TodoCard key={index} todo={todo} dispatch={dispatch} />
                </Col>
            )) : 
                <AlertShow />
            }

        </>
    )
}

export default TodoListContainer
