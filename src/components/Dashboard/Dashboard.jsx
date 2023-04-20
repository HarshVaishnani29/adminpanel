import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { Activity, Calendar3, Cart3, Plus, Stack } from 'react-bootstrap-icons'
import './Dashboard.css'
import DatePicker from 'react-multi-date-picker';

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
                                <DatePicker
                                    range
                                    dateSeparator=" to "
                                    className='green'
                                />
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
                                            <div className='card'>
                                                <div className='p-3 d-flex'>
                                                    <div className='icons col-1 me-4 rounded-circle fs-6 mt-2'>
                                                        <div className='ic'>
                                                            <Cart3 />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 col ms-1"><h6 class="mb-1 lh-base">Purchase by James Price</h6><p class="text-muted mb-1">Product noise evolve <br />    smartwatch </p><small className="mb-0 text-muted">02:14 PM Today</small></div>
                                                </div>
                                                <div className='p-3 d-flex'>
                                                    <div className='icons-1 me-4 col-1 rounded-circle fs-6 mt-2'>
                                                        <div className='ic'>
                                                            <Stack />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 col ms-1">
                                                        <h6 className="mb-1 lh-base">
                                                            Added new style collection
                                                        </h6>
                                                        <p className="text-muted mb-1">
                                                            By Nesta Technologies
                                                        </p>
                                                        <div className="d-inline-flex gap-2 border border-dashed p-2 mb-2">
                                                            <a className="bg-light rounded p-1" href="">
                                                                <img src='../img/tshirt.png' alt="" className="img-fluid d-block" />
                                                            </a>
                                                            <a className="bg-light rounded p-1" href="">
                                                                <img src='../img/sofa.png' alt="" className="img-fluid d-block" />
                                                            </a>
                                                            <a className="bg-light rounded p-1" href="">
                                                                <img src='../img/bag.png' alt="" className="img-fluid d-block" />
                                                            </a>
                                                        </div>
                                                        <p className="mb-0 text-muted">
                                                            <small>9:47 PM Yesterday</small>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="acitivity-item py-3 d-flex ms-3 ">
                                                    <div className="flex-shrink-0 ico ms-0">
                                                        <img src='../img/velzon.jpg' alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-4">
                                                        <h6 className="mb-1 lh-base ">
                                                            Natasha Carey have liked the products
                                                        </h6>
                                                        <p className="text-muted mb-1 text-secondary">
                                                            Allow users to like products in your WooCommerce store.
                                                        </p>
                                                        <small className="mb-0 text-muted text-secondary">25 Dec, 2021</small>
                                                    </div></div>
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

export default Dashboard