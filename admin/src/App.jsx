import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

import AdminNavbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Message from "./pages/Message";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import AdminRegister from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

// 👇 Separate component so we can use `useLocation`
function AppContent() {
  const location = useLocation();

  // Hide navbar on login/register pages
  const hideNavbar = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <AdminNavbar />}

      <Routes>
        {/* Redirect root to /admin */}
        <Route path="/" element={<Navigate to="/admin" replace />} />

        {/* Protected (only if token exists) */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/message"
          element={
            <PrivateRoute>
              <Message />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/projects"
          element={
            <PrivateRoute>
              <Projects />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/blog"
          element={
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/services"
          element={
            <PrivateRoute>
              <Services />
            </PrivateRoute>
          }
        />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<AdminRegister />} />
      </Routes>
    </>
  );
}
