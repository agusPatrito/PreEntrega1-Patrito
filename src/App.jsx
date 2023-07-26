import { useState } from 'react'
import './styles/App.css'
import {ItemList} from './componentes/ItemListContainer.jsx'
import { NavBar } from './componentes/NavBar'
import { CartWidget } from './componentes/CartWidget'
import {MainBanner} from './componentes/MainBanner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './componentes/ItemDetailContainer'




function App() {
  return (
      <BrowserRouter>

        <NavBar/>
        <Routes>
          <Route path='/' element={ <MainBanner/> }/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='/productos' element={<ItemList />}/>
          <Route path='/productos/:categoryId' element={<ItemList />}/>
        </Routes>
        

      </BrowserRouter> 
        
      
  )
}

export default App
