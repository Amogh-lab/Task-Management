const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

const taskRoutes = require('./Routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

app.use('/', (req, res) => {
    res.send('API is running');
})

mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
.catch((error) => console.log(error));
