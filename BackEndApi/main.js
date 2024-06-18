// app.js
const express = require('express');
require('dotenv').config(); // Load environment variables first
const connectDB = require('./db');
const cors = require('cors');
const Task = require('./models/Task'); // Mongoose model
const authMiddleware = require('./middleware/auth');
const moment = require('moment');
const bodyParser = require('body-parser');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// app.get('/api/getData', async(req, res)=>{
 
//   try{
//     const { title, description, dueDate, priority } = req.query;
//     console.log('Query Parameters:', { title, description, dueDate, priority });
//     const filter = {};
//     console.log(filter)
//     if (title) filter.title = title;
//     if (description) filter.description = description;
//     if (dueDate) {
//       // Parse dueDate if provided
//       const parsedDueDate = moment.utc(dueDate, 'YYYY-MM-DD').startOf('day').toDate();
//       filter.dueDate = parsedDueDate;
//     }
//     if (priority) filter.priority = priority;
   
//     const Data = await Task.find(filter);
//     console.log('Retrieved Tasks:', Data);
//     if (Data.length === 0) {
//       return res.status(404).json({ message: 'No Data Found!' });
//     } 
//     return res.status(200).json(Data);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// })
app.get('/api/getData', async(req,res)=>{
  try{
    const allTask = await Task.find({});
    return res.status(200).json(allTask)
  }catch(error){
    return res.status(500).json({error:'Internal Server Error'})
  }
})
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

// Update Task Route
app.put('/api/UpdateTask/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, priority } = req.body;

    // Validate the input
    if (!id || !title || !description || !dueDate || !priority) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Parse dueDate
    const parsedDueDate = moment.utc(dueDate, 'YYYY-MM-DD').startOf('day').toDate();

    // Find and update the task
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, dueDate: parsedDueDate, priority },
      { new: true, runValidators: true }
    );

    // Check if the task was found and updated
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Send the updated task as a response
    res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
