import React, { useContext } from 'react'
import TodoCard from './TodoCard'
import TodoContext from '../context/TodoContext'
import { Col } from 'reactstrap';

const TodoListContainer = () => {
    const { todoReducer, dispatch } = useContext(TodoContext);
    return (
        <>
            {todoReducer.length > 0  ? todoReducer.map((todo,index) => (
                <Col xs={4} key={todo.id}>
                    <TodoCard key={index} todo={todo} dispatch={dispatch} />
                </Col>
            )):'Şuan Bir Todo Eklemediniz !'}

        </>
    )
}

export default TodoListContainer
