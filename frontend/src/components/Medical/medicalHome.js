import React, { useContext, useState } from 'react'
import MedicalNavbar from './medicalNavbar'
import { Context } from '../..';
import axios from 'axios';
import toast from 'react-hot-toast';

const MedicalHome = () => {
  

    return (
    <div>
      <MedicalNavbar/>

    <h1 style={{ textAlign: "center" }}>Medical home page </h1>  
       
    </div>
  )
}

export default MedicalHome
