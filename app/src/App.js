import logo from './logo.svg';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import AboutUs from './pages/aboutUs';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Catalog></Catalog>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>   
  );
}

export default App;
