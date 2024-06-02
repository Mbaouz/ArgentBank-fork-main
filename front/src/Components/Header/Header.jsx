import './header.css'
import BankLogo from '../../img/argentBankLogo.png'
import { NavLink } from 'react-router-dom';


const Header =() => {


return (

<nav className="main-nav">
      <NavLink className={"main-nav-logo"} to='/'>
        <img
          className="main-nav-logo-image"
          src={BankLogo}
          alt="Argent Bank Logo"
        />
        </NavLink>
        <h1 className="sr-only">Argent Bank</h1>
      
      <div className='main-nav-item'>
       
        <i className="fa fa-user-circle"></i>
          <NavLink className={"sign-in"} to='/login'>Sign In</NavLink>
        
      </div>
    </nav>


)

};

export default Header ; 



