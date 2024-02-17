import mongoose from "mongoose";

const schema = new mongoose.Schema({
    pfnumber:{
      type: String,
      required: true,
    },
    firstname:String,
    lastname:String,
    doctorname: {
        type: String,
        required: true,
    },
    reg_no:{
    type: String,
    },
    imglink:{
        type: String,
         default:" ",
    }
    ,
    createdAt: {
        type: Date,
        default : Date.now(),
    },
});
 




export const AllAppointments = mongoose.model("allappointments" , schema );
