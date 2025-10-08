export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'ropa' | 'lenceria' | 'accesorios';
  // Las tallas y colores pueden ser objetos si necesitas más detalles, pero por ahora un array de strings está bien.
  sizes: string[]; // Ejemplo: ['XS', 'S', 'M', 'L']
  colors: string[]; // Ejemplo: ['Negro', 'Blanco', 'Rosa']
  stock: number; // Cantidad disponible
  rating?: number; // Opcional, para futuros reviews
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string; // Talla seleccionada por el usuario
  selectedColor: string; // Color seleccionado por el usuario
}