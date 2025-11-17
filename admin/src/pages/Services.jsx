import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Services() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [status, setStatus] = useState("");
  const [editingServiceId, setEditingServiceId] = useState(null);

  // Fetch existing services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/service`);
        setServices(res.data.services);
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    };
    fetchServices();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Add or Update Service
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(editingServiceId ? "Updating service..." : "Saving service...");

    try {
      if (editingServiceId) {
        const res = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/service/${editingServiceId}`,
          formData
        );
        if (res.status === 200) {
          setStatus("✅ Service updated successfully!");
          setServices((prev) =>
            prev.map((s) =>
              s._id === editingServiceId ? res.data.service : s
            )
          );
          setEditingServiceId(null);
        }
      } else {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/service`,
          formData
        );
        if (res.status === 201) {
          setStatus("✅ Service added successfully!");
          setServices((prev) => [...prev, res.data.service]);
        }
      }

      setFormData({ title: "", description: "", image: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      console.error("Error saving service:", err);
      setStatus("❌ Error saving service.");
    }
  };

  // Handle edit
  const handleEdit = (service) => {
    setFormData({
      title: service.title,
      description: service.description,
      image: service.image,
    });
    setEditingServiceId(service._id);
    setStatus("✏️ Editing mode enabled");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/service/${id}`);
      setServices((prev) => prev.filter((s) => s._id !== id));
      setStatus("🗑️ Service deleted successfully!");
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      console.error("Error deleting service:", err);
      setStatus("❌ Error deleting service.");
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingServiceId(null);
    setFormData({ title: "", description: "", image: "" });
    setStatus("");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Services</h1>

        {/* Add / Edit Service Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {editingServiceId ? "Edit Service" : "Add New Service"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Service Title"
              className="border border-gray-300 rounded-md px-4 py-3 text-black w-full"
              required
            />
            <input
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="border border-gray-300 rounded-md px-4 py-3 text-black w-full"
              required
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

        {/* Service Cards (same as Blog & Project layout) */}
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
