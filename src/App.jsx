import './App.css'
import Home from './components/Home'
import More from './components/More';
import Profile from './components/Profile';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Profile/More" element={<More />} />
      </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
