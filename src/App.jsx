
import { useState } from 'react'
import './App.css'
// import Card from './Components/Card'
import Routes from './Components/Routing';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <div>
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    </>
  )
}

export default App
