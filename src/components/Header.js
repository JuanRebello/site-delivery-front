import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaSignOutAlt, FaHome } from 'react-icons/fa';
import '../styles/Header.css';

function Header({ user, cartCount }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cartItems');
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-emoji">🐢</span>
          <span className="logo-text">Leonardo's</span>
        </Link>

        <nav className="nav-links">
          <Link to="/" className="nav-link">
            <FaHome /> Menu
          </Link>
          <Link to="/carrinho" className="nav-link cart-link">
            <FaShoppingCart /> Carrinho
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt /> Sair
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
