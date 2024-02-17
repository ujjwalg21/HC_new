import React, { useContext, useState } from 'react'
import ReceptionNavbar from './receptionNavbar'
import { Context } from '../..';
import axios from 'axios';
import toast from 'react-hot-toast';

const ReceptionHome = () => {
  
    const [pfnumber, setPfnumber] = useState('');
    const [doctorname, setDoctorname] = useState('');

    const {isAuthenticatedReception , setIsAuthenticatedReception, loading , setLoading} = useContext(Context);
     
    
    const submitHandler = async(e)=>{
         
        e.preventDefault();
        setLoading(true);
        try {
         const {data} = await axios.post("http://localhost:4000/api/v1/users/createAppointments", 
          {
               pfnumber, 
               doctorname,          
          }
          ,{
           headers:{
             "Content-Type": "application/json",
          },
             
          }
  
          )
          // console.log(response.headers);
         setPfnumber("");
         setDoctorname("");
         setIsAuthenticatedReception(true);
      //    setUser(user);
         setLoading(false);
         toast.success(data.message)
        }
        catch (error) {
           toast.error(error.response.data.message);
           setIsAuthenticatedReception(false);
           setLoading(false);
      
        }
       
      };
  

  
  
  
  
  
  
  
  
    return (
    <div>
      <ReceptionNavbar/>

    <h1 style={{ textAlign: "center" }}>Create Appointment </h1>  

    <form onSubmit={submitHandler}>
    <div className='form' id='myform'>

      <input type="text" name="pfnumber" value={pfnumber} onChange={(e)=>{setPfnumber(e.target.value)} } placeholder='Pfnumber' required /><br />
      <input type="text" name="doctorname" value={doctorname} onChange={(e)=>{setDoctorname(e.target.value)} } placeholder='Doctorname' required /><br />
      <button disabled={loading} type='submit' > Create Appointment</button>
      </div>
       
    </form>    
    </div>
  )
}

export default ReceptionHome
