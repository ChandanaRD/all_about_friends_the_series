import React from 'react';
import logo from '../assets/images/friends-transperent.png';
import '../assets/styles/main.scss';
import { Link } from 'react-router-dom'
import DisplayCharacter from './displayCharacter';


class mainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTempComp: false,
      x: 0,
      y: 0
    };
    this._onClickOfDiv = this._onClickOfDiv.bind(this);
  }

  _onClickOfDiv(e) {

    this.setState({
      showTempComp: true,
      x: e.screenX,
      y: e.screenY
    })
    this.showRandomComponent();
  }

  showRandomComponent(x, y) {
    if (this.state.showTempComp) {
      return <DisplayCharacter positionx={x} positiony={y} />
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this._onClickOfDiv.bind(this)}>
          <img src={logo} className="App-logo" alt="logo" />
            <h1 className="intro">Welcome to "F.R.I.E.N.D.S" wall of dialogues! </h1>
          <Link to="/chooseFavCharacter">
            <h2 className="App-link">
              choose your favorite character!
          </h2>
          </Link>
        </header>
      </div>
    );
  }

}


export default mainPage;
