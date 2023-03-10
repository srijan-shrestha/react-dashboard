import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/public/Login/Login";
import Signup from "./pages/public/Signup/Signup";

import Dashboard from "./pages/private/Dashboard/Dashboard";
import Calculator from "./pages/private/Calculator/Calculator";

import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";
import UserList from "./pages/private/UerList/UserList";
import Movie from "./pages/private/Movie/Movie";
import Weather from "./pages/private/Weather/Weather";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>

        <div className="flex layout">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          <div className="content p-8 md:p-16">
            <Routes>
              <Route path="login" element={<Login />}></Route>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="movie" element={<Movie />} />
              <Route path="weather" element={<Weather />} />
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
