import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '../data/mockProduct.ts'; // Importa tus datos de prueba
import type { Product, CartItem } from '../types/product.ts'; // Importa las interfaces
import { useCart } from '../context/CardContext.tsx'; // Importa el hook del carrito

const ProductDetailPage: React.FC = () => {
  const { addToCart } = useCart(); // Hook para manejar el carrito
  const { id } = useParams<{ id: string }>(); // Obtiene el ID de la URL
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    // En una app real, harías una llamada a la API con el ID del producto
    const foundProduct = mockProducts.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      // Establece el primer tamaño y color como preseleccionados
      if (foundProduct.sizes.length > 0) setSelectedSize(foundProduct.sizes[0]);
      if (foundProduct.colors.length > 0) setSelectedColor(foundProduct.colors[0]);
    } else {
      // Manejar el caso de producto no encontrado (por ejemplo, redirigir a 404 o página de productos)
      console.error("Producto no encontrado");
      setProduct(null); // O podrías poner un mensaje de error en la UI
    }
  }, [id]); // Re-ejecuta cuando el ID de la URL cambie

  const handleAddToCart = () => {
    if (!product) return;
    if (!selectedSize || !selectedColor) {
      alert("Por favor, selecciona una talla y un color.");
      return;
    }

    addToCart(product, quantity, selectedSize, selectedColor);
    alert(`${quantity}x ${product.name} (${selectedSize}, ${selectedColor}) añadido al carrito.`);

    // Crear el objeto CartItem para el log (opcional)

    const item: CartItem = {
      product: product,
      quantity: quantity,
      selectedSize: selectedSize,
      selectedColor: selectedColor,
    };

    // Aquí integrarías la lógica real para añadir al carrito global
    // Por ahora, solo una alerta y un log
    console.log("Añadir al carrito:", item);
    alert(`${quantity}x ${product.name} (${selectedSize}, ${selectedColor}) añadido al carrito.`);
  };

  if (!product) {
    return <div className="container mx-auto p-8 text-center text-gray-600">Cargando producto o producto no encontrado...</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-8 bg-white shadow-lg rounded-lg p-6">
        {/* Sección de Imágenes (puedes añadir un carrusel aquí) */}
        <div className="md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          {/* Aquí puedes añadir miniaturas si tienes más de una imagen */}
          {/* <div className="flex gap-2 mt-4">
            <img src={product.imageUrl} alt="thumbnail" className="w-20 h-20 object-cover rounded-md border-2 border-pink-500 cursor-pointer" />
            <img src="otra-imagen.jpg" alt="thumbnail" className="w-20 h-20 object-cover rounded-md border-2 border-gray-200 cursor-pointer" />
          </div> */}
        </div>

        {/* Sección de Detalles del Producto */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-pink-600 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

            {/* Selector de Tallas */}
            <div className="mb-4">
              <label htmlFor="size" className="block text-gray-700 text-sm font-bold mb-2">Talla:</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border-2 ${selectedSize === size ? 'bg-pink-500 text-white border-pink-500' : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de Colores */}
            <div className="mb-6">
              <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md border-2 ${selectedColor === color ? 'bg-pink-500 text-white border-pink-500' : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de Cantidad */}
            <div className="mb-6 flex items-center gap-4">
              <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold">Cantidad:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))} // Asegura que no sea menos de 1
                className="w-20 p-2 border border-gray-300 rounded-md text-center"
              />
              <span className="text-gray-600">({product.stock} disponibles)</span>
            </div>
          </div>

          {/* Botón Añadir al Carrito */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-pink-600 text-white text-lg font-bold py-3 rounded-lg hover:bg-pink-700 transition-colors focus:outline-none focus:ring-4 focus:ring-pink-300"
            disabled={!selectedSize || !selectedColor || quantity <= 0 || quantity > product.stock}
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;