import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
          <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
