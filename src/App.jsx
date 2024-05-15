
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Profile from './Components/Profile/Profile'
import Footer from './Components/Shared/Footer/Footer'
import Header from './Components/Shared/Header/Header'
import Home from './Components/Home/Home/Home'
import Practise from './Components/Shared/Practise'

function App() {


  return (
<div className='app '>
  <Header></Header>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
    <Route path="/bal" element={<Practise />}></Route>
  </Routes>
  <Footer></Footer>
</div>
  )
}

export default App
