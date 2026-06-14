import React, { useEffect, useState } from 'react';
import { Container, Button, Row, Col, Form, Card } from 'react-bootstrap';

const TaskInput = () => {
    const [taskValue, setTaskValue] = useState("");
    const [tasksArray, setTasksArray] = useState([]);

    const handleTaskValue = (e) => {
        setTaskValue(e.target.value);
    };

    const handleTaskSubmit = () => {
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
        <Card className='m-4 bg-light border rounded-3 shadow'>
            <Container fluid className='my-3'>
                <h4 className='mb-4 text-center'>Crea tu tarea</h4>
                <Row>
                    <Col className='col-9 px-auto'>
                        <Form.Control
                            className='italic-placeholder'
                            placeholder='Componer una canción'
                            value={taskValue}
                            onChange={handleTaskValue}
                        />
                    </Col>

                    <Col className='col-3 d-flex align-items-end'>
                        <Button
                            className='w-100'
                            onClick={handleTaskSubmit}
                        >Crear Tarea</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};

export default TaskInput;