const User = require("../models/User");

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user profile", error });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  const { name, skills, resume, company } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.profile.skills = skills || user.profile.skills;
    user.profile.resume = resume || user.profile.resume;
    user.profile.company = company || user.profile.company;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating user profile", error });
  }
};

module.exports = { getUserProfile, updateUserProfile };
