
import './App.css'
import FirstSection from './Components/Home/FirstSection/FirstSection'
import LastSection from './Components/Home/LastSection/LastSection'
import SecondSection from './Components/Home/SecondSection/SecondSection'
import ThirdSection from './Components/Home/ThirdSection/ThirdSection'
import Footer from './Components/Shared/Footer/Footer'
import Header from './Components/Shared/Header/Header'

function App() {


  return (
<div className='app '>
  <Header></Header>
  <FirstSection className=''></FirstSection>
  <SecondSection></SecondSection>
  <ThirdSection></ThirdSection>
  <LastSection></LastSection>
  <Footer></Footer>
</div>
  )
}

export default App
