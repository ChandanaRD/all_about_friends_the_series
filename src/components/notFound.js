import React from "react";
import { Link } from 'react-router-dom';
import '../styles/main.scss'

function Notfound() {
    return (<div>
        <h1 className= "center">
            You seem to have navigated to a page that is not found!
            </h1>
        <h2 className="center">
            <code>
                <Link to="/" className="default-link">Click here</Link> to nagivate back to home :)
            </code>
        </h2>
    </div>);
}

export default Notfound;