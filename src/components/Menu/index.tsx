import './Menu.css'

const Menu = () => {

   const menuLinks = [
   {
      name: 'Home',
      href: '#menu'
   },
   {
      name: 'Especialidades',
      href: '#especialidades'
   },
   {
      name: 'Depoimentos',
      href: '#depoimentos'
   },
   {
      name: 'Contato',
      href: '#contato'
   },
];

   return (
      <ul className="nav-list">
            {
               menuLinks.map((item) => {
                  return (
                     <li className="nav-link">
                        <a href={item.href}>{item.name}</a>
                     </li>
                  )
               })
            }
         </ul>
   )
}

export default Menu;