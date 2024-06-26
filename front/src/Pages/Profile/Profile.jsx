
import HeaderOnLine from '../../Components/HeaderOnLine/HeaderOnLine';
import './profile.css'
import WelcomeUser from '../../Components/Welcome/WelcomeUser';
import EditForm from '../../Components/Edit/EditForm';

import { useState } from 'react';

const Profile = () => {
  
  const [onchange, setOnchange] = useState(false);
  const handleEditClick = () => {
    setOnchange(true);
  };


  const handleCancelClick = (e) => {
    e.preventDefault();
    setOnchange(false);
     //dispatch(clearUser());
  };




return(
  <div>
<HeaderOnLine/>
<div className='container'>

    <main className="main bg-dark">
     
    {onchange ? <EditForm onCancel={handleCancelClick} /> : <WelcomeUser  onEditClick={handleEditClick}  />}


      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>


</div>
</div>

)



};

export default Profile ;