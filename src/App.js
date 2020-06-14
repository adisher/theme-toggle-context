import React, { useState } from 'react';
import MyState from './components/useState';
import Child from './components/child';

function App() {
  // const state = useState("adil")
  return (
    <>
      <MyState/>
      <Child/>
      
    </>
  );
}

export default App;