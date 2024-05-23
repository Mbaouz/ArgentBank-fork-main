import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<Profile/>}/>
    </Routes>
    
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
