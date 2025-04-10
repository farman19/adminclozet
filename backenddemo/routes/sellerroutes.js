
const express  = require ( 'express');
const { addsellers, getsellersinfo }= require ('../controllers/addseller');
const upload = require ('../middleware/multer');

const sellerRouter = express.Router();


sellerRouter.post('/addnewseller', upload.single('sellerimage'), addsellers);
sellerRouter.get('/getsellersinfo',getsellersinfo)


module.exports = sellerRouter;