const express = require("express");
const router = express.Router();
const Data = require("../models/Data");

// GET data from MongoDB
router.get("/data", async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
