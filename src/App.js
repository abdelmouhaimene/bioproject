import React from 'react'
import { Brand,Cta,Navbar} from './components'
import {Footer,Blog,Article,Sections,Header,Journal} from './containers'
import './app.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Journal />
      <Article />
      <Sections />
      <Cta />
      <Blog />
      <Footer />

    </div>
  )
}

export default App