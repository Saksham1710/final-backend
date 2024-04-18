import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './connectDB.js';

const app = express();
connectDB();

const PORT = 5000;
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

import artRouter from './routes/artRoutes.js';
import getAllArtsRouter from './routes/getAllArts.js';

app.use('/api/arts',getAllArtsRouter);
app.use('/api/art',artRouter);

app.get('/',(req,res)=> {
    res.send('Hello to the API');
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})