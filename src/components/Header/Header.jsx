import './Header.scss';
import logo from '../../assets/WalletWise.png';
const Header = () => {
  return (
    <header className='header'>
      <div className='header__logoContainer'>
        <img src={logo} alt="" className='header__logo'/>
      </div>
      <div className='header__linksContainer'>
        <ul className='header__links'>
          <li className='header__link'>
            <a className='active' href="#">Home</a>
          </li>
          <li className='header__link'>
            <a href="#">Configuration</a>
          </li>
        </ul>
        <div className='header__profileContainer'>
          <a href="#" className='header__profile'>SA</a>
        </div>
      </div>
    </header>
  );
}

export default Header;