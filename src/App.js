import React, { useState } from 'react';
import MyState from './components/useState';
import Child from './components/child';

function App() {
  const num = 2;
  return (
    <>
      <MyState value = {num}/>
      
    </>
  );
}

export default App;