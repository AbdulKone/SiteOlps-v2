import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Camera, Film, ExternalLink } from 'lucide-react';

const projects = {
  reels: [
    {
      id: 1,
      title: "Urban Life",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Reels",
      videoUrl: "https://www.instagram.com/reel/sample-reel-1",
      platform: "Instagram"
    },
    {
      id: 2,
      title: "Street Dance",
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Reels",
      videoUrl: "https://www.instagram.com/reel/sample-reel-2",
      platform: "Instagram"
    }
  ],
  clips: [
    {
      id: 3,
      title: "Music Video - 'Neon Dreams'",
      image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Clip Vidéos",
      videoUrl: "https://www.youtube.com/watch?v=sample-video-1",
      platform: "YouTube"
    },
    {
      id: 4,
      title: "Artist Promo",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Clip Vidéos",
      videoUrl: "https://www.youtube.com/watch?v=sample-video-2",
      platform: "YouTube"
    }
  ],
  photos: [
    {
      id: 5,
      title: "Concert Photography",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Photo"
    },
    {
      id: 6,
      title: "Artist Portraits",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      category: "Photo"
    }
  ]
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: null },
    { id: 'reels', name: 'Reels', icon: Play },
    { id: 'clips', name: 'Clip Vidéos', icon: Film },
    { id: 'photos', name: 'Photo', icon: Camera }
  ];

  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return [...projects.reels, ...projects.clips, ...projects.photos];
    }
    return projects[activeCategory] || [];
  };

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <div className="flex justify-center gap-4 mb-12">
        {categories.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveCategory(id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-colors ${
              activeCategory === id
                ? 'bg-yellow-400 text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {name}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {getFilteredProjects().map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative group cursor-pointer"
            onClick={() => 'videoUrl' in project ? handleVideoClick(project.videoUrl) : undefined}
          >
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {'videoUrl' in project && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-8 h-8 text-black" />
                  </div>
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-yellow-400">{project.category}</p>
                  {'platform' in project && (
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-sm">{project.platform}</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;