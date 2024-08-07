import './styles/navbar.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../state/dataContext';

function Navbar(){

  const user = useContext(DataContext).user;
  const cart = useContext(DataContext).cart;


    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Smart Shopper</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        {/* Page Navigation */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/catalog">Catalog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/admin">Admin</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Cart">Cart</Link>
        </li>
         {/* Page Navigation */}

      </ul>

      <form className="d-flex" role="search">

      <button className="btn btn-outline-light btn-user">{user.name}</button>

        
        <Link className="btn btn btn-dark" type="submit">
          {cart.length} <i class="fa-solid fa-cart-shopping"></i>
        </Link>
      </form>
    </div>
  </div>
</nav>
    );
}

export default Navbar;