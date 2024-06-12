// app.js
const express = require('express');
require('dotenv').config(); // Load environment variables first
const connectDB = require('./db');
const cors = require('cors');
const Task = require('./models/Task'); // Mongoose model
const authMiddleware = require('./middleware/auth');
const moment = require('moment');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/api/createTask', async(req, res)=>{
    const {title,description,dueDate,priority} = req.body;
    const task = new Task({title,description,dueDate,priority });
    await task.save();
    res.status(201).json(({message:'Task Created Successfully'}))
})
app.get('/api/GetTask/:dueDate', async(req, res)=>{
 try{
  const  {dueDate} = req.params;
  if(!dueDate){
    return res.status(400).json({error:'dueDate is Required'});

  }
  const parsedDueDate = moment.utc(dueDate, 'YYYY-MM-DD').startOf('day').toDate();
  console.log('Parsed dueDate:', parsedDueDate);
  const task = await Task.find({ dueDate: new Date(parsedDueDate) });
  console.log('Database query:', { dueDate: parsedDueDate });

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  res.status(200).json([task]);
}catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
}
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
