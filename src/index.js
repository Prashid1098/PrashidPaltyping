import React, {useState} from "react";
import ReactDOM  from "react-dom";
import "./styles.css";
import TypingBox from "./TypingBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
function Display()
{
    return(
        <div>
        <div className="typecat">
            <div>
            <span className="t-Header">TypeCat</span>
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
    const rootElement=document.querySelector("#root");
    setSelectedColor(colorSelect,rootElement);
    document.body.style.backgroundColor =window;
    document.body.style.backgroundColor = colorSelect;
    rootElement.style.backgroundColor=colorSelect;
  };
    
    return(
        <div className="options">
            <div className="Icons">         
                <a href="index.js"><FontAwesomeIcon icon={faEnvelope} style={{color: "#7096e1",}} /></a>
                <a href="index.js"><FontAwesomeIcon icon={faKeyboard} style={{color: "#7096e1",}} /></a>
                <a href="index.js"><FontAwesomeIcon icon={faUser} style={{color: "#7096e1",}} /></a>
                <a href="index.js"><FontAwesomeIcon icon="fa-brands fa-instagram" style={{color: "#d0d6e2",}} /></a>
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

function Tools()
{
    return(
        <div className="rel">
            <div><FontAwesomeIcon icon={faRotateLeft} size="2xl" style={{color: "#d3d9e4",}} /></div><br></br>
            <span className="esc">esc</span> <span> - reset</span><br></br><br></br>
            <div className="para-size">
                <span>10</span>
                <span>50</span>
                <span>80</span>
                <span>100</span>
                <strong> - no. of words</strong>
            </div>
        </div>
    )
}

function changecolor(colorselect,rootElement)
{
    document.body.style.backgroundColor = colorselect;
}



ReactDOM.render(<Display/>, document.getElementById('root')); 
ReactDOM.render(<Tools/>, document.getElementById('Inst'));
ReactDOM.render(<Handles/>, document.getElementById('foot')); 
