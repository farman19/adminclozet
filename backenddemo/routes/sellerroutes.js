import express  from 'express';
import { addsellers, getsellersinfo } from '../controllers/addseller.js';
import upload from '../middleware/multer.js';

const sellerRouter = express.Router();


sellerRouter.post('/addnewseller', upload.single('sellerimage'), addsellers);
sellerRouter.get('/getsellersinfo',getsellersinfo)

export default sellerRouter;