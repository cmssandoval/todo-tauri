import React from 'react';
import { Form } from 'react-bootstrap';

const TaskBrowser = () => {
    return (
        <Form.Control
            className='italic-placeholder'
            placeholder='Buscar tarea...'
        />
    );
};

export default TaskBrowser;