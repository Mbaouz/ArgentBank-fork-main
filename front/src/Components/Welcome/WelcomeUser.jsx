
import '../../Pages/Profile/profile.css';
import { useSelector } from 'react-redux';




const WelcomeUser = ({ onEditClick }) => {

    const user = useSelector((state) => state.user);
    
return (

    <div className="header">

        <h1>Welcome back<br/>{user.firstName} {user.lastName}</h1>
    
        <button onClick={onEditClick} className="edit-button">Edit Name</button>
    
    </div>

)
};

export default WelcomeUser ; 