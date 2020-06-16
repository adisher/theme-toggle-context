import React, { useContext } from 'react';
import { ContextNum } from './context';


function MyState() {
    let {num, numChange} = useContext(ContextNum);
    
    return (
        <div>
            <h3>{num}</h3>
            <button onClick = {numChange}>Change</button>
        </div>
    );
}

export default MyState;