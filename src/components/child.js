import React, { useContext } from 'react';
import { ContextTheme } from './context';


function Child() {
    const {theme, ChangeTheme} = useContext(ContextTheme);
    
    return (
        <div>
            {console.log(theme)}
            <h3>Child: {theme? "light" : "dark"}</h3>
            {console.log(theme? "light" : "dark")}
            <button onClick = {ChangeTheme}>{theme? "dark" : "light"}</button>
        </div>
    );
}

export default Child;