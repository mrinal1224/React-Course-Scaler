
import './App.css'
import Family from './prop-drill/Family'
import { FamilyContext } from './prop-drill/FamilyContext'


function App() {

  const familyMessage ={
    familyName : 'Invincibles'
  }
 

  return (
    <>
    <FamilyContext.Provider value={familyMessage}>
      <Family/>
    </FamilyContext.Provider>
    </>
  )
}

export default App
