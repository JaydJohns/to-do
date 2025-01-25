const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/yourDatabaseName'; // Update with your database name

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Project Management API');
});

const projectRoutes = require('./routes/projectRoutes');
const teamRoutes = require('./routes/teamRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/projects', projectRoutes);
app.use('/teams', teamRoutes);
app.use('/users', userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
