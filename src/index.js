import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './assets/styles/main.scss';
import mainPage from './components/mainPage';
import chooseFavCharacter from './components/chooseFavCharacter';
import displayCharacter from './components/displayCharacter';

const componentRouter = (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component={mainPage} />
            <Route path="/chooseFavCharacter" component={chooseFavCharacter} />
            <Route path="/displayCharacter:character" component={displayCharacter} />
            <Route component={mainPage} />
          </Switch>
        
      </div>
    </Router>
  )

ReactDOM.render(componentRouter, document.getElementById('root'));

