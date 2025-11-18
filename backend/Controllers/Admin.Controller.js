import jwt from "jsonwebtoken";
import Admin from "../Models/Admin.Model.js";

// Create admin (only once)
export const createAdmin = async (req, res) => {
  try {
    const existing = await Admin.findOne();
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" });
    }

    const admin = new Admin({ username, password });
    await admin.save();

    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Admin login
export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(404).json({ message: "Invalid credentials" });

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Create JWT token
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Protected route example
export const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).select("-password");
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
