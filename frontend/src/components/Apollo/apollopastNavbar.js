import React, { useContext } from 'react'
// import PatientNavbar from './PNavbar'
import { Context } from '../..';
import { Navigate } from 'react-router-dom';

import ApolloNavbar from './apolloNavbar';

const ApolloPastRecord = () => {
  const {isAuthenticatedApollo} = useContext(Context);
    if(!isAuthenticatedApollo) {
        return <Navigate to="/"/>
      }
  
  return (
    <div>
       <ApolloNavbar/>     
      <h1>patients Past Record !!  ha ha ha  </h1>     
    </div>
  )
}

export default ApolloPastRecord
