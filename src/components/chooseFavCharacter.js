import React from "react";
import "../styles/choose-fav-character.scss"

class chooseFavCharacter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            character : "phoebe"
        };
    }
    characters = ["rachel", "monica", "chandelor", "phoebe", "joey", "ross"];

    render(){
        return(<div className="charactersWrapper">
            <div className="character">
                <img src={require("../images/MonicaGeller.jpg")} alt ="Monica geller" className="characterImage"></img>        
            </div>
            <div className="character">
                <img src={require("../images/RossGeller.jpg")} alt ="Ross geller" className="characterImage"></img>        
            </div>
            <div className="character">
                <img src={require("../images/RachelGreen.jpg")} alt ="Rachel Green" className="characterImage"></img>        
            </div>
            <div className="character">
                <img src={require("../images/PhoebeBuffay.jpg")} alt ="Phoebe Buffay" className="characterImage"></img>        
            </div>
            <div className="character">
                <img src={require("../images/ChandlerBing.jpg")} alt ="Chandler Bing" className="characterImage"></img>        
            </div>
            <div className="character">
                <img src={require("../images/JoeyTribbiani.jpg")} alt ="Joey Tribbiani" className="characterImage"></img>        
            </div>
        </div>)
    };
}

export default chooseFavCharacter;