const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../DB/data.json');

exports.getAllData = async (req, res) => {
  try {
    const rawData = fs.readFileSync(dataFilePath, 'utf8');
    const data = JSON.parse(rawData);
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getDataById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const rawData = fs.readFileSync(dataFilePath, 'utf8');
    const data = JSON.parse(rawData);
    const item = data.find(item => item.id === id);
    if (!item) {
      return res.status(404).json({ error: 'Data not found' });
    }
    res.json(item);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};