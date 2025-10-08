import React from "react";
import './styles/global.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout.tsx'; // Importa el componente Layout
import { CartProvider } from './context/CardContext.tsx'; // Importa el CartProvider


// Importa tus componentes de página
import HomePage from './pages/HomePage.tsx';
import ProductListingPage from './pages/ProductListingPage.tsx';
import ProductDetailPage from './pages/ProductDetailPage.tsx';
import CartPage from './pages/CartPage.tsx';
import CheckoutPage from './pages/CheckoutPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider> {/* Envuelve tu app con el CartProvider */}
        <Layout> {/* Envuelve tus rutas con el Layout */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<ProductListingPage />} />
            <Route path="/productos/:id" element={<ProductDetailPage />} />
            <Route path="/carrito" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
            {/* Opcional: Ruta para 404 Not Found */}
            <Route path="*" element={
              <div className="container mx-auto p-4 text-center">
                <h1 className="text-4xl font-bold mt-10">404 - Página no encontrada</h1>
                <p className="mt-4">Lo sentimos, la página que buscas no existe.</p>
                <Link to="/" className="text-pink-600 hover:underline mt-2 inline-block">Volver al inicio</Link>
              </div>
            } />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
};

export default App;