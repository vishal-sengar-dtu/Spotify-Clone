import React, { useState, useEffect } from 'react';
import Login from './Login';
import { getTokenFromUrl } from "./spotify";
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("I HAVE A TOKEN 👉 ", token)
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <h1>I am logged in</h1>
        ) : (
            <Login />
        )
      }
    </div>
  );
}

export default App;
