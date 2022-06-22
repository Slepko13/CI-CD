import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './navbar/navbar';

import AppRouter from './router/app-router';

function App() {
  //Just some text for test branch
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('init')
  const handleClick = () => {
    setToggle(toggle => !toggle);
  }
  useEffect(() => {
    setTimeout(() => {
      setData("data")
    }, 3000)
  }, [])
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <div data-testid='value-elem'>{value}</div>
      {toggle && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: "red" }}>{data}</div>}
      <h1 style={{ color: "blue" }}>Hello world</h1>
      <button data-testid='toggle-btn' onClick={handleClick}>Click me</button>
      <input type="text" placeholder='input value' value={value} onChange={e => setValue(e.target.value)} />

    </div>
  );
}

export default App;
