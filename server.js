const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require('dotenv').config();
const connectDB = require('./connect/database');
const port = process.env.PORT || 5000

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/tasks', require('./routes/taskRoute'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}!`))
