import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Note from "./components/Note/Note";
import Dashboard from "./pages/Dashboard/Dashboard";
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/note" element={<Note />}/>
            <Route path="/Calculator" element={<Calculator />}/>
          </Route>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Note />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
