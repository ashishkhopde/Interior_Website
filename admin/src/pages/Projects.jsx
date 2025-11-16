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
  const [editingProject, setEditingProject] = useState(null);

  async function fetchProjects () {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/project`);
        console.log(res.data)
        setProjects(res.data.project);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

  // Fetch existing projects
  useEffect(() => {
    fetchProjects();
  }, []);


  // Handle input
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit new or updated project
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(editingProject ? "Updating..." : "Saving...");

    try {
      if (editingProject) {
        // Update existing project
        const res = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/projects/${editingProject._id}`,
          formData
        );
        if (res.status === 200) {
          setStatus("Project updated successfully!");
          setEditingProject(null);
          fetchProjects();
        }
      } else {
        // Add new project
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/projects`,
          formData
        );
        if (res.status === 200 || res.status === 201) {
          setStatus("Project added successfully!");
          setProjects((prev) => [...prev, res.data]);
        }
      }

      // Reset form
      setFormData({
        client: "",
        year: "",
        author: "",
        image: "",
        description: "",
        projectTitle: "",
      });
    } catch (err) {
      console.error("Error submitting project:", err);
      setStatus("Error saving project.");
    }
  };

  // Edit project
  const handleEdit = (proj) => {
    setEditingProject(proj);
    setFormData({
      client: proj.client,
      year: proj.year,
      author: proj.author,
      image: proj.image,
      description: proj.description,
      projectTitle: proj.projectTitle,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete project
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/projects/${id}`);
      if (res.status === 200) {
        setProjects((prev) => prev.filter((proj) => proj._id !== id));
        setStatus("Project deleted successfully!");
      }
    } catch (err) {
      console.error("Error deleting project:", err);
      setStatus("Failed to delete project.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Projects</h1>

        {/* Add or Edit Project Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {editingProject ? "Edit Project" : "Add New Project"}
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
              {editingProject ? "Update Project" : "Add Project"}
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
                <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                  {proj.description}
                </p>

                {/* Edit / Delete Buttons */}
                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(proj)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(proj._id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    🗑️ Delete
                  </button>
                </div>
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
  );
}
