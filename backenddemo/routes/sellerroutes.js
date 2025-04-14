
const express  = require ( 'express');
const { addsellers, getsellersinfo, gettest }= require ('../controllers/addseller');
const upload = require ('../middleware/multer');

const sellerRouter = express.Router();


sellerRouter.post('/addnewseller', upload.single('sellerimage'), addsellers);
sellerRouter.get('/getsellersinfo',getsellersinfo)
sellerRouter.get('/test',gettest)


module.exports = sellerRouter;