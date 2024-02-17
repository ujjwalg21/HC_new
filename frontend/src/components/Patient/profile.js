import React, { useContext } from 'react'
import { Context } from '../..';
import { Navigate } from 'react-router-dom';
import Loader from '../loader';
import Navbar from './Navbar/navbar';
const Profile = () => {
    const {isAuthenticated, loading , user } =  useContext(Context);
    
    
    
    
    ///if user is logged out , or coookie expire then it will return to home page ("/")
    if(!isAuthenticated) {
      return <Navigate to="/"/>
    }
    
    

    // console.log(user);
 
    return (
      <>
                
    {loading ? <Loader/> :( 
    <div>
      <Navbar/>
      <h1>This is your profile , you can check the other link also</h1>
    </div>
      )
    }
      </>
  )
}

export default Profile
