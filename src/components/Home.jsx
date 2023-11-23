
import { Outlet, Link } from "react-router-dom";


function Home() {
  return (
    <div>
       <h1>This is Home</h1>
       <Link to="/Profile">Say Hello to Profile</Link>
    </div>
  )
}

export default Home
