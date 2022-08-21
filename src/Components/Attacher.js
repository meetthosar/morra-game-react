import React, { useState, useEffect } from 'react'
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap'
import Common from '../Common/common';

const common = new Common();

export default function Attacher() {
    const [contractInfo, setContractInfo] = useState(null);
    const [contract, setContract] = useState(null);
    const [hand, setHand] = useState(0);
    const [guess, setGuess] = useState(0);
    const [message, setMessage] = useState(null);
    const [acceptedWager, setAcceptedWager] = useState(false);
    const [showAccept, setShowAccept] = useState(false)
    const [playable, setPlayable] = useState(false);
    const [played, setPlayed] = useState(false);
    const [resolveAccept, setResolveAccept] = useState(null);
    const [resolvePlayandGuess, setResolvePlayandGuess] = useState(null);
    const [finish, setFinish] = useState(false);

    const attach = () => {
        const promiseToAttach = new Promise( async(attachContract, throwError) => {
            const contract =  common.attachToContract(contractInfo);
        
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
                    playHandAndGuess,
                    seeWinner,
                    informTimeout,
                     acceptWager,  
                    };
                common.backend.Player2(contract,Object(interaction));
                // setShowAccept(true);
            },
            () => { throw('Account is not created' ); }
        )
        
    }

    useEffect(() => {setHand(hand); setGuess(guess); if(finish) setContractInfo(null); }, [hand, guess,contractInfo]);

    const acceptWager = async () => {
    
      console.log('Attacher - Accept wager');
        setShowAccept(true);
        setMessage("Waiting to accept the wager");
        const acceptWagerPromise = await new Promise(acceptWage => {
          console.log('Inside promise');
          // setPlayable(true);
          setResolveAccept({acceptWage:acceptWage});
        });
        setMessage('Waiting for Player1 to play')
        
    }


    const playHandAndGuess = async () => {
      console.log('Attacher : In Play');
      setMessage('Playing...')
      setPlayable(true);
      setHand(null);
      setGuess(null);
      const playAgain = await new Promise(playguess => {
          setResolvePlayandGuess({playguess : playguess});
          setMessage('Waiting for Player1 to play')
      });
      // console.log(playAgain);
      return Object(playAgain);
  }

  const isPlayed = () => { resolvePlayandGuess.playguess({hand:hand, guess:guess}); setPlayed(true);setPlayable(false);}

  const accept = () => { resolveAccept.acceptWage();  setAcceptedWager(true);setShowAccept(false);
    setMessage('Waiting for Player1 to play')}

  const seeWinner = (outcome) => {
    console.log(JSON.parse(outcome));
      setFinish(true);
      setAcceptedWager(false);
      setShowAccept(false);
      setPlayable(false);
      setContractInfo(null);
      console.log(contractInfo);
      setMessage(`${common.winner[outcome]} is the winner`);
  }

  const reset = () => {
    setAcceptedWager(false);
    setShowAccept(false);
    setPlayable(false);
    setContractInfo(null);
  }

  const informTimeout = () => {
    setMessage("Time up");
  }

  return (
    <Form>
        <p>{message}</p>
        {!finish ?
        <fieldset disabled={ acceptedWager || showAccept }>
        <Row className="mb-3"><Col>
            <Form.Group>
                <FormLabel>Contract Info</FormLabel>
                <input className='form-control' type='text' value={contractInfo} onChange={(e) => setContractInfo(e.target.value)}/>
            </Form.Group>
        </Col></Row>
        <Row  className="mb-3"><Col>
            <Form.Group>
                <FormLabel></FormLabel>
                <Button variant='success' onClick={attach}>Submit</Button>
            </Form.Group>
        </Col></Row>
        </fieldset>
        :
        <Row  className="mb-3"><Col>
            <Form.Group>
                <FormLabel></FormLabel>
                <Button variant='info' onClick={() => {setFinish(false); setMessage(null)}}>Play Again</Button>
            </Form.Group>
        </Col></Row>
        }
        { showAccept ?
        <fieldset>
      
        <Row className="mb-3 text-center"><Col>
            <Form.Group>
                <FormLabel></FormLabel>
                <Button variant='warning' onClick={() => accept()}>Accept terms and Pay Wager</Button>
            </Form.Group>
        </Col></Row>
        </fieldset>
        : ""}

        {acceptedWager && playable ? 
          <fieldset>
            <Row><Col>
                <Form.Group>
                    <FormLabel>Play Hand</FormLabel>
                    <input className='form-control' type='text' value={hand} onChange={(e) => setHand(e.target.value)}/>
                </Form.Group>
            </Col></Row>
            <Row className="mb-3"><Col>
                <Form.Group>
                    <FormLabel>Guess the number</FormLabel>
                    <input className='form-control' type='text' value={guess} onChange={(e) => setGuess(e.target.value)}/>
                </Form.Group>
            </Col></Row>
            <Row><Col>
                <Form.Group>
                    <FormLabel></FormLabel>
                    <Button variant='success' onClick={isPlayed}>Submit</Button>
                </Form.Group>
            </Col></Row>
          </fieldset>
          : ""}
    </Form>
  )
}
