const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcrypt');

require('dotenv').config();

const app = express();
const users = [];

app.use(cors());
app.use(express.json());

const userRoutes = require('./Routes/userRoutes');
app.use('/api/users', userRoutes);

const taskRoutes = require('./Routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

app.use('/', (req, res) => {
    res.send('API is running');
})


mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
.catch((error) => console.log(error));
