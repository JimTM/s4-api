import studentsRoutes from './app/src/routes/StudentRoute';
import classesRoutes from './app/src/routes/ClassesRoute';
// importing the dependencies
import mongoose from 'mongoose';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/s4db', { useNewUrlParser: true });

// defining the Express app
const app = express();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

const router = express.Router();

app.use('/api', router);

// defining students API
studentsRoutes(router);
// classes API
classesRoutes(router);

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});
