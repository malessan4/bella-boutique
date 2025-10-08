import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-pink-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Tu Marca</Link>
        <ul className="flex space-x-6">
          <li><Link to="/productos" className="hover:text-pink-200">Productos</Link></li>
          <li><Link to="/carrito" className="hover:text-pink-200">Carrito</Link></li>
          <li><Link to="/login" className="hover:text-pink-200">Login</Link></li>
          <li><Link to="/perfil" className="hover:text-pink-200">Perfil</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;