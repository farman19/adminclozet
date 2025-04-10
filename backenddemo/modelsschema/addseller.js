const mongoose = require ( "mongoose");

const addsellerSechema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phoneno: { type: String, required: true },
    role:{type:String,required:true},
    selleremail: { type: String, required: true },
    sellerimage: { 
        filename: { type: String, required: true },
        path: { type: String, required: true }
    }
   
   
    
})

const addsellerModle = mongoose.model("sellerinfos",addsellerSechema);
module.exports = addsellerModle;