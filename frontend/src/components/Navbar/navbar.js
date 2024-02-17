
import React ,{useContext,useState}from "react";
import { NavLink ,Navigate} from "react-router-dom";
import logo from "./logo.png"
import profile from "./profile.png";

import { Context } from "../..";
import "./navbar.css";

export default function Navbar() {
  const {isAuthenticatedDoctor,isAuthenticatedNurse,isAuthenticatedLab,isAuthenticatedApollo,isAuthenticatedMedical, isAuthenticatedReception , isAuthenticated , setIsAuthenticated , loading , setLoading} =  useContext(Context);
  const [isVisible,setIsVisible] = useState(true);

  console.log("isAuthenticatedReception : ",isAuthenticatedReception);
  console.log("isAuthenticated : " , isAuthenticated);

  if(isAuthenticated){
    return <Navigate to="/profile"/> ;
  }

  if(isAuthenticatedReception){
    return <Navigate to="/receptionHome"/> ;
  }
  if(isAuthenticatedDoctor){
    return <Navigate to="/doctorHome"/> ; 
  }
  if(isAuthenticatedMedical){
    return <Navigate to="/medicalHome"/> ; 
  }
  if(isAuthenticatedApollo){
    return <Navigate to="/apolloHome"/> ; 
  }
  if(isAuthenticatedLab){
    return <Navigate to="/labHome"/> ; 
  }
  if(isAuthenticatedNurse){
    return <Navigate to="/nurseHome"/> ; 
  }



  

  const handleProfileLogo = () => {
    if (!isVisible) {
      setTimeout(() => {
        setIsVisible(!isVisible);
      }, 100);
    } else {
      setIsVisible(!isVisible);
    }
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid my-0">
          <NavLink className="navbar-brand" to="/">
            <div className="logo-cls">
              <img src={logo} alt="logo" width="40px" height="38px" />
              <h5 style={{ marginLeft: '10px', marginTop: '5px', background: 'linear-gradient(to right,  #84D25A, #0194B6)', WebkitBackgroundClip: 'text', color: 'transparent', fontFamily: 'Helvetica Neue' }}> <b> HEALTH CENTER</b></h5>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleProfileLogo}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  <h5 style={{fontFamily: 'Helvetica Neue'}}>Home</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/loginAs">
                <h5 style={{fontFamily: 'Helvetica Neue'}}>Login</h5> 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/emailverification">
                <h5 style={{fontFamily: 'Helvetica Neue'}}>Signup</h5> 
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/emailverification"/>
                <h5 style={{fontFamily: 'Helvetica Neue'}}>Signup</h5> 
              </li> */}
              
              {/* { isVisible ? (
                <li className="nav-item dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontFamily: 'Helvetica Neue'}}>
                    Profile
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <NavLink className="dropdown-item" to="/profile" style={{fontFamily: 'Helvetica Neue'}}> Profile</NavLink>
                    <NavLink className="dropdown-item" to="/settings" style={{fontFamily: 'Helvetica Neue'}} >Settings</NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="/logout" style={{fontFamily: 'Helvetica Neue'}}>Logout</NavLink>
                  </div>
                </li>
                ):
                (<>
                <li className="nav-item">
                <NavLink className="nav-link active" to="/pastrecords">
                  <h5 style={{fontFamily: 'Helvetica Neue'}}>Edit Profile</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/pastrecords">
                  <h5 style={{fontFamily: 'Helvetica Neue'}}>Login</h5>
                </NavLink>
              </li>
                </>)
              } */}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
