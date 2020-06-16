import React, { useState } from 'react';
import {ContextTheme} from './components/context'
import Child from './components/child';
import MyState from './components/useState';

function App() {
  let [theme, setTheme] = useState(true)
  function changeTheme() {
    setTheme(state => !state)
}
  return (

    <ContextTheme.Provider value = {
      {
        theme,
        changeTheme
      }}>
      <MyState/>
      <Child/>
    </ContextTheme.Provider>
  );
}

export default App;