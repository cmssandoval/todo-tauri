import React from 'react';

import { Container, Navbar, Button } from 'react-bootstrap';

const TaskNavbar = () => {
    return (
        <Navbar expand="lg" bg="light" data-bs-theme="light">
            <Container fluid className='py-2 px-4'>
                <div className='d-flex'>
                    <Navbar.Brand className='p-0 m-0' href="#">
                        <h1 className='fw-bold m-0'>Todo List</h1>
                    </Navbar.Brand>
                </div>
                <div className='d-flex gap-4'>
                    <Button>Seleccionar tareas<br />completadas</Button>
                    <Button className='btn-danger'>Borrar todas las<br />tareas</Button>
                </div>
            </Container>
        </Navbar>
    );
};

export default TaskNavbar;