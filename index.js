'use strict'
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/userRoute');
const positionRoutes = require('./routes/positionRoute');
const projectRoutes = require('./routes/projectRoute');
const technologyRoutes = require('./routes/technologyRoute');



const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// app.use('/admin/api', userRoutes.routes);
app.use('/api/position',positionRoutes.routes);
app.use('/api/project',projectRoutes.routes);
app.use('/api/technology',technologyRoutes.routes);



app.listen(config.port, () => console.log(`App is running on url https://localhost:${config.port}`))