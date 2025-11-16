import React from "react";

export default function Dashboard() {
    return (
        <main className="min-h-screen bg-gray-100 p-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome, <span className="text-blue-500">Admin</span> 👋
          </h1>
          <p className="text-gray-600 mb-10">
            Here’s an overview of your dashboard and recent activities.
          </p>

          {/* Quick Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-gray-500 text-sm">Total Messages</h2>
              <p className="text-3xl font-semibold text-gray-900 mt-2">56</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-gray-500 text-sm">Active Projects</h2>
              <p className="text-3xl font-semibold text-gray-900 mt-2">8</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-gray-500 text-sm">Published Blogs</h2>
              <p className="text-3xl font-semibold text-gray-900 mt-2">12</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-gray-500 text-sm">Services Offered</h2>
              <p className="text-3xl font-semibold text-gray-900 mt-2">5</p>
            </div>
          </div>

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
                  📰 New blog <strong>“Designing Minimalist Interiors”</strong> published.
                </span>
                <span className="text-sm text-gray-500">Yesterday</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
}
