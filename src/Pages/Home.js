import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './Home.css';

function Home() {
    return (
        <Row>
            <Col md={6} className="d-flex flex-diretion-column align-items-center justify-content-center" style={{ paddingLeft: '50px' }}>
                <div>
                    <h1>Share The World With Your Friends</h1>
                    <p>Chat App Lets You Connect With World</p>
                    <LinkContainer to={'/chat'}>
                        <Button variant='success' > Get Started   <i className='fas fa-comments home-message-icon'></i></Button>

                    </LinkContainer>
                </div>

            </Col>
            <Col md={6} className='home__bg'>
            </Col>
        </Row>
    )
}

export default Home