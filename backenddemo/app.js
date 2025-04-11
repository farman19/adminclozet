const express = require('express')
const app = express();
const  sellerRouter = require ("./routes/sellerroutes");
const connectDB =  require("./config/mongodb");
const bodyParser = require('body-parser')
require('dotenv').config();
const port = process.env.PORT || 8090;
const cors = require('cors')
const path = require('path')








app.use(express.json());

const clientbuild = path.join(__dirname,"../democloud/build")
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(clientbuild));
app.use(cors({
    origin: "*" ,
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization']
  }));




connectDB();


app.get('/', (req, res)=>{
    res.send('api working')
})

app.use('/api',sellerRouter)



app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})

