import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./users/containers/Home";
import Users from "./users/containers/Users";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Message from "./ui/Message";

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux'
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['ui', 'users']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

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
              <PersistGate loading={null} persistor={persistor}>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                    <Message />
                  </Route>
                  <Route>
                    <Users />
                  </Route>
                </Switch>
              </PersistGate>
            </Provider>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
