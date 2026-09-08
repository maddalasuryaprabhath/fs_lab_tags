import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Match exact filename 'sample' (case-sensitive)
import Sample from '../src/pages/sample';
import Home from '../src/pages/home'; 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sample" element={<Sample />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;