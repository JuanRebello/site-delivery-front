import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPizza } from 'react-icons/fa';
import '../styles/Login.css';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      if (!formData.email || !formData.password) {
        setError('Por favor, preencha todos os campos');
        return;
      }
      const user = {
        id: Date.now(),
        email: formData.email,
        name: formData.email.split('@')[0]
      };
      localStorage.setItem('user', JSON.stringify(user));
      onLogin(user);
      navigate('/');
    } else {
      if (!formData.email || !formData.password || !formData.name || !formData.phone || !formData.address) {
        setError('Por favor, preencha todos os campos');
        return;
      }
      const newUser = {
        id: Date.now(),
        email: formData.email,
        name: formData.name,
        phone: formData.phone,
        address: formData.address
      };
      localStorage.setItem('user', JSON.stringify(newUser));
      onLogin(newUser);
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-section">
          <div className="logo-icon">🐢</div>
          <h1>Leonardo's Delivery</h1>
          <p>As Melhores Pizzas do Rio</p>
        </div>

        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Sua senha"
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                />
              </div>
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(21) 99999-9999"
                />
              </div>
              <div className="form-group">
                <label>Endereço</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Seu endereço completo"
                />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Escolha uma senha"
                />
              </div>
            </>
          )}

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Entrar' : 'Criar Conta'}
          </button>
        </form>

        <div className="toggle-form">
          <p>
            {isLogin ? 'Não tem conta? ' : 'Já tem conta? '}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
            >
              {isLogin ? 'Cadastre-se' : 'Faça login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
