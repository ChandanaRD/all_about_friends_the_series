import React from 'react';
import "../styles/display.scss";

import { Link } from "react-router-dom";

// import "../styles/common.scss";
// import ReactDom from "react-dom";
// import * as serviceWorker from '../serviceworker';
// import welcomePage from  '../mainPage';

class displayCharacter extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            character: this.props.match.params.character,

            isComponentVisible: false,

            componentPosition:
            {
                left: '0 px',
                top: '0 px'
            }

        console.log("this.props.match.params.character" + this.props.match.params.character);

        this.getPosition = this.getPosition.bind(this);
    }
    characters = [
        "MonicaGeller", "RossGeller", "RachelGreen", "JoeyTribbiani", "PhoebeBuffay", "ChandlerBing"
    ];
    randomMsgArray = {
        "MonicaGeller": [
            "let's do it!",
            "that's my favourite kinda competition!",
            "you're fired!",
            "I'm always the host!",
            "I know I know I know!"
        ],

        "RossGeller": [

            "missisipi 1, missisipi 2 ...",
            "we were on a break!",
            "unagi!",
            "keynote speaker",
            "hey! that's my burger!"
        ],

        "RachelGreen": [
            "Monica, will you stop calling it a 'flower'?"
        ],
        "JoeyTribbiani": [

            "how you doing?",
            "Joey doesn't share food!",
            "soap opera",
            "i'm your best friend!"
        ],
        "PhoebeBuffay": [

            "smelly cat, smelly cat! what are the feeding you?",
            "meet Mr.Rob",
            "uh-huh uh-huh",
            "ross, i don't buy ur words",
            "Janet is your lobster, chandler! "
        ],

        "ChandlerBing": [
            "Mr. bing!"
        ]
    }
    // "you go girl!", "how You doing?", "chandelior", "Mr. bing!", "My lobster!"};

    // componentPosition = {
    //     left: this.props.positionx,
    //     right: this.props.positiony
    // }

    getPosition(e) {
        this.setState({
            isComponentVisible: true,
            componentPosition: {
                left: e.screenX,
                top: e.screenY - 100
            }
        })
        console.log("this.state.componentPosition : " + JSON.stringify(this.state.componentPosition));
        this.generateRandomMsg();
    }
    generateRandomMsg = () => {
        if(!this.state.isComponentVisible){
            return "Click anywhere on screen!";
        }

        var randomIndex = Math.floor(Math.random() * this.randomMsgArray[this.state.character].length);
        console.log(randomIndex);
        return this.randomMsgArray[this.state.character][randomIndex];
    }

    // displayFooter(character) {
    //     if (character !== this.state.character) {
    //         console.log(character);
    //         return (
    //             <a href={"/displayCharacter" + character} onClick={this.getPosition.bind(this)}>
    //                 <p >
    //                     {character}
    //                 </p>
    //             </a>
    //         )
    //     }
    // }

    // componentDidUpdate() {
    //     console.log("x: " + this.props.positionx + "y: " + this.props.positiony)
    //     this.componentPosition = {
    //         left: this.props.positionx + "px",
    //         top: this.props.positiony + "px"
    //     }
    // }

    render() {
        var imgString = "require(../images/" + this.state.character + ".jpg)";
        console.log(imgString);
        return (<div className="componentWrapper">
            <header className="displayHeader">
                <p>
                    All about friends the series!
                </p>
            </header>
            <div className="characterWrapper" onClick={this.getPosition.bind(this)}>
                <div className="character">
                    <img className="characterImage" src={require("../images/" + this.state.character + ".jpg")} alt={this.state.character}>
                    </img>
                    <p className="characterText">
                        {this.state.character}
                    </p>
                </div>
                <div className="show" style={this.state.componentPosition}>
                    {this.generateRandomMsg()}
                </div>
            </div>
            <footer className="displayFooter">
                {this.characters.map(character => {
                    if (character !== this.state.character) {
                        console.log(character);
                        return (
                            <a href={"/displayCharacter" + character}>
                                <p >
                                    {character}
                                </p>
                            </a>
                        )
                    }
                })}
                <Link to="/chooseFavCharacter">
                    <p> Back
                        </p>
                </Link>
            </footer>
        </div>


        )
    }
}

export default displayCharacter;


