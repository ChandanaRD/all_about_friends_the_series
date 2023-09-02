import React from "react";
import "../assets/styles/main.scss";

import { Link } from "react-router-dom";
import CustomFooter from "./customFooter";



class chooseFavCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: "phoebe"
        };
    }

    characters = [
        "MonicaGeller", "RossGeller", "RachelGreen", "JoeyTribbiani", "PhoebeBuffay", "ChandlerBing"
    ];

    render() {
        return (<div>
            <header className="displayHeader">
                <p>
                    All about friends the series!
                </p>
            </header>
            <div className="characterWrapper characterWrapper-all">
            
                <div className="character character-all">
                    <Link to={"/displayCharacter" + this.characters[0]}>
                        <img src={require("../assets/images/MonicaGeller.jpg")} alt="Monica geller" className="characterImage characterImage-all"></img>
                        <p className="characterText">Monica Geller</p>
                    </Link>
                </div>
                <div className="character character-all">
                    <Link to={"/displayCharacter" + this.characters[1]}>
                        <img src={require("../assets/images/RossGeller.jpg")} alt="Ross geller" className="characterImage characterImage-all"></img>
                        <p className="characterText">Ross Geller</p>
                    </Link>
                </div>
                <div className="character character-all">
                    <Link to={"/displayCharacter" + this.characters[2]}>
                        <img src={require("../assets/images/RachelGreen.jpg")} alt="Rachel Green" className="characterImage characterImage-all"></img>
                        <p className="characterText">Rachel Green</p>
                    </Link>
                </div>
                <div className="character character-all">
                    <Link to={"/displayCharacter" + this.characters[3]}>
                        <img src={require("../assets/images/JoeyTribbiani.jpg")} alt="Joey Tribbiani" className="characterImage characterImage-all"></img>
                        <p className="characterText">Joey Tribbiani</p>
                    </Link>
                </div>
                <div className="character character-all">
                    <Link to={"/displayCharacter" + this.characters[4]}>
                        <img src={require("../assets/images/PhoebeBuffay.jpg")} alt="Phoebe Buffay" className="characterImage characterImage-all"></img>
                        <p className="characterText">Phoebe Buffay</p>
                    </Link>
                </div>
                <div className="character character-all">
                    <Link to={"/displayCharacter" + this.characters[5]}>
                        <img src={require("../assets/images/ChandlerBing.jpg")} alt="Chandler Bing" className="characterImage characterImage-all"></img>
                        <p className="characterText">Chandler Bing</p>
                    </Link>
                </div>
            </div>
            {/* <footer className="displayFooter">
            {this.characters.map(character => {
                        return (
                            <Link to={"/displayCharacter" + character}>
                                <p >
                                    {character}
                                </p>
                            </Link>
                        )
                    }
                )}
                <p>
                    <Link to="/">
                        Back
            </Link>
                </p>
            </footer> */}
            <CustomFooter></CustomFooter>
        </div>)
    };
}

export default chooseFavCharacter;