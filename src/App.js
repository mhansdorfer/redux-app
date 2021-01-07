import { 
  Link, 
  Route, 
  Switch, 
  BrowserRouter as Router 
} from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col xs={6} sm={4} md={3} lg={2} xl={2}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
          </Col>
          <Col>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route>
                    <Users />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
