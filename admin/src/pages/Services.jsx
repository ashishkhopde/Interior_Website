import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Services() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [status, setStatus] = useState("");
  const [editingServiceId, setEditingServiceId] = useState(null);

  // Redirect if not logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      fetchServices();
    }
  }, []);

  // Fetch services (public)
  const fetchServices = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/service`);
      setServices(res.data.services || res.data.service || []);
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  // Handle input fields
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle file input
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Add or Update Service (Protected)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(editingServiceId ? "Updating service..." : "Saving service...");

    const token = localStorage.getItem("token");
    if (!token) {
      setStatus("Unauthorized! Please log in first.");
      return;
    }

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      if (imageFile) data.append("serviceImage", imageFile);

      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`, // ✅ token added
      };

      let res;
      if (editingServiceId) {
        res = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/service/${editingServiceId}`,
          data,
          { headers }
        );
      } else {
        res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/service`,
          data,
          { headers }
        );
      }

      if (res.status === 200 || res.status === 201) {
        setStatus(
          editingServiceId
            ? "✅ Service updated successfully!"
            : "✅ Service added successfully!"
        );
        setEditingServiceId(null);
        fetchServices();
      }

      // Reset form
      setFormData({ title: "", description: "" });
      setImageFile(null);
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      console.error("Error saving service:", err);
      setStatus(
        err.response?.data?.message ||
          "❌ Error saving service. Please log in again."
      );

      // Auto logout if token invalid
      if (err.response?.status === 401 || err.response?.status === 403) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
  };

  // Edit Service
  const handleEdit = (service) => {
    setFormData({
      title: service.title,
      description: service.description,
    });
    setEditingServiceId(service._id);
    setImageFile(null);
    setStatus("✏️ Editing mode enabled");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete Service (Protected)
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;

    const token = localStorage.getItem("token");
    if (!token) {
      setStatus("Unauthorized! Please log in first.");
      return;
    }

    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/service/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.status === 200) {
        setServices((prev) => prev.filter((s) => s._id !== id));
        setStatus("🗑️ Service deleted successfully!");
      }
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      console.error("Error deleting service:", err);
      setStatus(
        err.response?.data?.message ||
          "❌ Error deleting service. Please log in again."
      );
      if (err.response?.status === 401 || err.response?.status === 403) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
  };

  // Cancel Editing
  const handleCancel = () => {
    setEditingServiceId(null);
    setFormData({ title: "", description: "" });
    setImageFile(null);
    setStatus("");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Services</h1>

        {/* Add / Edit Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {editingServiceId ? "Edit Service" : "Add New Service"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            encType="multipart/form-data"
          >
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Service Title"
              className="border border-gray-300 rounded-md px-4 py-3 text-black w-full"
              required
            />

            {/* File input */}
            <input
              type="file"
              name="serviceImage"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-md px-4 py-3 text-black w-full"
              required={!editingServiceId}
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Service Description"
              className="border border-gray-300 rounded-md px-4 py-3 text-black h-32 resize-none w-full md:col-span-2"
              required
            />

            <div className="flex gap-4 md:col-span-2">
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
              >
                {editingServiceId ? "Update Service" : "Add Service"}
              </button>
              {editingServiceId && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-300 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          {status && (
            <p className="text-sm text-gray-500 mt-3 border-t pt-2">{status}</p>
          )}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm line-clamp-3 mb-3">
                  {service.description}
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  {new Date(service.createdAt).toLocaleDateString()}
                </p>

                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(service)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="text-red-600 hover:text-red-800 font-medium text-sm"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          {services.length === 0 && (
            <p className="text-gray-500 col-span-full text-center py-10">
              No services added yet.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
