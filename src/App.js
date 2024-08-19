import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.js';

function App() {
  return (
    <>
        <Routes>
              <Route path='/' element={<Login/>}></Route>

        </Routes>
    </>
  );
}

export default App;
