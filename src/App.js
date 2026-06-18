import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Header from './components/Header';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedCart = localStorage.getItem('cartItems');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    } else {
      const newCart = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCart);
      localStorage.setItem('cartItems', JSON.stringify(newCart));
    }
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      const updatedCart = cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      );
      setCartItems(updatedCart);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    }
  };

  return (
    <Router>
      <div className="App">
        {user && <Header user={user} cartCount={cartItems.length} />}
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Menu onAddToCart={handleAddToCart} />
              ) : (
                <Login onLogin={setUser} />
              )
            }
          />
          <Route
            path="/carrinho"
            element={
              user ? (
                <Cart
                  cartItems={cartItems}
                  onRemove={handleRemoveFromCart}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              ) : (
                <Login onLogin={setUser} />
              )
            }
          />
          <Route
            path="/checkout"
            element={
              user ? (
                <Checkout
                  cartItems={cartItems}
                  user={user}
                  onClearCart={() => {
                    setCartItems([]);
                    localStorage.removeItem('cartItems');
                  }}
                />
              ) : (
                <Login onLogin={setUser} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
