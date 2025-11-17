import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    author: "",
  });
  const [status, setStatus] = useState("");
  const [editingBlogId, setEditingBlogId] = useState(null);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/blog`);
        setBlogs(res.data.blogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  // Input change handler
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Add or Update Blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(editingBlogId ? "Updating..." : "Saving...");

    try {
      if (editingBlogId) {
        const res = await axios.put(
          `${import.meta.env.VITE_BASE_URL}/blog/${editingBlogId}`,
          formData
        );

        if (res.status === 200) {
          setStatus("Blog updated successfully!");
          setBlogs((prev) =>
            prev.map((b) => (b._id === editingBlogId ? res.data.blog : b))
          );
          setEditingBlogId(null);
        }
      } else {
        const res = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/blog`,
          formData
        );
        if (res.status === 201) {
          setStatus("Blog added successfully!");
          setBlogs((prev) => [...prev, res.data.blog]);
        }
      }

      // Reset form
      setFormData({ title: "", description: "", image: "", author: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      console.error("Error saving blog:", err);
      setStatus("Error saving blog.");
    }
  };

  // Edit blog
  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      description: blog.description,
      image: blog.image,
      author: blog.author,
    });
    setEditingBlogId(blog._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStatus("Editing mode enabled");
  };

  // Delete blog
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/blog/${id}`);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
      setStatus("Blog deleted successfully!");
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      console.error("Error deleting blog:", err);
      setStatus("Error deleting blog.");
    }
  };

  // Cancel edit
  const handleCancel = () => {
    setEditingBlogId(null);
    setFormData({ title: "", description: "", image: "", author: "" });
    setStatus("");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Blogs</h1>

        {/* Add/Edit Blog Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {editingBlogId ? "Edit Blog" : "Add New Blog"}
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
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Blog Description"
              className="border border-gray-300 rounded-md px-4 py-3 text-black h-32 resize-none w-full md:col-span-2"
              required
            />
            <div className="flex gap-4 md:col-span-2">
              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
              >
                {editingBlogId ? "Update Blog" : "Add Blog"}
              </button>
              {editingBlogId && (
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

          {status && <p className="text-sm text-gray-500 mt-3">{status}</p>}
        </div>

        {/* Blog Cards (same style as Project cards) */}
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
                <h3 className="text-lg font-bold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  By <span className="font-medium">{blog.author}</span>
                </p>
                <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                  {blog.description}
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>

                {/* Edit / Delete Buttons (same position as Projects) */}
                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    🗑️ Delete
                  </button>
                </div>
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
  );
}
