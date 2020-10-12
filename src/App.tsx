import React, { useEffect, useRef }  from 'react';
import './App.css';
import COMP1 from './Components/COMP1/COMP1';
import Counter from './Components/Counter/Counter';
import Hover from './Components/Hover/Hover';
import Input from './Components/Input'



function App() {
  const firstRef=useRef<HTMLInputElement>(null);
  const secondRef=useRef<HTMLInputElement>(null);
  useEffect( ()=>{
    secondRef.current?.focus();
  }

  )
  return (
    <div className="App">
 <h1>Usref and forwardRef</h1>
<Input type="text" ref={firstRef} name="name1" placeholder="enter Text"/>
<br/>
<Input type="text" ref={secondRef} name="name1" placeholder="enter Text"/>
    </div>
  );
}

export default App;
