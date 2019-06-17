import React from "react";
import "../styles/choose-fav-character.scss";
import { Link } from "react-router-dom";

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
            <div className="charactersWrapper">
            
                <div className="character">
                    <Link to={"/displayCharacter" + this.characters[0]}>
                        <img src={require("../images/MonicaGeller.jpg")} alt="Monica geller" className="characterImage"></img>
                        <p className="characterText">Monica Geller</p>
                    </Link>
                </div>
                <div className="character">
                    <Link to={"/displayCharacter" + this.characters[1]}>
                        <img src={require("../images/RossGeller.jpg")} alt="Ross geller" className="characterImage"></img>
                        <p className="characterText">Ross Geller</p>
                    </Link>
                </div>
                <div className="character">
                    <Link to={"/displayCharacter" + this.characters[2]}>
                        <img src={require("../images/RachelGreen.jpg")} alt="Rachel Green" className="characterImage"></img>
                        <p className="characterText">Rachel Green</p>
                    </Link>
                </div>
                <div className="character">
                    <Link to={"/displayCharacter" + this.characters[3]}>
                        <img src={require("../images/JoeyTribbiani.jpg")} alt="Joey Tribbiani" className="characterImage"></img>
                        <p className="characterText">Joey Tribbiani</p>
                    </Link>
                </div>
                <div className="character">
                    <Link to={"/displayCharacter" + this.characters[4]}>
                        <img src={require("../images/PhoebeBuffay.jpg")} alt="Phoebe Buffay" className="characterImage"></img>
                        <p className="characterText">Phoebe Buffay</p>
                    </Link>
                </div>
                <div className="character">
                    <Link to={"/displayCharacter" + this.characters[5]}>
                        <img src={require("../images/ChandlerBing.jpg")} alt="Chandler Bing" className="characterImage"></img>
                        <p className="characterText">Chandler Bing</p>
                    </Link>
                </div>
            </div>
            <footer className="displayFooter">
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
            </footer>
        </div>)
    };
}

export default chooseFavCharacter;