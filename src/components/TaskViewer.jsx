import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import TaskBrowser from './TaskBrowser';

const TaskViewer = () => {
    return (
        <>
            <Card className='m-4 bg-light border rounded-3 shadow'>
                <Container fluid className='m-3 p-3'>
                    <Row>
                        <Col className='col-4'>
                            <label className='d-block' htmlFor="pendTaskFilter"><h4 className='text-center'>Filtrar tareas</h4></label>
                            <TaskBrowser id='pendTaskFilter' />
                        </Col>
                        <Col className='col-8'>
                            <h4 className='mb-4 text-center fw-bold'>Tareas pendientes</h4>
                            <table className='w-100'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tarea</th>
                                        <th><span>✅</span></th>
                                        <th><span>❌</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1234</td>
                                        <td>Hacer tarea</td>
                                        <td><Button className='p-0 btn-light'>✅</Button></td>
                                        <td><Button className='p-0 btn-light'>❌</Button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </Card>
            <Card className='m-4 bg-light border rounded-3 shadow'>
                <Container fluid className='m-3 p-3'>
                    <Row>
                        <Col className='col-4'>
                            <label className='d-block' htmlFor="compTaskFilter"><h4 className='text-center'>Filtrar tareas</h4></label>
                            <TaskBrowser id='compTaskFilter' />
                        </Col>
                        <Col className='col-8'>
                            <h4 className='mb-4 text-center fw-bold'>Tareas completadas</h4>
                            <table className='w-100'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tarea</th>
                                        <th><span>✅</span></th>
                                        <th><span>❌</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1234</td>
                                        <td>Hacer tarea</td>
                                        <td></td>
                                        <td>❌</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </>
    );
};

export default TaskViewer;