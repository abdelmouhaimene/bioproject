import React from 'react'
import './article.css'
import invest from '../../assets/invest.png'
import investing from '../../assets/investing.png'
const Article = () => {
  return (
      <div className='article-container'>
        <div className='article-container_text'>
          <div className='article-container_text_titre'> 
            <h1>Acheter un arbre, un bon investissement ?</h1>
          </div>
          <div className='article-container_text_text'>
            <ul>
              <li>
              <hr/>
                <h3>Arbres et arbustes fruitiers</h3>
                
                <p>Nous avons un bon climat qui aide divers arbres fruitiers à produire et à faire mûrir des fruits.
                  Acheter un arbre à bas prix et en prendre soin pendant une courte période suffisante pour 
                  pouvoir produire des fruits est considéré 
                  comme un investissement en raison des prix élevés des fruits sur le marché.</p>
              </li>
              <li>
                
                <hr/>
                <h3>Faire feu de tout bois</h3>
              
                <p>Dans tous les cas, il est possible de tirer profit du bois, car c'est une matière première aux multiples usages.
                  Si vous ne pouvez pas le recycler ou le vendre,
                  vous pouvez au moins utiliser le bois pour allumer un feu en cas de besoin.</p>
              </li>
              <li>
              <hr/>
                <h3>Le Vert à moitié plein</h3>
                
                <p>
                  205 gigatonnes : c’est la quantité de CO2 atmosphérique que pourrait absorber la plantation de 900 
                  millions d’hectares de forêt, selon une étude de l’École polytechnique fédérale de Zurich parue en 2019**.
                  Cela équivaudrait au deux tiers des émissions dues aux activités humaines depuis la révolution 
                  industrielle.</p>
              </li>
              <li>
              <hr/>
                <h3>Comme c'est beau de se détendre dans son jardin</h3>
                
                <p>
                La nuance et l'atmosphère rafraîchissantes produites par un arbre peuvent être utilisées pour se détendre,
                 que le fait d'avoir un jardin plein d'arbres peut être décrit 
                comme un paradis dans lequel il traite la pression de jour stressante au travail
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className='article-container_img'>
          <img src={investing} alt='investing in tree' id='investin'/>
          <img src={invest} alt='investing in tree' id='invest' />
        </div>
      </div>
  )
}

export default Article