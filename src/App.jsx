import React from 'react'
import { BrowserRouter, Outlet } from "react-router-dom";
import { Container } from "./components/common/Container";
import { NavbarPOne } from './components/common/navbar/Navbar-1';


function App() {
  return (
   
      <div className='relative'>
        <header className='py-4 md:pt-[23px] bg-secondary fixed mx-auto w-full'>
          <NavbarPOne/>
        </header>
        <main className='w-full'>
          <Outlet/>
        </main>
      </div>
  
  )
}

export default App
