import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DashBoard from "./Pages/DashBoard";
import Login from "./Pages/Login";
import Doctors from "./Pages/Doctors";
import AddNewDoctor from "./Pages/AddNewDoctor";
import AddNewAdmin from "./Pages/AddNewAdmin";
import Messages from "./Pages/Messages";
import SideBar from "./Pages/Sidebar";
import { Context } from "./main";
import axios from "axios";
const App = () => {
  const { isAuthenticated, setAuthenticated, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/admin/me",
          { withCredentials: true }
        );
        setAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  return (
    <>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor/addnew" element={<AddNewDoctor />} />
          <Route path="/admin/addnew" element={<AddNewAdmin />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
