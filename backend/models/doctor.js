import mongoose from "mongoose";

const schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email:{
        type: String,
        unique: true,
        required: true,
    },  
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default : Date.now(),
    },
});
 




export const Doctor = mongoose.model("doctors_database" , schema );
