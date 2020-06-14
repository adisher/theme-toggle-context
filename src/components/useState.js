import React, { useState } from 'react';
import Child from './child';

function MyState({value}) {
    let [state, stateSet] = useState(true)
    return (
        <div>
            <Child value = {value}/>
            This is {state? "valid" : "invalid"} useState: {value}
            <button onClick= {() => stateSet(!state)}>Change</button>
        </div>
    );
}

export default MyState;