import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './styles/index.scss';
import mainPage from './components/mainPage';
import chooseFavCharacter from './components/chooseFavCharacter';
import displayCharacter from './components/displayCharacter';
import NotFound from './components/notFound';
import * as serviceWorker from './serviceWorker';

const componentRouter = (
    <Router>
      <div>
          <Switch>
          <Route exact path="/" component={mainPage} />
        <Route path="/chooseFavCharacter" component={chooseFavCharacter} />
        <Route path="/displayCharacter:character" component={displayCharacter} />
        <Route component={NotFound} />
          </Switch>
        
      </div>
    </Router>
  )

ReactDOM.render(componentRouter, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
