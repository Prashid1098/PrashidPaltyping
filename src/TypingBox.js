import React, {useState} from "react";
import "./styles.css";
const TypingBox = () => {
    const [time,setTime] = useState(15);
    let showtext="prepare bean throw successful pretty needle pressure idea upward safe difference silver shoot pay influence log least suddenly differ seen fresh least river read globe quick dream ice freedom voice tea wool former fuel difference exclaimed felt trade ants pound thrown border saddle mark camp organization afraid treated evening dog";
    let keychar=0;
    return(
        <div className="App">
            <div className="row-1">
                <div className="tdisplay">{time}</div>
                <div className="timedata">
                    <button onClick={()=>setTime(15)}>15s</button>
                    <button onClick={()=>setTime(30)}>30s</button>
                    <button onClick={()=>setTime(60)}>60s</button>
                </div>
            </div>
            <div className="text-box">
                {showtext.split("").map((char)=>(<span key={'char'+(keychar++)}>{char}</span>))}
            </div>
        </div>

    );
}

export default TypingBox;