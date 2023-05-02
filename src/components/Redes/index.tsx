import './Redes.css'

import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png'

const sociais = [ 
   {
      icon: instagram,
      url: 'http://instagram.com/amandadeogr',
      alt: 'logo do instagram',
   },
   {
      icon: twitter,
      url: 'http://twitter.com/amandadeogr',
      alt: 'logo do twitter',
   },
   {
      icon: facebook,
      url: 'http://facebook.com/amandadeogr',
      alt: 'logo do facebook',
   }
]

const Redes = () => {
   return (
      <ul className='redes'>
         {
            sociais.map((rede) => {
               return (
                  <li>
                     <a href={rede.url}>
                        <img src={rede.icon} alt={rede.alt} />
                     </a>
                  </li>
               )
            })
         }
      </ul>
   )
}

export default Redes;