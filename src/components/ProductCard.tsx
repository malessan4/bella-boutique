import React from 'react';
import { Link } from 'react-router-dom'; // Para el enlace al detalle del producto
import type { Product } from '../types/product.ts'; // Importa la interfaz del producto

import { useCart } from '../context/CardContext.tsx'; // Importa el hook useCart

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart(); // Obtén la función addToCart del contexto

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Añadir con el primer tamaño y color disponibles por defecto, cantidad 1
    // (Asumiendo que un ProductCard simple no requiere selección de talla/color)
    e.stopPropagation();
    e.preventDefault();
    const defaultSize = product.sizes.length > 0 ? product.sizes[0] : 'Única'; // 'Única' si no hay tallas
    const defaultColor = product.colors.length > 0 ? product.colors[0] : 'Defecto'; // 'Defecto' si no hay colores
    addToCart(product, 1, defaultSize, defaultColor);
    alert(`${product.name} añadido al carrito.`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <Link to={`/productos/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-48 h-48 object-cover rounded-md mb-4 hover:opacity-80 transition-opacity"
        />
      </Link>
      <Link to={`/productos/${product.id}`} className="text-xl font-semibold text-gray-800 hover:text-pink-600 mb-2">
        {product.name}
      </Link>
      <p className="text-gray-700 text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? 'Sin Stock' : 'Añadir al Carrito'}
      </button>
    </div>
  );
};

export default ProductCard;