import React from 'react';
import logo from './shaolin.png';
import './App.css';
import QuestionWrapper from './components/QuestionWrapper'

class mainPage extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        showTempComp : false,
      };
      this._onClickOfDiv = this._onClickOfDiv.bind(this);
    }
  
  _onClickOfDiv(){
    this.setState({
    showTempComp : true,
    })
    this.showRandomComponent();
  }

  showRandomComponent(){
    if(this.state.showTempComp){
      return <QuestionWrapper />
    }
  }


  render(){
    return (
      <div className="App">
        <header className="App-header" onClick={this._onClickOfDiv}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Welcome!
          </p>
          {this.showRandomComponent()}
        </header>
      </div>
    );
  }
  
}
  

export default mainPage;
