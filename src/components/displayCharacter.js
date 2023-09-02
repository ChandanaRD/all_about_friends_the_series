import React from 'react';
import "../assets/styles/main.scss";
import CustomFooter from './customFooter';
import { camelCaseToWords, randomMsgArray } from './util';

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
        }

        console.log("this.props.match.params.character" + this.props.match.params.character);

        this.getPosition = this.getPosition.bind(this);
    }
    characters = [
        "MonicaGeller", "RossGeller", "RachelGreen", "JoeyTribbiani", "PhoebeBuffay", "ChandlerBing"
    ];
    

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
        if(!this.state.isComponentVisible || this.state.character!==this.props.match.params.character){
            this.state.character = this.props.match.params.character
            return "Click anywhere on screen!";
        }

        var randomIndex = Math.floor(Math.random() * randomMsgArray[this.props.match.params.character].length);
        console.log(randomIndex);
        return randomMsgArray[this.state.character][randomIndex];
    }

    render() {
        return (<div className="componentWrapper">
            <header className="displayHeader">
                <p>
                    All about friends the series!
                </p>
            </header>
            <div className="characterWrapper" onClick={this.getPosition.bind(this)}>
                <div className="character character-solo">
                    <img className="characterImage characterImage-solo" src={require("../assets/images/" + this.props.match.params.character + ".jpg")} alt={this.props.match.params.character}>
                    </img>
                    <p className="characterText">
                        {camelCaseToWords(this.props.match.params.character)}
                    </p>
                </div>
                <div className="show" style={this.state.componentPosition}>
                    {this.generateRandomMsg()}
                </div>
            </div>
            <CustomFooter></CustomFooter>
        </div>


        )
    }
}

export default displayCharacter;


