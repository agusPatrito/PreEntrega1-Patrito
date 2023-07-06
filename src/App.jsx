import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ItemList} from './componentes/ItemListContainer.jsx'
import { NavBar } from './componentes/NavBar'
import { CartWidget } from './componentes/CartWidget'


function App() {
  return (
      <div>

        <NavBar/>

        <ItemList name='Agustin'/>
        
        
      </div>
  )
}

export default App
