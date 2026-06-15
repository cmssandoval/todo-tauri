import React from 'react';
import { Form } from 'react-bootstrap';

const TaskBrowser = ({ id }) => {
    return (
        <>
            <Form.Control
                id={id}
                className='italic-placeholder'
                placeholder='Filtrar tareas...'
            />
        </>
    );
};

export default TaskBrowser;