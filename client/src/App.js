import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import AddEditDoctor from "./components/Admin/AddEditDoctor";
import Dashboard from "./components/Admin/Dashboard";
import Doctor from "./components/Admin/Doctor";
import Private from "./components/Admin/Private";
import PrivateRoute from "./components/Admin/PrivateRoute";
import Appointment from "./components/Appointment/Appointment";
import Commen from "./components/Appointment/Commen";
import Blog from "./components/Blog/Blog";
import BlogSingle from "./components/Blog/BlogSingle";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Page from "./components/Pages/Page";
import SectionFooter from "./components/Pages/Sub_pages/SectionFooter";
import SectionStaff from "./components/Pages/Sub_pages/SectionStaff";
import Service from "./components/Service/Service";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import { setUser } from "./redux/features/authSlice";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogSingle />} />
        <Route path="/service" element={<Service />} />
        <Route path="/staff" element={<SectionStaff />} />
        <Route path="/commen" element={<Commen />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/patients/search"
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>
          }
        />
        <Route
          path="/addPatient"
          element={
            <PrivateRoute>
              <Appointment />
            </PrivateRoute>
          }
        />
        <Route
          path="/editPatient/:id"
          element={
            <PrivateRoute>
              <Appointment />
            </PrivateRoute>
          }
        />
        <Route
          path="/doctors"
          element={
            <PrivateRoute>
              <Doctor />
            </PrivateRoute>
          }
        />
        <Route
          path="/addDoctor"
          element={
            <PrivateRoute>
              <AddEditDoctor />
            </PrivateRoute>
          }
        />
        <Route
          path="/editDoctor/:id"
          element={
            <PrivateRoute>
              <AddEditDoctor />
            </PrivateRoute>
          }
        />
      </Routes>
      <SectionFooter />
    </BrowserRouter>
  );
}

export default App;
