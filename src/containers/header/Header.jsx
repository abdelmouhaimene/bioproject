import React from 'react'
import './header.css'
import treepic from '../../assets/tree2.png'
import people from '../../assets/people.png'
const Header = () => {
  return (
    <div className='_header section_padding' id='home'>
      <div className='_header-content'>
        <h1>
          Bienvenue dans notre boutique en ligne chez Assila
        </h1>
        <p>
          Notre magasin propose des services de vente et de livraison d'arbres prêts à planter,
          de miel naturel et d'huile d'olive.
        </p>
        <p>
          Vous etes pret? allez faire une commande ! 
        </p>
        <div className='_header-content_form'>
          <input type="email" placeholder='Entrez émail ici !'/>
          <button type='button'>Commencer</button>
        </div>
        <div className='_header-content_people'>
          <img src={people} alt=" a people pic" />
          <p>+1.6k visiteurs</p>
        </div>
      </div>
      <div className='_header-content_tree'>
          <img src={treepic} alt=" a tree pic" />
        </div>
    </div>
  )
}

export default Header