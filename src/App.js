import React from 'react'
import { Brand,Navbar} from './components'
import {Footer,Article,Products,Header,Journal} from './containers'
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
      <Products />
      <Footer />

    </div> 
  )
}

export default App