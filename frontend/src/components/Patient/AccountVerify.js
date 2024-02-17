import axios from 'axios';
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { Context } from '../..';
import { Navigate } from 'react-router-dom';



const EmailVerify = () => {
  const {setLoading , loading } = useContext(Context);
  
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [isVerify, setIsVerify] = useState(false) ;

  const submitHandler1 = async(e)=>{
    setLoading(true); 
  
    e.preventDefault();
      // setLoading(true);
      try {
       const {data} = await axios.post("http://localhost:4000/api/v1/users/emailverify" , 
        {
          email,    
        }
        ,{
         headers:{
           "Content-Type": "application/json",
        },
           
        }

        )
        // console.log(response.headers);
       
       
      //  setUser(user);
       setLoading(false);
       toast.success(data.message);
      }
      catch (error) {
         toast.error(error.response.data.message);
      
         setLoading(false);
    
      }
     
    };

    if(isVerify){
      return <Navigate to="/register"/>
    }

    const submitHandler2 = async(e)=>{
      e.preventDefault();
        setLoading(true);
        try {
         const {data} = await axios.post("http://localhost:4000/api/v1/users/otpverify" , 
          {
            email,
            otp,    
          }
          ,{
           headers:{
             "Content-Type": "application/json",
          },
             
          }
  
          )
          // console.log(response.headers);
         
        //  setIsAuthenticated(true);
        //  setUser(user);
        setIsVerify(true);
         setLoading(false);
         toast.success(data.message);
        }
        catch (error) {
           toast.error(error.response.data.message);
          //  setIsAuthenticated(false);
           setLoading(false);
           setIsVerify(false);
      
        }
       
      };
  
  return (

    <div>
      <h1 style={{ textAlign: "center" }}>IITK Account Verfication </h1>  
      <form  onSubmit={submitHandler1} className='form'>
        <input type="email" value = {email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Email' pattern= ".+@iitk\.ac\.in" title="Please enter a IITK email address"  required /><br />
        <input type="string" value= {otp} onChange={(e)=>{setOTP(e.target.value)} }  placeholder='OTP' /><br />
        <button type="submit" disabled={loading} >Send OTP</button> <br /> <button disabled={loading} onClick={submitHandler2}> Submit OTP</button>
      </form>
    </div>
  )
}

export default EmailVerify
