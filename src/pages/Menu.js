import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Menu.css';

const menuData = {
  pizzas: [
    { id: 1, name: 'Margherita', description: 'Molho, mozzarela e manjericão', prices: { p: 56, m: 72, g: 89 }, category: 'pizzas' },
    { id: 2, name: 'Pepperoni', description: 'Molho, mozzarela e pepperoni', prices: { p: 62, m: 78, g: 98 }, category: 'pizzas' },
    { id: 3, name: 'Carne Seca', description: 'Carne seca, cebola e mozzarela', prices: { p: 64, m: 82, g: 102 }, category: 'pizzas' },
    { id: 4, name: 'Frango com Catupiry', description: 'Frango, catupiry e mozzarela', prices: { p: 60, m: 76, g: 95 }, category: 'pizzas' },
    { id: 5, name: 'Bacon com Ovo', description: 'Bacon, ovo e mozzarela', prices: { p: 63, m: 80, g: 100 }, category: 'pizzas' },
    { id: 6, name: 'Vegetariana', description: 'Tomate, cebola, pimentão e mozzarela', prices: { p: 56, m: 70, g: 87 }, category: 'pizzas' },
    { id: 7, name: 'Quatro Queijos', description: 'Mozzarela, gorgonzola, parmesão e brie', prices: { p: 68, m: 85, g: 107 }, category: 'pizzas' },
    { id: 8, name: 'Italiana', description: 'Presunto, tomate e mozzarela', prices: { p: 58, m: 74, g: 92 }, category: 'pizzas' },
  ],
  bebidas: [
    { id: 101, name: 'Coca-Cola 2L', description: 'Refrigerante gelado', price: 12, category: 'bebidas' },
    { id: 102, name: 'Guaraná 2L', description: 'Refrigerante gelado', price: 11, category: 'bebidas' },
    { id: 103, name: 'Suco Natural Laranja 1L', description: 'Suco natural da fruta', price: 10, category: 'bebidas' },
    { id: 104, name: 'Água com Gás 1.5L', description: 'Água mineral com gás', price: 6, category: 'bebidas' },
    { id: 105, name: 'Cerveja Heineken 600ml', description: 'Bebida gelada', price: 15, category: 'bebidas' },
    { id: 106, name: 'Chá Gelado 1.5L', description: 'Chá gelado natural', price: 8, category: 'bebidas' },
  ],
  sobremesas: [
    { id: 201, name: 'Pizza Doce Chocolate', description: 'Chocolate, morango e calda', prices: { p: 56, m: 72, g: 89 }, category: 'sobremesas' },
    { id: 202, name: 'Pizza Doce Brigadeiro', description: 'Brigadeiro com granulado', prices: { p: 58, m: 74, g: 92 }, category: 'sobremesas' },
    { id: 203, name: 'Pizza Doce Nutella', description: 'Nutella e morango', prices: { p: 62, m: 78, g: 98 }, category: 'sobremesas' },
    { id: 204, name: 'Pizza Doce Banana com Canela', description: 'Banana, canela e mel', prices: { p: 56, m: 70, g: 87 }, category: 'sobremesas' },
  ],
  combos: [
    {
      id: 301,
      name: 'Combo Família',
      description: '2 pizzas grandes + 1 refrigerante 2L + 1 pizza doce broto',
      price: 189,
      category: 'combos',
      items: ['2x Pizza Grande', '1x Refri 2L', '1x Pizza Doce P']
    },
  ]
};

function Menu({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('pizzas');

  const categories = [
    { id: 'pizzas', label: 'Pizzas', icon: '🍕' },
    { id: 'bebidas', label: 'Bebidas', icon: '🥤' },
    { id: 'sobremesas', label: 'Sobremesas', icon: '🍰' },
    { id: 'combos', label: 'Combos', icon: '🎁' },
  ];

  const getProductsForCategory = () => {
    return menuData[selectedCategory] || [];
  };

  return (
    <div className="menu-container">
      <div className="categories">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span className="icon">{category.icon}</span>
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      <div className="products-grid">
        {getProductsForCategory().map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            category={selectedCategory}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
