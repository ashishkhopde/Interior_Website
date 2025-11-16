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

  // Fetch existing services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/services`);
        setServices(res.data);
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

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Saving...");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/services`,
        formData
      );
      if (res.status === 200 || res.status === 201) {
        setStatus("Service added successfully!");
        setServices((prev) => [...prev, res.data]);
        setFormData({ title: "", description: "", image: "" });
      } else {
        setStatus("Failed to add service.");
      }
    } catch (err) {
      console.error("Error adding service:", err);
      setStatus("Error adding service.");
    }
  };

  return (
    <>
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Services</h1>

          {/* Add Service Form */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Add New Service
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
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition md:col-span-2"
              >
                Add Service
              </button>
            </form>

            {status && <p className="text-sm text-gray-500 mt-3">{status}</p>}
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {service.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-3">
                    {new Date(service.createdAt).toLocaleDateString()}
                  </p>
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
    </>
  );
}
