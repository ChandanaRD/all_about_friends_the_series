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
            "I know I know I know!",
            "I KNOW!",
            "Seven! Seven! Seven!",
            "Welcome to the real world. It sucks. You're gonna love it.",
            "Okay, everybody relax. This is not even a date. It's just two people going out to dinner and not having sex.",
            "If I Am Harsh With You It's Only Because You're Doing It Wrong.",
        ],

        "RossGeller": [
            "My sandwich? My sandwich!",
            "missisipi 1, missisipi 2 ...",
            "we were on a break!",
            "unagi!",
            "keynote speaker",
            "hey! that's my burger!",
            "Pivot!",
            "Unagi Is A Total State Of Awareness.",
            "You-You-You... You Threw My Sandwich Away...",
            "I Grew Up In A House With Monica, Okay. If You Didn't Eat Fast, You Didn't Eat.",
            "I Am This Close To Tugging On My Testicles Again.",
            "I'm The Holiday Armadillo!",
            "Get Off My Sister!",

        ],

        "RachelGreen": [
            "Monica, will you stop calling it a 'flower'?",
            "It's like all my life everyone's always told me, 'You're a shoe!...'",
            "No Uterus, No Opinion.",
            "Why can’t parents just stay parents, you know? Why do they have to become people?",
            "Oh, I’m sorry. Did my back hurt your knife?",
            "You know what? I just shouldn’t be allowed to make decisions anymore.",
            "How do you expect me to grow if you won't let me blow?",
            "He's so pretty, I want to cry.",
            "How do we end up with these jerks? We're good people.",
            "Oh, that's okay, girls tend to not like me.",
            "Does this look like something the girlfriend of a paleontologist would wear?",
            "Everyone I know is either getting married or getting pregnant...",
        ],
        "JoeyTribbiani": [

            "How you doin?",
            "Joey doesn't share food!",
            "I'm Dr. Drake Ramoray",
            "I'm your best friend!",
            "It's not that common, it doesn't happen to every guy, and it IS a big deal!",
            "If I Had To, I'd Pee On Any One Of You.",
            "Joey's apple",
            "OCCUPATION? DINOSAURS",
            "I had to eat everything.",
            "What would a Dinosour do?",
            "What's not to like? It's food!"

        ],
        "PhoebeBuffay": [

            "smelly cat, smelly cat! what are the feeding you?",
            "meet Mr.Rob",
            "uh-huh uh-huh",
            "ross, i don't buy ur words",
            "Janet is your lobster, chandler! ",
            "I wish I could, but I don't want to.",
            "He's her lobster.",
            "They don't know that we know they know we know.",
            "Chandler And Monica! Chandler And Monica! Ah! Oh, My Eyes! My Eyes!",
            "Come On, Ross, You're A Paleontologist. Dig A Little Deeper.",
            "You'll See. You'll All See.",
            "My Eyes, My Eyes!",
            "Something Is Wrong With The Left Phalange.",
            "Pick Up The Sock!",
            "Who's Singing?",
            "I Don't Even Have A 'Pla'.",

        ],

        "ChandlerBing": [
            "Mr. bing!",
            "Could I BE any more...?",
            "Could this BE any more...?",
            "I'm not great at the advice. Can I interest you in a sarcastic comment?",
            "I'm hopeless and awkward and desperate for love!",
            "Oh. My. God!",
            "No, you didn’t get me. It’s an electric drill, if you get me, you kill me!",
            "If I were a guy and…did I just say ‘if I were a guy?'",
            "Could we be more white trash?",
            "I tend to keep talking until somebody stops me.",
            "I’m Chandler. I make jokes when I’m uncomfortable.",
            "Actually, it’s Miss Chanandler Bong.",

        ]
    }
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


