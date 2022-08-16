import { Card, Container } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Attacher from "./Components/Attacher";
import Deployer from "./Components/Deployer";
import DeployerOrAttacher from "./Components/DeployerOrAttacher";
import { useState } from "react";


function App() {
  const [whoAreYou, setwhoAreYou] = useState(null);

  return (
    <Container fluid>
      <Card>
        <Card.Header>Morra Game</Card.Header>
        <Card.Body>
          {whoAreYou === null ? <DeployerOrAttacher iAmDeployer={() => setwhoAreYou('Deployer')} iAmAttacher={() => setwhoAreYou('Attacher')} />:""}
          {whoAreYou === 'Deployer' ? <Deployer/> : "" }
          {whoAreYou === 'Attacher' ? <Attacher/> : "" }
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
