import React, { useEffect } from 'react';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import './App.css';

function App() {
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log("I HAVE A TOKEN 👉 ", token)
  }, []);

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
