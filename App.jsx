import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store'


function App(){

return (


<BrowserRouter>
    
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profil' element={<Profil />} />
      
    </Routes>
    <Footer />
    
  </BrowserRouter>






);
}

export default App ;