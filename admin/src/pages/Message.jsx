import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Message() {
  const [messages, setMessages] = useState([]);

  // Fetch messages from backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/contact`);
        setMessages(res.data.contacts);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };

    fetchMessages();
  }, []);


  return (
    <>
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6 overflow-x-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Messages</h1>

          {messages.length === 0 ? (
            <p className="text-gray-500 text-center py-10">No messages found.</p>
          ) : (
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Phone</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Subject</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Message</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {messages.map((msg) => (
                  <tr key={msg._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-800 font-medium">{msg.name}</td>
                    <td className="px-4 py-3 text-gray-600">{msg.email}</td>
                    <td className="px-4 py-3 text-gray-600">{msg.phone || "-"}</td>
                    <td className="px-4 py-3 text-gray-600">{msg.subject || "-"}</td>
                    <td className="px-4 py-3 text-gray-600 max-w-xs truncate">{msg.message}</td>
                    <td className="px-4 py-3 text-gray-500 text-sm">
                      {new Date(msg.createdAt).toLocaleDateString()}{" "}
                      <span className="text-xs text-gray-400">
                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
}
