import React from 'react'
import { Container , Row , Col , Button } from 'react-bootstrap'
import './MailData.css'

const MailData = (props) => {
  return (
    <Container>
        <Row>
            <Col xs={1}>{props.toorFrom}</Col>
            <Col xs={3}><b>{props.mail.from}</b></Col>
            <Col xs={6}>{props.mail.title}</Col>
            <Col xs={2}><Button variant='danger'>Delete</Button></Col>
            <hr />
        </Row>     
    </Container>
  )
}

export default MailData
