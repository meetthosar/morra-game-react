import React, { useState } from 'react'
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap'
import Common from '../Common/common';

const common = new Common();

export default function Attacher() {
    const [contractInfo, setContractInfo] = useState(null);
    const [contract, setContract] = useState(null);
    const [hand, setHand] = useState(0);
    const [guess, setGuess] = useState(0);
    const [message, setMessage] = useState();

    const attach = () => {
        const promiseToAttach = new Promise( async(attachContract, throwError) => {
            const contract = await common.attachToContract(contractInfo);
        
            if(contractInfo != null && contract != null){ 
                setContract(contract);
                attachContract(contract);
            }else 
                throwError();    

        });

        promiseToAttach.then(
            (contract) => {

                const interaction = {
                  ...common.reach.hasRandom, 
                    playHandAndGuess:playHandAndGuess, 
                    seeWinner : seeWinner, acceptWager:acceptWager,  
                    wager:10, deadline:10};
                common.backend.Player2(contract,Object(interaction));
            },
            () => { throw('Account is not created' ); }
        )
        
    }
    const acceptWager = () => {
        setMessage("Accepted the wager");
    }
    const playHandAndGuess = () => {
        return Object({hand:hand, guess:guess});
    }
    const seeWinner = () => {
        setMessage(`Player1 is the winner`);
    }

  return (
    <Form>
        <fieldset disabled={ !(contract === null)}>
        <Row><Col>
            <Form.Group>
                <FormLabel>Contract Info</FormLabel>
                <input className='form-control' type='text' value={contractInfo} onChange={(e) => setContractInfo(e.target.value)}/>
            </Form.Group>
        </Col></Row>
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
                <Button variant='success' onClick={attach}>Submit</Button>
            </Form.Group>
        </Col></Row>
        </fieldset>
    </Form>
  )
}
