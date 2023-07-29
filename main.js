import 'dotenv/config'
import express from 'express';
import ejs from 'ejs';
import cors from 'cors'

import router from './server/Routes/mainRouter.js';
import dbConnect from './server/config/db.js';

const app = express();
const PORT  = process.env.PORT || 4000;


express.static('public')

app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.set('view engine','ejs');

dbConnect();

app.use('/',router)





app.listen(PORT, ()=>{
    console.log('Successfully connected to the port '+PORT)
})