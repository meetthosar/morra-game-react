import React, { useState } from 'react'
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap'
import common from '../Common/common'

export default function Deployer() {
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [hand, setHand] = useState(0);
    const [guess, setGuess] = useState(0);
  return (
    <Form>
        <Row><Col>
            <Form.Group>
                <FormLabel>Hand</FormLabel>
                <input className='form-control' type='text' value={hand} onChange={(e) => setHand(e.target.value)}/>
            </Form.Group>
        </Col></Row>
        <Row><Col>
            <Form.Group>
                <FormLabel>Guess</FormLabel>
                <input className='form-control' type='text' value={guess} onChange={(e) => setGuess(e.target.value)}/>
            </Form.Group>
        </Col></Row>
        <Row><Col>
            <Form.Group>
                <FormLabel></FormLabel>
                <Button variant='success'>Submit</Button>
            </Form.Group>
        </Col></Row>
    </Form>
  )
}
