import React, { useState } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Loading...");

    try {
      const res = await api.post("/admin/login", formData);
      localStorage.setItem("token", res.data.token);
      setStatus("Login successful!");
      navigate("/");
    } catch (err) {
      setStatus(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-3 mb-3 bg-gray-700 rounded outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-3 bg-gray-700 rounded outline-none"
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 p-3 rounded font-semibold"
        >
          Login
        </button>
        <p className="mt-3 text-center text-sm text-gray-400">
          Need to register?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-400 cursor-pointer"
          >
            Register
          </span>
        </p>
        {status && <p className="text-center mt-3 text-sm">{status}</p>}
      </form>
    </div>
  );
}
