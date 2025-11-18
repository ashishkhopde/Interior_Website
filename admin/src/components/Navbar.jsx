import { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, X, User, LogOut, Settings } from "lucide-react";
import { useLocation } from "react-router-dom"; // optional if you're using React Router

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  // Only if using React Router for active link highlighting:
  const location = useLocation();

  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Messages", href: "/message" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blog" },
    { name: "Services", href: "/services" },
  ];

  const handleLogout = () => {
    // Replace with real logout logic (e.g., clear token, redirect)
    localStorage.removeItem("token");
    window.location.href = "/login";
    alert("Logging out...");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-xl font-bold tracking-wide">
          Admin<span className="text-blue-400">Panel</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location?.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors ${isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileMenu(!profileMenu)}
              className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700 transition"
            >
              <User size={18} />
              <span>Admin</span>
            </button>

            {profileMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white text-gray-900 rounded-md shadow-lg border border-gray-100">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-gray-200 px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block py-2 border-b border-gray-700 hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={handleLogout}
            className="block w-full text-left py-2 hover:text-red-400"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
