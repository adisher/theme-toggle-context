import React, { useContext, useState } from 'react';
import { ContextNum } from './context';

function Child() {
    const {num} = useContext(ContextNum);
    let {temp, setTemp} = useState();
    return (
        <div>
            {console.log(num)}
            <h3>Child: {num}</h3>
        </div>
    );
}

export default Child;