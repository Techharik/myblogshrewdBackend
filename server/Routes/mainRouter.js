import express, { Router } from 'express';
const router = express.Router();
import coustomControllers from '../controllers/mainController.js';
const {home} = coustomControllers;
import blogModal from '../modal/modal.js';
import fs from 'fs'
import path from 'path'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import multer from 'multer';
import { userInfo } from 'os';
 
var storage = multer.diskStorage({
    destination:'public/images/',

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
 
var upload = multer({ storage: storage });




router.get('/', home)




router.post('/', upload.single('img'),async (req,res)=>{
    const {title,details,excert} =req.body;
    const blogPhoto =req.file.filename

    const userBlog= new blogModal({
        title:title,
        excerpt:excert,
        details:details,
        img:{
            data: fs.readFileSync(path.join('public/images/' + req.file.filename)),
            contentType: 'image/png'
        }
    })

    await userBlog.save();
    res.redirect('/')
})

router.get('/getInfo',async(req,res)=>{
    const blogdata =await  blogModal.find({})
    res.status(200).json(blogdata)
    // res.render('index',{blogdata})
})






export default router;





