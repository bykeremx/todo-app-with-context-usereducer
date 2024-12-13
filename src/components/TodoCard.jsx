import axios from 'axios'
import React, { useEffect } from 'react'
import { Button, Card, CardText, CardTitle } from 'reactstrap'


const TodoCard = ({ todo, dispatch }) => {

    const DeleteTodo = async () => {
        try {
            console.log("Todo ID:", todo.id); // ID kontrolü
            await axios.delete(`http://localhost:3001/todos/${todo.id}`);
            dispatch({
                type: 'DeleteTodo',
                payload: todo.id
            })
        } catch (stateError) {
            console.log(stateError.message);
        }
    }
    return (
        <>
            <Card body className="my-2">
                <CardTitle tag="h5">
                    {todo.title}
                </CardTitle>
                <CardText>
                    {todo.description}
                </CardText>
                <Button color="primary" onClick={DeleteTodo}>
                    Sil
                </Button>
            </Card>
        </>
    )
}

export default TodoCard
