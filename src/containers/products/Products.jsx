import React from 'react'
import './products.css'
import poire from '../../assets/poire.jpg'
import pomme from '../../assets/pomme.jpg'
import souris from '../../assets/souris.jpg'

const Products = () => {
  return (
    <div className='products'>
      <div className='gradient__bg'>
        <div className='products-all'> 
        <h1>Nos produits</h1>
        <div className='products-container'>
          <i class="fa-solid fa-angle-left"></i>
          <div className='products-container_show'>
            <div className='products-container_show_product img-left'>
              <h3>Pomme</h3>
              <div className='products-container_show_product_img '>
                <img src={pomme} alt='pomme pic'/>
              </div>
              <p>700 DA</p>
            </div>
            <div className='products-container_show_product img-centre'>
              <h3>Poire</h3>
              <div className='products-container_show_product_img '>
                <img src={poire} alt='poire pic'/>
              </div>
              <p>700 DA</p>
            </div>
            <div className='products-container_show_product img-right'>
              <h3>Souris</h3>
              <div className='products-container_show_product_img '>
                <img src={souris} alt='souris pic'/>
              </div>
              <p>700 DA</p>
            </div>
          </div>
          <i class="fa-solid fa-angle-right"></i>
        </div>
        <button type='button' id='acheter'> <i class="fa-solid fa-cart-shopping"></i> Acheter</button>
        <button type='button' id='voir'> <i class="fa-solid fa-cart-shopping"></i> Voir tout</button>
        </div>
      </div>

    </div>
  )
}

export default Products