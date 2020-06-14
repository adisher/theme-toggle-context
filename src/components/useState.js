import React, { useState } from 'react';

function MyState() {
    let [state, stateSet] = useState(true)
    return (
        <div>
            This is {state? "valid" : "invalid"}
            <button onClick= {() => stateSet(!state)}>Change</button>
        </div>
    );
}

export default MyState;