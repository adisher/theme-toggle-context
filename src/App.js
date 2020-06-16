import React, { useState } from 'react';
import Child from './components/child';
import MyState from './components/useState';
import { ContextTheme } from './components/context';

function App() {
  const [theme, setTheme] = useState(true);
  function ChangeTheme() {
    setTheme(state => !state)
  }
  
  return (
    <ContextTheme.Provider value = {
      {
        theme,
        ChangeTheme
      }
    }>
      <Child/>
      <MyState/>
    </ContextTheme.Provider>
  );
}

export default App;