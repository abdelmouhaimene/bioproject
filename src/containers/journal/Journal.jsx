import React from 'react'
import './journal.css'
import news from '../../assets/news.jpg'
const Journal = () => {
  return (
    <div className='journal' id='journal'> 
      <div className='gradient__bg'>
      <div className='journal-container'>
        <div className='journal-contatiner_fixed'>
          <h1>Titre</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className='journal-container_daily'>
          <i class="fa-solid fa-angle-left"></i>
          <div className='journal-container_daily_news'>
            <h3>Titre titre titre</h3>
            <div className='journal-container_daily_news_img'>
              <img src={news} alt='news'/>
            </div>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          </div>
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Journal