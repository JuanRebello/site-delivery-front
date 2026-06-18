import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import '../styles/Cart.css';

function Cart({ cartItems, onRemove, onUpdateQuantity }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.selectedSize ? item.price : item.price;
      return total + (price * item.quantity);
    }, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Seu carrinho está vazio</h2>
        <p>Adicione alguns itens para começar</p>
        <Link to="/" className="continue-shopping-btn">
          Voltar ao Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Seu Carrinho</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              {item.selectedSize && (
                <p className="size-info">
                  Tamanho: {item.selectedSize === 'p' ? 'Pequena' : item.selectedSize === 'm' ? 'Média' : 'Grande'}
                </p>
              )}
              <p className="price">R$ {item.price.toFixed(2)}</p>
            </div>
            <div className="item-controls">
              <button
                className="qty-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              >
                <FaMinus />
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                className="qty-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                <FaPlus />
              </button>
            </div>
            <div className="item-total">
              R$ {(item.price * item.quantity).toFixed(2)}
            </div>
            <button
              className="remove-btn"
              onClick={() => onRemove(item.id)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>R$ {calculateTotal().toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Taxa de Entrega:</span>
          <span>R$ 5.00</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>R$ {(calculateTotal() + 5).toFixed(2)}</span>
        </div>
      </div>

      <div className="cart-actions">
        <Link to="/" className="continue-btn">
          Continuar Comprando
        </Link>
        <Link to="/checkout" className="checkout-btn">
          Ir para Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
