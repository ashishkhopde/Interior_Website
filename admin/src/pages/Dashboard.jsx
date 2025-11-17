import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalMessages: 0,
    totalProjects: 0,
    totalBlogs: 0,
    totalServices: 0,
  });
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  // Fetch all dashboard data
  const fetchDashboardStats = async () => {
  setLoading(true);
  try {
    const base = import.meta.env.VITE_BASE_URL;

    // Fetch all totals in parallel
    const [msgRes, projRes, blogRes, servRes] = await Promise.all([
      axios.get(`${base}/contact/total`), // ✅ use correct spelling from your controller route
      axios.get(`${base}/project/total`),
      axios.get(`${base}/blog/total`),
      axios.get(`${base}/service/total`),
    ]);

    // Log to verify structure
    // console.log({
    //   msg: msgRes.data,
    //   proj: projRes.data,
    //   blog: blogRes.data,
    //   serv: servRes.data,
    // });

    // Set state safely
    setStats({
      totalMessages: msgRes.data.totalMessages || 0,
      totalProjects: projRes.data.totalProjects || 0,
      totalBlogs: blogRes.data.totalBlogs || 0,
      totalServices: servRes.data.totalServices || 0,
    });

    setStatus("✅ Dashboard data updated");
  } catch (err) {
    console.error("Error fetching dashboard data:", err);
    setStatus("❌ Failed to fetch data");
  } finally {
    setLoading(false);
    setTimeout(() => setStatus(""), 3000);
  }
};


  useEffect(() => {
    fetchDashboardStats();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome, <span className="text-blue-500">Admin</span> 👋
            </h1>
            <p className="text-gray-600">
              Here’s an overview of your dashboard and recent activities.
            </p>
          </div>
          <button
            onClick={fetchDashboardStats}
            className="mt-4 sm:mt-0 bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Refresh Data 🔄
          </button>
        </div>

        {/* Status message */}
        {status && (
          <p className="text-sm text-gray-500 mb-4 bg-white px-4 py-2 rounded-md inline-block shadow-sm">
            {status}
          </p>
        )}

        {/* Quick Stats Section */}
        {loading ? (
          <p className="text-center text-gray-600 py-10">Loading stats...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-md p-5 text-center">
              <h2 className="text-gray-500 text-sm">Total Messages</h2>
              <p className="text-3xl font-semibold text-gray-900 mt-2">
                {stats.totalMessages}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5 text-center">
              <h2 className="text-gray-500 text-sm">Active Projects</h2>
              <p className="text-3xl font-semibold text-gray-900 mt-2">
                {stats.totalProjects}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5 text-center">
              <h2 className="text-gray-500 text-sm">Published Blogs</h2>
              <p className="text-3xl font-semibold text-gray-900 mt-2">
                {stats.totalBlogs}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5 text-center">
              <h2 className="text-gray-500 text-sm">Services Offered</h2>
              <p className="text-3xl font-semibold text-gray-900 mt-2">
                {stats.totalServices}
              </p>
            </div>
          </div>
        )}

        {/* Recent Activity Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-3 flex justify-between items-center">
              <span className="text-gray-700">
                ✉️ New message received from <strong>John Doe</strong>.
              </span>
              <span className="text-sm text-gray-500">5 mins ago</span>
            </li>
            <li className="py-3 flex justify-between items-center">
              <span className="text-gray-700">
                🏗️ Project <strong>“Modern Villa Design”</strong> updated.
              </span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="py-3 flex justify-between items-center">
              <span className="text-gray-700">
                📰 Blog <strong>“Designing Minimalist Interiors”</strong>{" "}
                published.
              </span>
              <span className="text-sm text-gray-500">Yesterday</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
