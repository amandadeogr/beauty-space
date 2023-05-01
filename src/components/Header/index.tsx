import "./Header.css";
import Menu from "../Menu";
import Button from "../Button";

const Header = () => {
   return (
      <header className="header">
            <h2 className="logo">MARIA</h2>
            <div className="left">
               <Menu />
               <Button />
            </div>
      </header>
   )
}

export default Header;