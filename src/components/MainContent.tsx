import React from 'react';
import { motion } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel';
import Gallery from './Gallery';
import Store from './Store';

const projects = [
  {
    id: 1,
    title: "Urban Dreams",
    image: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "A cinematic journey through city nights"
  },
  {
    id: 2,
    title: "Nature's Whisper",
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Documentary series on wildlife"
  },
  // Add more projects as needed
];

const MainContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <header className="py-20 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-4"
        >
          Olympeus Record
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300"
        >
          Crafting Visual Stories That Inspire
        </motion.p>
      </header>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest Projects</h2>
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      <section id="gallery" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
          <Gallery />
        </div>
      </section>

      <section id="store" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Store</h2>
          <Store />
        </div>
      </section>
    </div>
  );
};

export default MainContent;