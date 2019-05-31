import React from 'react';
// import ReactDom from "react-dom";
// import * as serviceWorker from '../serviceworker';
// import welcomePage from  '../mainPage';

class question_wrapper extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            "randomMsg" : "hey!"
        }
    }
    randomMsgArray = ["you go girl!", "how You doing?", "chandelior", "Mr. bing!", "My lobster!"];

    generateRandomMsg() {
        var randomIndex = Math.floor(Math.random()*this.randomMsgArray.length);
        console.log(randomIndex);
        return this.randomMsgArray[randomIndex];
    }

    render(){
        return ( <div>
            {this.generateRandomMsg()}
        </div>)
    }
}

export default question_wrapper;


