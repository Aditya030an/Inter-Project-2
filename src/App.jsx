import { useState } from 'react'
import './App.css'
import NevBar from './Component/NevBar'
import Body from './Component/Body'
import Feature from './Component/Feature'
import Box from './Component/stylebox/Box'
import Advantages from './Component/Advantages'
import Testimonial from './Component/Testimonial'
import Faq from './Component/Faq'
import ReadyStart from './Component/ReadyStart'
import Footer from './Component/Footer'

function App() {

  return (
    <div className=' ml-36 pr-2'>
      <NevBar/>
      <Body/>
      <Feature/>
      <Advantages/>
      <Testimonial/>
      <Faq/>
      <ReadyStart/>
      <Footer/>
      {/* <Box/> */}
    </div>
  )
}

export default App
