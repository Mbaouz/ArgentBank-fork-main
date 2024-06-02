import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from './Pages/Profile/Profile';
import { Provider } from 'react-redux';
import {store} from './store/store'
import SecureRoute from './secureRoute'
import EditUser from './Pages/EditUser/EditUser';

function App() {
  return (
    <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
    
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<SecureRoute><Profile/></SecureRoute>}/>
    <Route path='/edit' element={<SecureRoute><EditUser/></SecureRoute>}/>
    </Routes>
    
    <Footer/>
    </div>
    </BrowserRouter>
    </Provider>
    </React.StrictMode>
  );
}

export default App;
