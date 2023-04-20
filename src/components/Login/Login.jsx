import React, { useState } from 'react'
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sessionStorage.setItem("LoginData", JSON.stringify(user));
        navigate('/')
    }

    return (
        <>
            <div className='d-flex vh-100 align-items-center justify-content-center auth-one-bg-position auth-one-bg'>
                <div className='bg-overlay'></div>


                <Form onSubmit={(e) => { handleSubmit(e) }} >
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={user.email} name="email" onChange={(e) => { handleChange(e) }} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={user.password} name="password" onChange={(e) => { handleChange(e) }} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Login