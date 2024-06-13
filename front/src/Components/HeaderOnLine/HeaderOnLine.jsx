
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../store/authSlice";
import { clearUser } from "../../store/userSlice";
import '../Header/header.css'
import BankLogo from '../../img/argentBankLogo.png'
import { NavLink ,useNavigate} from 'react-router-dom';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function HeaderOnLine  () {

       
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const user = useSelector((state) => state.user); //extraction et stockage du user de l'état global
        const handleLogout = () => { 
            dispatch(logout());
            dispatch(clearUser());
            navigate('/');
        };

return(

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
        <NavLink className={"main-nav-item-online"} to='/profile'>
        <i className="fa fa-user-circle"></i>
        <h3>{user.userName}</h3>
        </NavLink>
        <NavLink onClick={handleLogout} to='/login'>
        <FontAwesomeIcon icon={faRightFromBracket} className='logout-icon' />
        </NavLink>
        <NavLink onClick={handleLogout} className={"sign-in"} to='/login'>Sign Out</NavLink>
        
      </div>
    </nav>




)};

export default HeaderOnLine ;
