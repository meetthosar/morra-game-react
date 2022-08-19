import React, { useState, useEffect } from 'react'
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap'
import Common from '../Common/common';

const common = new Common();
const deadline = {ETH: 10, ALGO: 100, CFX: 1000}[common.reach.connector];
const wager = common.reach.parseCurrency(1);
/* import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../build/index.main.mjs';

import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect })); */

export default function Deployer() {
    const [contractInfo, setContractInfo] = useState(null);
    const [contract, setContract] = useState(null)
    const [account, setAccount] = useState(null);
    const [hand, setHand] = useState(0);
    const [guess, setGuess] = useState(0);
    const [message, setMessage] = useState();
    const [playable, setPlayable] = useState(true);
    const [played, setPlayed] = useState(false);
    const [contractDeployed, setContractDeployed] = useState(false);
    const [resolvePlayandGuess, setResolvePlayandGuess] = useState(null);

    const deploy = async () => {

        /* let promiseToCreateContract = new Promise( async (createContract, throwError) => {
            if(account === null){      
                var acc = await setupAccount();
                await setAccount(acc)
            }

            if(acc !== null)
                createContract(acc);
            else
                throwError();
        });

        promiseToCreateContract.then(
            async (account) => {
                const contr = await account.contract(backend);
                const interaction = {...reach.hasRandom, 
                    playHandAndGuess:playHandAndGuess, 
                    seeWinner : seeWinner, startGame:startGame,  
                    wager:10, deadline:10};
                
                setAccount(account);
                setContract(contr);            
                
                backend.Player1(contr,Object(interaction));
                
                const contractInfo = JSON.stringify( await contr.getInfo(), null, 2);
                setContractInfo(contractInfo);
            },
            () => { console.log("Failed to create account"); }
        ); */

        /* const {contractInfo, contract} = await common.getContractInfo();
        console.log(contractInfo, contract);
        setContractInfo(contractInfo);
        const interaction = {...common.reach.hasRandom, 
            playHandAndGuess:playHandAndGuess, 
            seeWinner : seeWinner, startGame:startGame,  
            wager:10, deadline:10};
        common.backend.Player1(contract,Object(interaction)); */


        const promiseToDeploy= new Promise( async(deployContract, throwError) => {

            const contract = await common.getContract();
            
            if(contract != null){ 
                deployContract(contract);
            }else 
                throwError();    

        });

        promiseToDeploy.then(
            async (contract) => {
                const interaction = {...common.reach.hasRandom, 
                    playHandAndGuess, 
                    seeWinner, informTimeout,startGame,  
                    wager, deadline};
                common.backend.Player1(contract,Object(interaction));

                const contractInfo = await common.getContractInfo(contract);
                setContractInfo(contractInfo);
                setPlayable(false);
                setContractDeployed(true);
            },
            () => { throw('Account is not created' ); }
        )
        
    }

    /* const setupAccount = async () => {
        const acc = await reach.getDefaultAccount(reach.parseCurrency(1000));
        const balAtomic = await reach.balanceOf(acc);       
        const balance = await reach.formatCurrency(balAtomic, 4);
        // setBalance(balance);
        return acc;
    } */

    const startGame = () => {
        setMessage("Let's start the game");
    }
    
    const playHandAndGuess = async () => {
        console.log('Deployer : In Play');
        setPlayable(true);
        setHand(null);
        setGuess(null);
        const playAgain = await new Promise(playguess => {
            setResolvePlayandGuess({playguess : playguess});
        });
        
        return Object(playAgain);
    }

    const isPlayed = () => { resolvePlayandGuess.playguess({hand:hand, guess:guess}); setPlayed(true); setPlayable(false);}

    const seeWinner = (outcome) => {
        console.log(JSON.parse(outcome));
        setContract(null);
        setContractInfo(null);
        setContractDeployed(false);
        setMessage(`${common.winner[JSON.parse(outcome)]} is the winner`);
    }

    const informTimeout = () => {
        setMessage("Time up");
    }

    useEffect(() => {setHand(hand); setGuess(guess)}, [hand, guess]);

  return (
    <Form>
        <p>{message}</p>
        { contractInfo != null ? <p>Contract Info : {contractInfo}</p>: ""}
        
        {!contractDeployed ? 
            <Row><Col>
                <Form.Group>
                    <FormLabel></FormLabel>
                    <Button variant='warning' onClick={deploy}>Start the Game</Button>
                </Form.Group>
            </Col></Row>
            : ""
        }
        {contractDeployed && playable ? 
        <fieldset disabled={ !playable }>
        <Row className='mb-3'><Col>
            <Form.Group>
                <FormLabel>Play Hand</FormLabel>
                <input className='form-control' type='text' value={hand} onChange={(e) => setHand(e.target.value)}/>
            </Form.Group>
        </Col></Row>
        <Row className='mb-3'><Col>
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
