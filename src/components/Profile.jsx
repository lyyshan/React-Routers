import React from 'react'
import { Outlet, Link } from "react-router-dom";
function Profile() {
  return (
    <div>
         <h1>This is My Profile.</h1>
         <Link to="/" >Say Hello to Home</Link>
    </div>
  )
}

export default Profile
