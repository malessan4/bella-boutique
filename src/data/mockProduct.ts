import type { Product } from '../types/product.ts'; // Asegúrate de la ruta correcta

export const mockProducts: Product[] = [
    {
        id: '1',
        name: 'Sujetador de Encaje Elegancia',
        description: 'Un sujetador balconette de encaje delicado, perfecto para el uso diario y ocasiones especiales.',
        price: 39.99,
        imageUrl: 'https://via.placeholder.com/400x400/FFC0CB/FFFFFF?text=SujetadorEncaje', // Placeholder para empezar
        category: 'lenceria',
        sizes: ['75B', '80B', '85C', '90C'],
        colors: ['Negro', 'Blanco', 'Rojo'],
        stock: 15
    },
    {
        id: '2',
        name: 'Vestido Midi Floral',
        description: 'Vestido midi con estampado floral, ideal para primavera y verano. Tejido ligero y fluido.',
        price: 59.99,
        imageUrl: 'https://via.placeholder.com/400x400/DDA0DD/FFFFFF?text=VestidoFloral',
        category: 'ropa',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Azul', 'Verde', 'Rosa'],
        stock: 10
    },
    {
        id: '3',
        name: 'Body de Red y Encaje',
        description: 'Body sexy de red y encaje con detalles ajustables. Realza la figura.',
        price: 49.99,
        imageUrl: 'https://via.placeholder.com/400x400/9370DB/FFFFFF?text=BodyEncaje',
        category: 'lenceria',
        sizes: ['S', 'M', 'L'],
        colors: ['Negro', 'Morado'],
        stock: 8
    },
    {
        id: '4',
        name: 'Blusa de Seda Mangas Abullonadas',
        description: 'Blusa elegante de seda con mangas abullonadas y cuello alto. Perfecta para cualquier ocasión.',
        price: 45.00,
        imageUrl: 'https://via.placeholder.com/400x400/F0F8FF/333333?text=BlusaSeda',
        category: 'ropa',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Blanco', 'Crema', 'Negro'],
        stock: 12
    }
    // Añade más productos aquí...
];

// Nota sobre imageUrl: He usado via.placeholder.com para tener imágenes temporales. Luego podrás cambiarlas por imágenes reales de tus productos.