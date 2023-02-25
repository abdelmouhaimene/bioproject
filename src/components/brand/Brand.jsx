import React from 'react'
import './brand.css'


const Brand = () => {
  return (
    <div className='brand-container'>
      <div className='brand-container_img facebook'>
        <i class="fa-brands fa-facebook-f"></i>
        <a href='https://www.facebook.com'><span>Facebook</span></a>
      </div>
      <div className='brand-container_img instagram'>
      <i class="fa-brands fa-instagram"></i>
      <a href='https://www.instagram.com'><span>Instagram</span></a>
      </div>
      <div className='brand-container_img gmail'>
        <i class="fa-brands fa-google"></i>
        <a href='https://www.gmail.com'><span>Gmail</span></a>
      </div>
      <div className='brand-container_img whatsapp'>
        <i class="fa-brands fa-whatsapp"></i>
        <a href='https://www.whatsapp.com'><span>Whatsapp</span></a>
      </div>
      

    </div>
  )
}

export default Brand