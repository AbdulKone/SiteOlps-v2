import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Classic Logo T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categories: ["T-Shirts"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Urban Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categories: ["Hoodies"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Filmmaker Cap",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categories: ["Accessories"],
    sizes: ["One Size"]
  }
];

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "T-Shirts", "Hoodies", "Accessories"];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.categories.includes(selectedCategory));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center mb-8 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg overflow-hidden"
          >
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-yellow-400 text-lg mb-4">${product.price}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-3 py-1 border border-gray-600 rounded hover:border-yellow-400 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button className="w-full py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Store;