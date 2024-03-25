const Data = require("../models/Data");

exports.getData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Implement other controller functions as needed
