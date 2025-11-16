import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    author: "",
    tags: "",
  });
  const [status, setStatus] = useState("");

  // Fetch existing blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/blogs`);
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Saving...");

    const dataToSend = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/blogs`,
        dataToSend
      );
      if (res.status === 200 || res.status === 201) {
        setStatus("Blog added successfully!");
        setBlogs((prev) => [...prev, res.data]);
        setFormData({
          title: "",
          description: "",
          image: "",
          author: "",
          tags: "",
        });
      } else {
        setStatus("Failed to save blog.");
      }
    } catch (err) {
      console.error("Error adding blog:", err);
      setStatus("Error adding blog.");
    }
  };

  return (
    <>
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Blogs</h1>

          {/* Add Blog Form */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Add New Blog
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Blog Title"
                className="border border-gray-300 rounded-md px-4 py-3 text-black w-full"
                required
              />
              <input
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author"
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
              <input
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Tags (comma separated)"
                className="border border-gray-300 rounded-md px-4 py-3 text-black w-full md:col-span-2"
                required
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Blog Description"
                className="border border-gray-300 rounded-md px-4 py-3 text-black h-32 resize-none w-full md:col-span-2"
                required
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition md:col-span-2"
              >
                Add Blog
              </button>
            </form>

            {status && <p className="text-sm text-gray-500 mt-3">{status}</p>}
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    By <span className="font-medium">{blog.author}</span>
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-3 mb-3">
                    {blog.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}

            {blogs.length === 0 && (
              <p className="text-gray-500 col-span-full text-center py-10">
                No blogs added yet.
              </p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
