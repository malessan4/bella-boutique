import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtiene el ID del producto de la URL

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Detalle del Producto #{id}</h1>
      <p>Aquí se mostrarán los detalles específicos del producto con ID: {id}.</p>
      {/* Información detallada del producto */}
    </div>
  );
};

export default ProductDetailPage;