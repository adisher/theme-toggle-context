import React, { useContext } from 'react';
import { ContextTheme } from './context';

function Child() {
    const {theme, changeTheme} = useContext(ContextTheme);
    return (
        <div>
            {console.log(theme)}
            <h3>Child: {theme? "light" : "dark"}</h3>
            <button onClick={changeTheme}>{theme? "dark" : "light"}</button>
        </div>
    );
}

export default Child;