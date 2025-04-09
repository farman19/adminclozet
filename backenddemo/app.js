import express from "express";
const app = express();
import sellerRouter from "./routes/sellerroutes.js";
import connectDB from "./config/mongodb.js";
import bodyParser from "body-parser";
import 'dotenv/config'

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const port = process.env.PORT || 8090;
connectDB();


app.get('/', (req, res)=>{
    res.send('api working')
})

app.use('/api',sellerRouter)



app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})

