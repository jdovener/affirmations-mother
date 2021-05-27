import React from "react";
import quotes from "./AffirmationDatabase";

class Affirmations extends React.Component {
    render() {

    return(
    <div
    className="fadeIn"
    key={Math.random()}
    style={{ color: "grey" }}
    >
    <h1 id="quote">"{this.props.quote}"</h1>
    </div>)
    }
}

export default Affirmations;