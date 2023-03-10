import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/public/Login/Login";
import Signup from "./pages/public/Signup/Signup";
import Note from "./components/Note/Note";
import Dashboard from "./pages/private/Dashboard/Dashboard";
import Calculator from "./components/Calculator/Calculator";
import Layout from "./components/Layout/Layout";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";
import UserList from "./components/UerList/UserList";
import Movie from "./pages/private/Movie/Movie";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} /> */}

        <div className="flex layout">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <div className="content p-8 md:p-16">
            <Routes>
              <Route path="login" element={<Login />}></Route>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="movie" element={<Movie />} />
              <Route path="calculator" element={<Calculator />} />
              <Route path="users" element={<UserList />} />
          

              <Route path="signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
