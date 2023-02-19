import React from 'react'
import { Brand,Cta,Navbar} from './components'
import {Footer,Blog,Features,Sections,Header,WhatProject} from './containers'
import './app.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatProject />
      <Features />
      <Sections />
      <Cta />
      <Blog />
      <Footer />

    </div>
  )
}

export default App