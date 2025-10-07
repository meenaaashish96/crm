import express from 'express';
import routes from  './src/routes/crmRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongoose://localhost/CRMdb',{
    useNewUrlParser: true
})



//for rountes
routes(app);

app.get('/', (req, res) => 
    res.send(`Node and Express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);