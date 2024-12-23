import React from 'react'
import { BrowserRouter, Outlet } from "react-router-dom";
import { Container } from "./components/common/Container";
import { NavbarPOne } from './components/common/navbar/Navbar-1';
import { NavbarPTwo } from './components/common/navbar/Navbar-2';


function App() {
  return (
    <BrowserRouter>
      <div className='relative'>
        <header className='py-[23px] bg-secondary fixed mx-auto w-full'>
          <NavbarPOne/>
          <NavbarPTwo/>
        </header>
        <main className=''>
          <Outlet/>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
