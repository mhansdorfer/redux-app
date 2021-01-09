import { 
  Link, 
  Route, 
  Switch, 
  BrowserRouter as Router 
} from "react-router-dom";
import Home from "./users/containers/Home";
import Users from "./users/containers/Users";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux'
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));


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
            <Provider store={store}>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route>
                  <Users />
                </Route>
              </Switch>
            </Provider>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
