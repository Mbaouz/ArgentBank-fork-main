import './header.css'
import BankLogo from '../../img/argentBankLogo.png'
import { NavLink } from 'react-router-dom';


const Header =() => {


return (

<nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div className='main-nav-item'>
        <a  href="./sign-in.html">
        <i className="fa fa-user-circle"></i>
          <NavLink className={"sign-in"} to='/login'>Sign In</NavLink>
        </a>
      </div>
    </nav>


)

};

export default Header ; 



