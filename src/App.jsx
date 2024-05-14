
import './App.css'
import FirstSection from './Components/FirstSection/FirstSection'
import SecondSection from './Components/SecondSection/SecondSection'
import Header from './Components/Shared/Header/Header'

function App() {


  return (
<div className='app '>
  <Header></Header>
  <FirstSection className=''></FirstSection>
  <SecondSection></SecondSection>
  <h1 className='text-3xl font-bold underline'>hello world</h1>
</div>
  )
}

export default App
