import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CardContext.tsx'; // Importa el hook del carrito

const Header: React.FC = () => {
  const { getTotalItems } = useCart(); // Hook para manejar el carrito
  return (
    <header className="bg-pink-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Bella Boutique</Link>
        <ul className="flex space-x-6 items-center">
          <li><Link to="/productos" className="hover:text-pink-200">Productos</Link></li>
          <li>
            <Link to="/carrito" className="hover:text-pink-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {getTotalItems() > 0 && (
                <span className="ml-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </li>
          <li><Link to="/login" className="hover:text-pink-200">Login</Link></li>
          <li><Link to="/perfil" className="hover:text-pink-200">Perfil</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;