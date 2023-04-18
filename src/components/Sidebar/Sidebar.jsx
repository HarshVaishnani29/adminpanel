import React from 'react'
import logo from '../../images/logo.png'
import { Box, ChevronRight, Gear, People, Person, PersonLock, Speedometer } from 'react-bootstrap-icons';
import './Sidebar.css'
import { Accordion, useAccordionButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <a href='javascript:;' className='text-decoration-none'
            onClick={decoratedOnClick}
        >
            {children}
        </a>
    );
}

function Sidebar({show}) {
    return (
        <div className={show ? 'sidebar p-2 vh-100 bg-primary hide': 'sidebar p-2 vh-100 bg-primary'}>
            <div className='logo p-3'>
                <a href="javascript:;" className='text-center text-decoration-none'>
                    <h4>HARSH</h4>
                </a>
            </div>
            <nav>

                <h6 className='list-unstyled text-secondary'>Menu</h6>

                <Accordion defaultActiveKey="0">
                    <ul className='list-unstyled'>
                        <li className='p-2'>
                            <NavLink to="/" className=' d-flex text-decoration-none'>
                                <div className='icon col-1'>
                                    <Speedometer />
                                </div>
                                <div className='content col ms-2'>
                                    <span>
                                        Dashboard
                                    </span>
                                </div>
                                <div className='arrow'>
                                    <ChevronRight />
                                </div>
                            </NavLink>
                        </li>
                        <li className='p-2'>
                            <CustomToggle eventKey="0">
                                <NavLink href="#" className=' d-flex text-white text-decoration-none navlink'>
                                    <div className='icon col-1'>
                                        <People />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Users
                                        </span>
                                    </div>
                                    <div className='arrow'>
                                        <ChevronRight />
                                    </div>
                                </NavLink>
                            </CustomToggle>
                            <Accordion.Collapse eventKey="0">
                                <ul className='dropdownMenu list-unstyled p-3'>
                                    <li className='p-2'>
                                        <NavLink to="/user" className=' d-flex  text-decoration-none navlink'>
                                            <div className='icon col-1'>
                                                <Person />
                                            </div>
                                            <div className='content col ms-2'>
                                                <span>
                                                    User
                                                </span>
                                            </div>
                                        </NavLink>
                                    </li>
                                    <li className='p-2'>
                                        <NavLink to="/admin" className=' d-flex  text-decoration-none navlink'>
                                            <div className='icon col-1'>
                                                <PersonLock />
                                            </div>
                                            <div className='content col ms-2'>
                                                <span>
                                                    Admin
                                                </span>
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </Accordion.Collapse>
                        </li>
                        <li className='p-2'>
                            <a href="#" className=' d-flex  text-decoration-none navlink'>
                                <div className='icon col-1'>
                                    <Box />
                                </div>
                                <div className='content col ms-2'>
                                    <span>
                                        Products
                                    </span>
                                </div>
                                <div className='arrow'>
                                    <ChevronRight />
                                </div>
                            </a>
                        </li>
                        <li className='p-2'>
                            <a href="#" className=' d-flex  text-decoration-none navlink'>
                                <div className='icon col-1'>
                                    <Gear />
                                </div>
                                <div className='content col ms-2'>
                                    <span>
                                        Setting
                                    </span>
                                </div>
                                <div className='arrow'>
                                    <ChevronRight />
                                </div>
                            </a>
                        </li>
                    </ul>
                </Accordion>
            </nav>
        </div>
    )
}

export default Sidebar;