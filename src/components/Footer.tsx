import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Tu Marca. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-pink-300">Privacidad</a>
          <a href="#" className="hover:text-pink-300">Términos</a>
          <a href="#" className="hover:text-pink-300">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;