import React from "react";
import Affirmations from "./Affirmations";
import quotes from "./AffirmationDatabase";

class Affirmation extends React.Component {

  constructor() {
    super();
    const quotesArray = [];
    const tempQuotes = quotes.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 3; i +=1) {
      quotesArray.push(tempQuotes[i])
    };
    this.state={jake:quotesArray};
  };

  render() {
    const html = document.documentElement;
    html.style.backgroundColor = "black";

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        {this.state.jake.map(index => (<React.Fragment key={index.quote}><Affirmations quote={index.quote}/></React.Fragment>))}
        {this.state.jake.map(index => {console.log(this.state.jake, index)})}
        <button
          style={{ backgroundColor: "grey" }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          Affirmations
        </button>
      </div>
    );
  }
}

export default Affirmation;