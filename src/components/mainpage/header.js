import './header.css';
import logo from '../../img-content/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
return (
 <header className="header">
    <Link to="/" className="logo-area">
    
        <img src={logo} width="37" height="37" alt=""  className='logo'/>
        <p className="logo-name"  >Orenda.ua</p>
    </Link>
    <nav class="menu">
  <ul>
    <li><Link to="/">Головна</Link></li>
    <li><Link to="catalog">Каталог</Link></li>
    <li><Link to="">Контакти</Link></li>
  </ul>
</nav>
 </header>
);
};

export default Header;