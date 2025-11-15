import express from 'express';
import routes from  './src/routes/crmRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true
})

//Body parser setup 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//for rountes
routes(app);

app.get('/', (req, res) => 
    res.send(`Node and Express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);