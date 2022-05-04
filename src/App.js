import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing'
import React, { useState } from 'react';
import Cursor from './components/Cursor'
function App() {

  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0
})
function handleMouseMove(ev) { 
setMousePosition({left: ev.pageX, top: ev.pageY}); 
}
  return (
    <div className="App">
      <Landing />
      <Cursor/>
    </div>
  );
}

export default App;
