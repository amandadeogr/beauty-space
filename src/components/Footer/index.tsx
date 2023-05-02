import Menu from '../Menu';
import Redes from '../Redes';
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='top'>
         <h2 className='title'>MARIA</h2>
         <p className='subtitle'>Beauty Space</p>
      </div>

      <div className='bottom'>
         <Menu />
         <Redes />
      </div>
      <p className='autoria'>Feito por <a href='https://github.com/amandadeogr'>Amanda Ramirez.</a></p>
    </footer>
  )
}

export default Footer;