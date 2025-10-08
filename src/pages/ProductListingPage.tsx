// src/pages/ProductListingPage.tsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.tsx'; // Importa tu ProductCard
import { mockProducts } from '../data/mockProduct.ts'; // Importa tus datos de prueba
import type { Product } from '../types/product.ts'; // Importa la interfaz Product

const ProductListingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]); // Estado simple para el carrito (temporal)

  useEffect(() => {
    // En una app real, aquí harías una llamada a tu API para obtener los productos.
    // Por ahora, usamos la mock data.
    setProducts(mockProducts);
  }, []);

  const handleAddToCart = (productToAdd: Product) => {
    // Lógica simple para añadir al carrito (esto mejorará mucho más adelante)
    setCart((prevCart) => [...prevCart, productToAdd]);
    alert(`${productToAdd.name} ha sido añadido al carrito.`);
    console.log("Carrito actual:", [...cart, productToAdd]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Nuestros Productos</h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-600">Cargando productos...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListingPage;