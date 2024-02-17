import bcrypt from "bcrypt";
import { send_cookies } from "../utils/features.js";
import { Doctor } from "../models/doctor.js";
import { Pastrecord } from "../models/PatientPastRecord.js";
import { Record } from "../models/record.js";
import {v2 as cloudinary} from 'cloudinary';          
import { ApolloPastrecord } from "../models/apolloPastrecord.js";

          
cloudinary.config({ 
  cloud_name: 'dt8idppf9', 
  api_key: '774145224114334', 
  api_secret: 'GPCyQ7o-9_QxL30Ni2PH6gufvjs' 
});

export const getAppointmentsByApollo = async(req,res) =>{
  
    // console.log(req.headers.cookies);
    
    
    const appointments  = await Record.find({flag2:true});
    
    res.status(200).json({
    success: true,
    message:"send succefully",
    appointments,
    });
  
    }

export const addInApollo = async(req,res) =>{
      const{ pfnumber, doctorname , firstname , lastname,reg_no,imglink} = req.body;
        // console.log(req.headers.cookies);
        
        
        await ApolloPastrecord.create({
            pfnumber, doctorname, firstname, lastname, reg_no, imglink
        });
        
        res.status(200).json({
        success: true,
        message:"created succesfully",
        });
      
}

//the below function will add the record in apollo database and delete teh enrty from record database

export const updateApollo = async(req,res)=>{
        { 
            
            const {pfnumber, flag1 , flag2,firstname,lastname,doctorname,imglink,image , reg_no} = req.body;
            
            cloudinary.uploader.upload(image,{public_id:"prescription"})
            .then(async(result)=>{
            // console.log(result.url);
            const user = await Record.find({reg_no});
            
        
            
            const update2 = {
                $set: {
                    imglink:result.url,
                  
                     // Update the status to 'cancelled', for example
                    // You can add more fields to update as needed
                }
              };
            
            
            if(user){
              await Pastrecord.findOneAndUpdate(
                {reg_no}, // Filter for finding the document
                update2, // Update operation to apply
              );
              await Record.findOneAndDelete({reg_no});
      
            }
            
            res.status(200).send({
              message: "success",
              result
             });
            }).catch((error) => {
             res.status(500).send({
              message: "failure",
              error
             });
            });
        }
}
      

  