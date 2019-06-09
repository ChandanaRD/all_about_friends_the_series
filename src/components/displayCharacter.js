import React from 'react';
import "../styles/display.scss";
// import ReactDom from "react-dom";
// import * as serviceWorker from '../serviceworker';
// import welcomePage from  '../mainPage';

class displayCharacter extends React.Component{
    constructor(props){
        super(props);
    console.log("x: " +this.props.positionx+"y: "+this.props.positiony)
        console.log("x: "+ this.props.positionx + "y: " + this.props.positiony)
        
        this.state = {
            "randomMsg" : "hey!"
        }
    }
    randomMsgArray = ["you go girl!", "how You doing?", "chandelior", "Mr. bing!", "My lobster!"];
    componentPosition = {left: this.props.positionx,
    right:this.props.positiony}
    generateRandomMsg() {
        console.log("x: "+ this.props.positionx + "y: " + this.props.positiony)

        var randomIndex = Math.floor(Math.random()*this.randomMsgArray.length);
        console.log(randomIndex);
        return this.randomMsgArray[randomIndex];
    }

    componentDidUpdate(){
        console.log("x: "+ this.props.positionx + "y: " + this.props.positiony)
        this.componentPosition = {left: this.props.positionx + "px",
            top:this.props.positiony + "px"}
    }

    render(){
        return ( <div className = "show" style={this.componentPosition}>
            {this.generateRandomMsg()}
        </div>)
    }
}

export default displayCharacter;


