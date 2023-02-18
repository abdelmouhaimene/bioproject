import React from 'react'
import { Brand,Cta,Navbar} from './components'
import {Footer,Blog,Features,Sections,Header,WhatProject} from './containers'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bs'>
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