import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Form, Card } from 'react-bootstrap';

const TaskInput = () => {
    const [taskValue, setTaskValue] = useState("");
    const [tasksArray, setTasksArray] = useState([]);

    const handleTaskValue = (e) => {
        setTaskValue(e.target.value);
    };

    const handleTaskSubmit = (e) => {
        e.preventDefault();

        const formatedDate = new Date().toLocaleString('es-CL', {
            dateStyle: 'short',
            timeStyle: 'medium',
            hour12: false,
        });

        const newTask = {
            id: crypto.randomUUID(),
            task: taskValue,
            date: formatedDate,
        };
        setTasksArray([...tasksArray, newTask]);
        setTaskValue('');
    };

    useEffect(() => {
        console.log(tasksArray);
    }, [tasksArray])

    return (
        <Card className='align-items-center m-4 pb-3 bg-light border rounded-3 shadow'>
            <Container className='m-3 p-3'>
                <label className='d-block mb-4' htmlFor="taskInput">
                    <h4 className='text-center fw-bold'>Crea tu tarea</h4>
                </label>
                <Row>
                    <form
                        className='d-flex gap-4 align-items-center'
                        onSubmit={handleTaskSubmit}
                    >
                        <Col className='col-9'>
                            <Form.Control
                                id='taskInput'
                                className='italic-placeholder'
                                placeholder='Componer una canción'
                                value={taskValue}
                                onChange={handleTaskValue}
                            />
                        </Col>

                        <Col className='col-3'>
                            <Button
                                type='submit'
                            >Crear Tarea</Button>
                        </Col>
                    </form>
                </Row>
            </Container>
        </Card>

    );
};

export default TaskInput;