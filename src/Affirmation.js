import React, { useEffect, useState } from "react";
import Affirmations from "./Affirmations";
import quotes from "./AffirmationDatabase";

function Affirmation (props) {

  const [quotesArray, setQuotesArray] = useState([]);

  const [buttonIndex, setButtonIndex] = useState(0);

  useEffect (() => {
    const tempQuotes = quotes.sort(() => Math.random() - 0.5);
    const tempArray = [];
    for (let i = 0; i < 3; i +=1) {
      tempArray.push(tempQuotes[i])
    };
    setQuotesArray(tempArray);
  }, [buttonIndex]
    )

    const html = document.documentElement;
    html.style.backgroundColor = "black";

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        {quotesArray.map(index => (<React.Fragment key={index.quote}><Affirmations quote={index.quote}/></React.Fragment>))}
        <button
          style={{ backgroundColor: "grey" }}
          id="newquote"
          onClick={() => {let randomNumber = buttonIndex + 1 
            setButtonIndex(randomNumber)}}
        >
          Affirmations
        </button>
      </div>
    );
}

export default Affirmation;