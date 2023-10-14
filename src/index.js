import React from "react";
import ReactDOM  from "react-dom";
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

function Display()
{
    return(
        <div>
        <div className="typecat">
            TypeCat
           <span> <FontAwesomeIcon icon={faKeyboard} style={{color: "#e5e7eb",}} /> </span>
            </div>
        </div>
        )
}

ReactDOM.render(<Display/>, document.getElementById('root')); 
