import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEditUserName } from "../../fetch";
import { updateUser } from "../../store/userSlice";
import { clearUser } from "../../store/userSlice";
import './editForm.css'


const EditForm = () => {

    const user = useSelector((state) => state.user);
    const token = useSelector ((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [newUserName, setNewUserName] = useState(user.userName);

    const handleSaveClick = async (e) => {
        e.preventDefault();
        const response = fetchEditUserName(token, newUserName)
        if(response !== "null") {
            dispatch(updateUser(newUserName));
            alert("User Name change performed succesfuly !")
        } else {
            alert("Error, change didn't work, please try again !")
        };
    };

    const handleCancelClick = async (e) => {
        e.preventDefault();
        dispatch(clearUser());
        navigate('/profile');
    };

    
    return (
<main className="main">
 <section className="update-name">
       <form>
             <div className="update-name-input-wrapper">
                
                <input 
                type="text" 
                id="user"
                placeholder="New Username" 
                onChange={e => setNewUserName(e.target.value)}
                />
             </div>
             <div className='buttons-edit'>
                 <button onClick={handleSaveClick} type="submit" className="edit-button">Save</button>
                 <button onClick={handleCancelClick} type="button" className="edit-button">Cancel</button>
            </div>
      </form>

 </section>
</main>


    )
}

export default EditForm; 