const mongoose=require('mongoose');


const mongoURI="mongodb+srv://Utkarsh:utkarshp1@cluster0.qiwksar.mongodb.net/Ticket_booking";//  database


const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports=connectToMongo;