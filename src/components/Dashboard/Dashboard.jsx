import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { Activity, Calendar3, Plus } from 'react-bootstrap-icons'

function Dashboard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='container-fluid'>
                <div className='d-flex py-3'>
                    <div className='col-6'>
                        <h5>
                            Good Morning, Bro
                        </h5>
                        <p className='m-0'>
                            Hare's what's happening with your store today.
                        </p>
                    </div>
                    <div className='col-6 d-flex align-items-center justify-content-end'>
                        <div className='calender d-flex align-items-center px-2'>
                            <div className='w-10 bg-white shadow-sm p-2 rounded-start'>
                                <span>
                                    01 Jan ,2033 to 31 Jan ,2023
                                </span>
                            </div>
                            <div className='w-2 bg-primary p-2 text-white rounded-end'>
                                <Calendar3 />
                            </div>
                        </div>
                        <div className='cta-btn px-2'>
                            <div className=''>
                                <Button variant='success'>
                                    <Plus />
                                    <span>
                                        Add Product
                                    </span>
                                </Button>
                            </div>
                        </div>
                        <div className='recentactivity px-2'>
                            <div className=''>
                                <Button variant="primary" onClick={handleShow}>
                                    <Activity />
                                </Button>

                                <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Recent Activity</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div className='card'>
                                            <div className='p-5'>
                                                12345
                                            </div>
                                        </div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;