import React, { useState } from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product, onAddToCart, category }) {
  const [selectedSize, setSelectedSize] = useState('m');
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    if (category === 'pizzas' || category === 'sobremesas') {
      const productToAdd = {
        ...product,
        selectedSize,
        price: product.prices[selectedSize]
      };
      onAddToCart(productToAdd);
    } else {
      onAddToCart(product);
    }
    setShowModal(false);
    alert('Adicionado ao carrinho!');
  };

  const getPrice = () => {
    if (category === 'pizzas' || category === 'sobremesas') {
      return `R$ ${product.prices[selectedSize].toFixed(2)}`;
    }
    return `R$ ${product.price.toFixed(2)}`;
  };

  return (
    <>
      <div className="product-card" onClick={() => setShowModal(true)}>
        <div className="product-image">
          {category === 'pizzas' && '🍕'}
          {category === 'bebidas' && '🥤'}
          {category === 'sobremesas' && '🍰'}
          {category === 'combos' && '🎁'}
        </div>
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <div className="product-footer">
          <span className="price">{getPrice()}</span>
          <button className="add-btn">+</button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>✕</button>
            <h2>{product.name}</h2>
            <p>{product.description}</p>

            {(category === 'pizzas' || category === 'sobremesas') && (
              <div className="size-selector">
                <label>Tamanho:</label>
                <div className="sizes">
                  <button
                    className={`size-btn ${selectedSize === 'p' ? 'active' : ''}`}
                    onClick={() => setSelectedSize('p')}
                  >
                    Pequena - R$ {product.prices.p.toFixed(2)}
                  </button>
                  <button
                    className={`size-btn ${selectedSize === 'm' ? 'active' : ''}`}
                    onClick={() => setSelectedSize('m')}
                  >
                    Média - R$ {product.prices.m.toFixed(2)}
                  </button>
                  <button
                    className={`size-btn ${selectedSize === 'g' ? 'active' : ''}`}
                    onClick={() => setSelectedSize('g')}
                  >
                    Grande - R$ {product.prices.g.toFixed(2)}
                  </button>
                </div>
              </div>
            )}

            <div className="modal-footer">
              <span className="total-price">{getPrice()}</span>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
