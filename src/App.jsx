import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import Cards from './cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Cards />
    </>
  )
}

export default App
