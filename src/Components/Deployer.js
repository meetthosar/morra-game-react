import React, { useState } from 'react'
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap'
import Common from '../Common/common';

const common = new Common();

export default function Deployer() {
    const [contractInfo, setContractInfo] = useState(null);

    const [hand, setHand] = useState(0);
    const [guess, setGuess] = useState(0);
    const [message, setMessage] = useState();

    const deploy = () => {
        const promiseToDeploy= new Promise( async(deployContract, throwError) => {
            const {contractInfo, contract} = await common.getContractInfo();
        
            if(contractInfo != null && contract != null){ 
                setContractInfo(contractInfo);
                deployContract({contractInfo: contractInfo, contract:contract});
            }else 
                throwError();    

        });

        promiseToDeploy.then(
            (obj) => {
                console.log(obj);
                setContractInfo(obj.contractInfo);
                const interaction = {...common.reach.hasRandom, 
                    playHandAndGuess:playHandAndGuess, 
                    seeWinner : seeWinner, startGame:startGame,  
                    wager:10, deadline:10};
                common.backend.Player1(obj.contract,Object(interaction));
            },
            () => { throw('Account is not created' ); }
        )
        
    }
    const startGame = () => {
        setMessage("Let's start the game");
    }
    const playHandAndGuess = () => {
        return Object({hand:hand, guess:guess});
    }
    const seeWinner = () => {
        setMessage(`Player1 is the winner`);
    }

  return (
    <Form>
        { contractInfo != null ? <p>Contract Info : {contractInfo}</p>: ""}
        <fieldset disabled={ !(contractInfo === null)}>
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
                <Button variant='success' onClick={deploy}>Submit</Button>
            </Form.Group>
        </Col></Row>
        </fieldset>
    </Form>
  )
}
