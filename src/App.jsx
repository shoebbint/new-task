
import './App.css'
import FirstSection from './Components/Home/FirstSection/FirstSection'
import SecondSection from './Components/Home/SecondSection/SecondSection'
import Footer from './Components/Shared/Footer/Footer'
import Header from './Components/Shared/Header/Header'

function App() {


  return (
<div className='app '>
  <Header></Header>
  <FirstSection className=''></FirstSection>
  <SecondSection></SecondSection>
  <Footer></Footer>
</div>
  )
}

export default App
