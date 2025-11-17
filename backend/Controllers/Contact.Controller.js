import ContectModel from "../Models/Contact.Model.js";

export const getContacts = async (req, res) => {
  try {
    const contacts = await ContectModel.find().sort({ createdAt: -1 });
    res.status(200).json({
        message: "Contacts fetched successfully",
        contacts
    });
    } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getTotalMessages = async (req, res) => {
  try {
    const totalMessages = await ContectModel.countDocuments();
    res.status(200).json({
      message: "Total messages fetched successfully",
      totalMessages,
    });
  } catch (error) {
    console.error("Error fetching total messages:", error);
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const newContact = await ContectModel.create({ name, email, phone, subject, message });

    res.status(200).json({ 
        message: "Contact message sended successfully", 
        contact: newContact 
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
