import React, { useState } from 'react';
import MyState from './components/useState';
import {ContextNum} from './components/context'
import Child from './components/child';

function App() {
  let [num, setNum] = useState(10);
  
  function numChange() {
    setNum(state => ++state);
  }

  return (

    <ContextNum.Provider value = {
      {
        num, 
        numChange
      }
    }>
      <MyState />
      <Child/>
    </ContextNum.Provider>
  );
}

export default App;