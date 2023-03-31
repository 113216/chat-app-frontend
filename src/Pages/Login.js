import React, { useContext } from 'react'
import { useState } from 'react'
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap'
import { useLoginUserMutation } from '../services/appApi'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Login.css'
import { AppContext } from '../context/appContext'


function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser, { isLoading, error }] = useLoginUserMutation()
    const navigate = useNavigate()
    const { socket } = useContext(AppContext)

    function haldleLogin(e) {
        e.preventDefault()

        //login ligic   

        loginUser({ email, password }).then(({ data }) => {
            if (data)
                //socket work
                socket.emit('new-user')
            //navigate to the chat
            navigate('/chat')
        })
    }


    return (
        <Container>
            <Row>
                <Col md={5} className='login__bg'>
                </Col>
                <Col md={7} className='align-items-center justify-content-center d-flex flex-diretion-column'>
                    <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={haldleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {error && <p className='alert alert-danger'>{error.data}</p>}
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                            <Button variant="primary" type="submit" style={{ marginTop: '20px' }}>
                                {isLoading ? <Spinner animation='grow' /> : "Login"}
                            </Button>
                            <div className='py-4'>
                                <p className='text-center'>
                                    Don't have an account ? <Link to={'/signup'}>Signup</Link>
                                </p>
                            </div>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}

export default Login