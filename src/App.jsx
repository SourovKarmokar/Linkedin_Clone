import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Widget from './components/Widget/Widget'

function App() {


  return (
    <>
      <Header />

      <div className="flex justify-center px-4 mt-4 gap-4">
       
        <div className="hidden md:block w-[250px]">
          <Sidebar />
        </div>

        
        <div className="flex-1 max-w-[600px]">
          <Feed />
        </div>

        
        <div className="hidden lg:block w-[280px]">
          <Widget />
        </div>
      </div>


    </>
  )
}

export default App
