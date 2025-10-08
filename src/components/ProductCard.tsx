import React from 'react';
import { Link } from 'react-router-dom'; // Para el enlace al detalle del producto
import type { Product } from '../types/product.ts'; // Importa la interfaz del producto

interface ProductCardProps {
  product: Product; // Recibe un objeto producto como prop
  onAddToCart: (product: Product) => void; // Función para añadir al carrito
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      {/* Imagen del producto */}
      <Link to={`/productos/${product.id}`}> {/* Enlace al detalle del producto */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-48 h-48 object-cover rounded-md mb-4 hover:opacity-80 transition-opacity"
        />
      </Link>

      {/* Nombre del producto */}
      <Link to={`/productos/${product.id}`} className="text-xl font-semibold text-gray-800 hover:text-pink-600 mb-2">
        {product.name}
      </Link>

      {/* Precio del producto */}
      <p className="text-gray-700 text-lg font-bold mb-4">${product.price.toFixed(2)}</p>

      {/* Botón "Añadir al Carrito" */}
      <button
        onClick={() => onAddToCart(product)}
        className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
      >
        Añadir al Carrito
      </button>
    </div>
  );
};

export default ProductCard;