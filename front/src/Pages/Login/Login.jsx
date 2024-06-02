
import { useNavigate } from "react-router-dom"
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { login  } from "../../store/authSlice";
import { fetchProfile } from "../../fetch"
import { setUser } from "../../store/userSlice";
import './login.css'
import Header from '../../Components/Header/Header';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => { //soumission de mail et mdp pour login
      e.preventDefault();
      try { 
          const response = await fetch ("http://localhost:3001/api/v1/user/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              }, 
              body: JSON.stringify({ email, password }), //transformation en chaine JSON + inclusion requete
          });
          if (response.status === 400) {
              setShowError(true);
          } else {
              const result = await response.json();
              const token = result.body.token; //extraction du token

              dispatch(login(token)); //action redux login renvoyer au store

              const responseProfile = await fetchProfile(result.body.token);
          
              dispatch(setUser(responseProfile.body)); //action redux pour maj de l'utilisateur
              navigate('/profile'); //si connexion réussi navigation vers la page
          }
          
      } catch (error) {
          console.error("Une erreur s'est produite lors de la demande de connexion :", error);
      }
  };


return (  
  
    <div className="body">
       <Header/>
<main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin} >
          <div className="input-wrapper">
            <label htmlFor="email"  >Username</label>
            <input type="email" id="email" onChange={e => setEmail(e.target.value)}  />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"  onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
            
          </div>
          
           <button type='submit' className="sign-in-button">Sign In</button>
           {showError && (
                                <div className="error-login">
                                    <p>
                                        Something wrong, check our username or your password and retry !
                                    </p>
                                </div>)}
          
        </form>
      </section>
    </main>
    </div>
    )};

    export default Login ;