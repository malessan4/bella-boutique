import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.tsx'; // Importa tu ProductCard
import { mockProducts } from '../data/mockProduct.ts'; // Importa tus datos de prueba
import type { Product } from '../types/product.ts'; // Importa la interfaz Product

const ProductListingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  // El estado 'cart' y la función 'handleAddToCart' ya no son necesarios aquí
  // porque el carrito se gestiona a través del CartContext global.

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Nuestros Productos</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">Cargando productos...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListingPage;