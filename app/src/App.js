import logo from './logo.svg';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import AboutUs from './pages/aboutUs';
import Home from './pages/home';
import Admin from './pages/admin';
import CartPage from './pages/cart';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import GlobalProvider from './state/globalProvider';

function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
    <div className='App'>   
    
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/catalog" element={<Catalog />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/Cart" element={<CartPage />} />
      </Routes>

      <Footer/>
    </div>  
    
    </BrowserRouter> 
    </GlobalProvider>
  );
}

export default App;
