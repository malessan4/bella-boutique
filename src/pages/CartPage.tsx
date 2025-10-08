import React from 'react';
import { useCart } from '../context/CardContext.tsx'; // Importa el hook del carrito
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center bg-white shadow-lg rounded-lg mt-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Tu Carrito Está Vacío</h1>
        <p className="text-gray-600 mb-6">Parece que aún no has añadido nada a tu carrito de compras.</p>
        <Link to="/productos" className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors text-lg font-bold">
          Explorar Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Tu Carrito de Compras</h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 gap-6">
          {cart.map((item) => (
            <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 last:border-b-0">
              <div className="flex items-center gap-4 w-full sm:w-2/3 mb-4 sm:mb-0">
                <Link to={`/productos/${item.product.id}`}>
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-md shadow-sm"
                  />
                </Link>
                <div className="text-left">
                  <Link to={`/productos/${item.product.id}`} className="text-xl font-semibold text-gray-800 hover:text-pink-600">
                    {item.product.name}
                  </Link>
                  <p className="text-gray-600 text-sm">Talla: {item.selectedSize}</p>
                  <p className="text-gray-600 text-sm">Color: {item.selectedColor}</p>
                  <p className="text-pink-600 font-bold mt-1">${item.product.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-1/3 justify-end">
                {/* Controles de Cantidad */}
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border-x border-gray-300">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md"
                    disabled={item.quantity >= item.product.stock} // Evita añadir más del stock
                  >
                    +
                  </button>
                </div>

                {/* Precio Subtotal por Artículo */}
                <p className="text-lg font-bold text-gray-800 w-24 text-right hidden md:block">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>

                {/* Botón de Eliminar */}
                <button
                  onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                  className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Eliminar producto"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen del Carrito */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col items-end">
          <div className="flex justify-between w-full sm:w-1/2 text-xl font-bold text-gray-800">
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            className="mt-6 bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors text-xl font-bold"
          >
            Proceder al Pago
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;