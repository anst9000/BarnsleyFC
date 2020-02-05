import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import Index from './components/Index'
import Info from './components/Info'
import PlayerInfo from './components/PlayerInfo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <Container>
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/info" component={Info} />
                <Route path="/:id" component={PlayerInfo} />
              </Switch>
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
