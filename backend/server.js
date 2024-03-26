const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config');
const dataRoutes = require('./routes/v1/apiRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log("Connection with MongoDB established");
    app.listen(config.port, () =>
      console.log("App started at PORT", config.port)
    );
  })
  .catch((error) => {
    console.log("Connection with MongoDB failed");
    console.error(error);
  });

app.use('/api/data', dataRoutes);