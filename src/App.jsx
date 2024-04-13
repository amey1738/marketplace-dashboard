import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard'

import { Route,Routes } from 'react-router-dom';
import Products from './Screens/Products'
import Categories from './Screens/Categories'

function App() {
  
  return (
    <div className='w-full flex'>
      <NavigationBar/>

    <div className='w-full flex flex-col'>
      <Topbar/>
      <Routes>        
          <Route path="/"  element={<Dashboard/>} />
          <Route path="/products"  element={<Products />}/>
          <Route path="/categories"  element={<Categories/>}/>
      </Routes>
    </div>
    
    </div>
  )
}

export default App
