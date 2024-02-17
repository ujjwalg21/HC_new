import React, { useContext, useEffect } from 'react'

import { Context } from '../..';
import { Navigate } from 'react-router-dom';
import DoctorNavbar from './doctorNavbar';
import axios from 'axios';


const DoctorHome = () => {
    
    const {isAuthenticatedDoctor } = useContext(Context); 
  
    let appointments = [];  
    useEffect(() => {
    
        axios.get("http://localhost:4000/api/v1/users/getAppointmentsdoctor",{
        withCredentials:true,
      })
      .then(res=>{
        // setUser(res.data.user);
        console.log(res.data.appointments);
        appointments = res.data.appointments ;
        // console.log(user)
        // setIsAuthenticatedReception(true);
        // setIsAuthenticated(false);
        // setLoading(false);
  
      })
      .catch((error)=>{
        console.log(error.response.data.message);
       
      })
  
    }, []) 


    if(!isAuthenticatedDoctor){
        return <Navigate to="/"/> ; 
    }
    
  
  

    return (
    <div>
      <DoctorNavbar/> 
      <h1>Doctor's Home page</h1>
    </div>
  )
}

export default DoctorHome
