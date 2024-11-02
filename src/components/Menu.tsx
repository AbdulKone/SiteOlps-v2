import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Home, Camera, Film, ShoppingBag, Mail } from 'lucide-react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Film, label: 'Projects', href: '#projects' },
    { icon: Camera, label: 'Gallery', href: '#gallery' },
    { icon: ShoppingBag, label: 'Store', href: '#store' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed right-8 top-8 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6 text-black" /> : <MenuIcon className="w-6 h-6 text-black" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="absolute top-16 right-0 bg-gray-900 rounded-lg shadow-xl w-64 py-4"
          >
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 px-6 py-3 hover:bg-gray-800 transition-colors text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5 text-yellow-400" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;