import './header.css';
import logo from '../../img-content/mainpage/logo.png'

const Header = () => {
return (
 <header className="header">
    <div className="logo-area">
        <img src={logo} width="37" height="37" alt="" />
        <p className="logo-name"  >Arenda.ua</p>
    </div>
    <nav class="menu">
  <ul>
    <li><a href="#">Головна</a></li>
    <li><a href="#">Каталог</a></li>
    <li><a href="#">Контакти</a></li>
  </ul>
</nav>
 </header>
);
};

export default Header;