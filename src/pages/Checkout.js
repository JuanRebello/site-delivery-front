import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const PIX_KEY = '18871343794';
const PIX_OWNER = 'Juan Phelipe Mota Rebello';
const STORE_INFO = {
  name: "Leonardo's Delivery",
  address: 'R. dos Bandeirantes, 222 - Santa Cruz, Rio de Janeiro - RJ, 23575-250',
  phone: '(21) 97220-2405',
  hours: '18h às 04h'
};

function Checkout({ cartItems, user, onClearCart }) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
    return subtotal + 5;
  };

  const handlePlaceOrder = () => {
    const newOrderNumber = `LD-${Date.now()}`;
    setOrderNumber(newOrderNumber);
    setOrderPlaced(true);
    
    const order = {
      orderNumber: newOrderNumber,
      items: cartItems,
      user: user,
      paymentMethod,
      total: calculateTotal(),
      timestamp: new Date().toLocaleString('pt-BR')
    };
    
    console.log('Pedido realizado:', order);
    localStorage.setItem(`order-${newOrderNumber}`, JSON.stringify(order));
  };

  if (orderPlaced) {
    return (
      <div className="order-confirmation">
        <div className="confirmation-content">
          <div className="success-icon">✓</div>
          <h1>Pedido Confirmado!</h1>
          <p className="order-number">Número: {orderNumber}</p>
          
          {paymentMethod === 'pix' && (
            <div className="pix-info">
              <h3>Dados para Transferência PIX:</h3>
              <div className="pix-details">
                <p><strong>Chave PIX:</strong> {PIX_KEY}</p>
                <p><strong>Titular:</strong> {PIX_OWNER}</p>
                <p><strong>Referência:</strong> {orderNumber}</p>
              </div>
              <p className="pix-note">⚠️ Copie a chave PIX e realize a transferência em seu banco para confirmar o pedido.</p>
            </div>
          )}

          <div className="delivery-info">
            <h3>Informações de Entrega:</h3>
            <p><strong>Endereço de Entrega:</strong></p>
            <p>{user.address}</p>
            <p className="delivery-time">⏱️ Tempo estimado: 30-45 minutos</p>
          </div>

          <div className="store-contact">
            <h3>Entre em Contato:</h3>
            <p>📱 {STORE_INFO.phone}</p>
            <p>📍 {STORE_INFO.address}</p>
            <p>🕐 {STORE_INFO.hours}</p>
          </div>

          <button
            className="return-menu-btn"
            onClick={() => {
              onClearCart();
              navigate('/');
            }}
          >
            Voltar ao Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Finalizando Pedido</h1>
      
      <div className="checkout-content">
        <div className="checkout-section">
          <h2>Resumo do Pedido</h2>
          <div className="order-items">
            {cartItems.map(item => (
              <div key={item.id} className="order-item">
                <span>{item.name}</span>
                {item.selectedSize && (
                  <span className="size">({item.selectedSize === 'p' ? 'P' : item.selectedSize === 'm' ? 'M' : 'G'})</span>
                )}
                <span className="qty">x{item.quantity}</span>
                <span className="price">R$ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="order-total">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>R$ {(calculateTotal() - 5).toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Taxa de Entrega:</span>
              <span>R$ 5.00</span>
            </div>
            <div className="total-row final">
              <span>TOTAL:</span>
              <span>R$ {calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="checkout-section">
          <h2>Dados de Entrega</h2>
          <div className="delivery-details">
            <p><strong>Nome:</strong> {user.name}</p>
            <p><strong>Telefone:</strong> {user.phone}</p>
            <p><strong>Endereço:</strong> {user.address}</p>
          </div>
        </div>

        <div className="checkout-section">
          <h2>Forma de Pagamento</h2>
          <div className="payment-options">
            <label className="payment-option">
              <input
                type="radio"
                value="pix"
                checked={paymentMethod === 'pix'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>PIX (Online)</span>
            </label>
            <label className="payment-option">
              <input
                type="radio"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>Dinheiro (Na Entrega)</span>
            </label>
          </div>
        </div>

        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
}

export default Checkout;
