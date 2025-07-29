const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({message:'Welcome to the Todo API'});    
});

// Routes
app.use('/api/todos', require('./routes/todos'));

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected');
  app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
}).catch(err => console.error(err));
