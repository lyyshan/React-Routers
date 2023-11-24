import React from 'react'
import { Outlet, Link } from "react-router-dom";


function More() {
  return (
    <div>
      <h1>More About Me </h1>
      <Link to="/">jump to Home</Link>
    </div>
  )
}

export default More
