import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

import TaskBrowser from './TaskBrowser';

const TaskViewer = () => {
    return (
        <Card className='m-4 bg-light border rounded-3 shadow'>
            <Container fluid className='my-3'>
                <Row>
                    <Col className='col-4'>
                        <h4 className='text-center'>Filtrar tareas</h4>
                        <TaskBrowser />
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};

export default TaskViewer;