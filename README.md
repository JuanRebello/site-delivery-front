# Leonardo's Delivery - Pizzaria Online

## 🐢 Bem-vindo ao Leonardo's Delivery!

Plataforma de delivery para pizzaria construída em React, com suporte completo para mobile.

## 🚀 Funcionalidades

- ✅ Autenticação e Cadastro de Usuários
- ✅ Menu com múltiplas categorias (Pizzas, Bebidas, Sobremesas, Combos)
- ✅ Carrinho de compras funcional
- ✅ Sistema de checkout com PIX e dinheiro
- ✅ Responsivo para mobile e desktop
- ✅ Persistência de dados no localStorage

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/JuanRebello/site-delivery-front.git
cd site-delivery-front
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

4. **Acesse a aplicação**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📋 Estrutura do Projeto

```
src/
├── pages/
│   ├── Login.js          # Página de login e cadastro
│   ├── Menu.js           # Página do menu de produtos
│   ├── Cart.js           # Página do carrinho
│   └── Checkout.js       # Página de finalização do pedido
├── components/
│   ├── Header.js         # Cabeçalho da aplicação
│   └── ProductCard.js    # Card de produto
├── styles/
│   ├── App.css
│   ├── Login.css
│   ├── Header.css
│   ├── Menu.css
│   ├── ProductCard.css
│   ├── Cart.css
│   └── Checkout.css
├── App.js                # Componente principal
└── index.js              # Entrada da aplicação
```

## 🎨 Customização

### Editar Informações da Loja
Abra `src/pages/Checkout.js` e procure por:
```javascript
const STORE_INFO = {
  name: "Leonardo's Delivery",
  address: 'R. dos Bandeirantes, 222 - Santa Cruz, Rio de Janeiro - RJ, 23575-250',
  phone: '(21) 97220-2405',
  hours: '18h às 04h'
};
```

### Editar Dados PIX
No mesmo arquivo, procure por:
```javascript
const PIX_KEY = '18871343794';
const PIX_OWNER = 'Juan Phelipe Mota Rebello';
```

### Editar Menu
Abra `src/pages/Menu.js` e edite o objeto `menuData` com seus produtos.

### Editar Cores
As cores estão principalmente nos arquivos CSS. A cor principal é `#228B22` (verde).

## 🔐 Segurança

⚠️ **Importante**: Esta é uma versão de demonstração. Para produção:
- Implemente autenticação real com um backend
- Nunca exiba dados sensíveis no frontend
- Use HTTPS
- Implemente validações no servidor

## 📱 Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Execute `npm run build`
2. Faça upload da pasta `build` no Netlify

## 🛠️ Tecnologias

- React 18
- React Router DOM
- React Icons
- CSS3
- localStorage API

## 📞 Suporte

Para dúvidas sobre a customização, entre em contato!

---

**Leonardo's Delivery** 🐢🍕
