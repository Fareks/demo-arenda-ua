import './header.css';
import logo from '../../img-content/logo.png'
import { Link } from 'react-router-dom';
const Header = ({theme={logo:'white-logo', links:'header-links-white'}}) => {
return (
 <header className="header">
    <Link to="/" className="logo-area">
    
        <img src={logo} width="37" height="37" alt=""  className='logo'/>
        <p className={theme.logo}  >Orenda.ua</p>
    </Link>
    <nav class="menu">
  <ul>
    <li><Link to="/" className={theme.links}>Головна</Link></li>
    <li><Link to="catalog" className={theme.links}>Каталог</Link></li>
    <li><Link to="" className={theme.links}>Контакти</Link></li>
  </ul>
</nav>
 </header>
);
};

export default Header;