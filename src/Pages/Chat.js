import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import MessageFrom from '../components/MessageFrom'
function Chat() {
    return <Container>
        <Row>
            <Col md={4}>
                <Sidebar />
            </Col>
            <Col md={8}>
                <MessageFrom />
            </Col>
        </Row>
    </Container>
}

export default Chat