import React, {useState} from "react";
import ReactDOM  from "react-dom";
import "./styles.css";
import TypingBox from "./TypingBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import {Instagram} from "@fortawesome/free-solid-svg-icons";
// import {faGithub} from "@fortawesome/free-solid-svg-icons";
// import {faLinkedin} from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
function Display()
{
    return(
        <div>
        <div className="typecat">
            <div>
            TypeCat
           <span> <FontAwesomeIcon icon={faKeyboard} style={{color: "#e5e7eb",}} /> </span>
            </div>
            <div>
            <FontAwesomeIcon icon={faUser} style={{color: "#dfe2e7",}} />
            </div>
            </div>
            <TypingBox />
        </div>
        )
}

function Handles()
{

    const [selectedColor, setSelectedColor] = useState("Darken-Black");

  const changeColor = (event) => {
    const colorSelect = event.target.value;
    setSelectedColor(colorSelect);
    document.body.style.backgroundColor =window;
    document.body.style.backgroundColor = colorSelect;
  };
    
    return(
        <div className="options">
            <div>
                {/* <span><FontAwesomeIcon icon={faGithub} style={{color: "#dde3ee",}} /></span> */}
                {/* <span><FontAwesomeIcon icon={faLinkedin} style={{color: "#e4e9f1",}} /></span> */}
                <a href="index.js"><FontAwesomeIcon icon={faEnvelopeCircleCheck} style={{color: "#d2d9e4",}} /></a>
                {/* <span><FontAwesomeIcon icon={Instagram} style={{color: "#dfe0e2",}} /></span> */}
            </div>
            <select id="colorSelector" onChange={changeColor} value={selectedColor}>
        <option value="#000000" onClick={changecolor("Darken-Black")}>Darken-Black</option>
        <option value="gray" onClick={changecolor("Coloured-Grey")}>Coloured-Grey</option>
        <option value="Pink" onClick={changecolor("Coloured-Pink")}>Coloured-Pink</option>
        <option value="green" onClick={changecolor("Coloured-Green")}>Coloured-Green</option>
    </select>
        </div>
    )
}

function changecolor(colorselect)
{
    document.body.style.backgroundColor = colorselect;
}



ReactDOM.render(<Display/>, document.getElementById('root')); 
ReactDOM.render(<Handles/>, document.getElementById('foot')); 
