import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function DeployerOrAttacher(props) {
  return (
    <Row>
        <Col md='4'>
            <Card>
                <Card.Header>Deployer</Card.Header>
                <Card.Body>
                    <Row><Col className='text-center'>
                        <Button variant='primary' size='lg' onClick={props.iAmDeployer}>Deployer</Button>
                    </Col></Row>
                </Card.Body>
            </Card>
        </Col>
        <Col md='4'></Col>
        <Col md='4'>
            <Card>
                <Card.Header>Attacher</Card.Header>
                <Card.Body>
                    <Row><Col className='text-center'>
                        <Button variant='success' size='lg' onClick={props.iAmAttacher}>Attacher</Button>
                    </Col></Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  )
}
