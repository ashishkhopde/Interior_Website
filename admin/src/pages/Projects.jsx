import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    client: "",
    year: "",
    author: "",
    image: "",
    description: "",
    projectTitle: "",
  });
  const [status, setStatus] = useState("");

  // Fetch existing projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/project`);
        setProjects(res.data.project);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit new project
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Saving...");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/projects`,
        formData
      );
      if (res.status === 200 || res.status === 201) {
        setStatus("Project added successfully!");
        setProjects((prev) => [...prev, res.data]);
        setFormData({
          client: "",
          year: "",
          author: "",
          image: "",
          description: "",
          projectTitle: "",
        });
      } else {
        setStatus("Failed to save project.");
      }
    } catch (err) {
      console.error("Error adding project:", err);
      setStatus("Error adding project.");
    }
  };

  return (
    <>
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Projects</h1>

          {/* Add Project Form */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Add New Project
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                placeholder="Project Title"
                className="border border-gray-300 rounded-md px-4 py-3 text-black w-full"
                required
              />
              <input
                name="client"
                value={formData.client}
                onChange={handleChange}
                placeholder="Client Name"
                className="border border-gray-300 rounded-md px-4 py-3 text-black w-full"
                required
              />
              <input
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Year"
                className="border border-gray-300 rounded-md px-4 py-3 text-black w-full"
                required
              />
              <input
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author / Designer"
                className="border border-gray-300 rounded-md px-4 py-3 text-black w-full"
                required
              />
              <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="border border-gray-300 rounded-md px-4 py-3 text-black w-full md:col-span-2"
                required
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Project Description"
                className="border border-gray-300 rounded-md px-4 py-3 text-black h-32 resize-none w-full md:col-span-2"
                required
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition md:col-span-2"
              >
                Add Project
              </button>
            </form>

            {status && <p className="text-sm text-gray-500 mt-3">{status}</p>}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div
                key={proj._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={proj.image}
                  alt={proj.projectTitle}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">
                    {proj.projectTitle}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Client: <span className="font-medium">{proj.client}</span>
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Year: {proj.year} | By: {proj.author}
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {proj.description}
                  </p>
                </div>
              </div>
            ))}

            {projects.length === 0 && (
              <p className="text-gray-500 col-span-full text-center py-10">
                No projects added yet.
              </p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
