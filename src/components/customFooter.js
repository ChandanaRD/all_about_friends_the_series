import React from "react";
import "../assets/styles/main.scss";

import { Link } from "react-router-dom";
import { camelCaseToWords } from "./util";



class CustomFooter extends React.Component {
    characters = [
        "MonicaGeller", "RossGeller", "RachelGreen", "JoeyTribbiani", "PhoebeBuffay", "ChandlerBing"
    ];

    render() {
        return (<div>
                <footer className="displayFooter">
                {this.characters.map(character => {
                            return (
                                <Link to={"/displayCharacter" + character}>
                                    <p >
                                        {camelCaseToWords(character)}
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
            </div>

    )};
}

export default CustomFooter;