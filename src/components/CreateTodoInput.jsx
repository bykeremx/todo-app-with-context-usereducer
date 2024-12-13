import axios from 'axios';
import React, { useState, useContext } from 'react'
import { Button, Input, Row } from 'reactstrap'
import TodoContext from '../context/TodoContext';


const CreateTodoInput = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { dispatch } = useContext(TodoContext);

    //add To do 
    const AddTodo = async () => {
        if (!title || !description) {
            alert("Başlık ve açıklama alanları doldurulmalıdır!");
            return;
        }
        const newTodo = {
            "title": title,
            "description": description,
            "due_date": new Date() // current date and time
        }
        const status = await axios.post("http://localhost:3001/todos", newTodo);
        if (status) {
            alert("To-Do başarıyla eklendi!");
            setTitle("");
            setDescription("");
            dispatch({
                type: 'AddTodo',
                payload: newTodo,
            });
        }
    }

    return (
        <>
            <Row className='mt-5'>
                <h3>Todo Oluştur !</h3>
            </Row>
            <Row >
                <div>
                    <span>Başlık</span>
                    <Input value={title} onChange={e => setTitle(e.target.value)}></Input>
                </div>
            </Row>
            <Row className='mt-1'>
                <div>
                    <span>Açıklama</span>
                    <Input value={description} type='textarea' onChange={e => setDescription(e.target.value)}></Input>
                </div>
            </Row>
            <hr></hr>
            <Row>
                <div>
                    <Button color='danger' className='w-100' onClick={AddTodo}>
                        Oluştur
                    </Button>
                </div>
            </Row>

        </>
    )
}

export default CreateTodoInput
