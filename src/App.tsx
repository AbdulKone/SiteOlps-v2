import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Entrance from './components/Entrance';
import MainContent from './components/MainContent';
import Loading from './components/Loading';
import Menu from './components/Menu';
import ContactUs from './components/ContactUs';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black">
      <Menu />
      
      {!hasEntered ? (
        <div className="relative w-full h-screen">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 75 }}
            gl={{ antialias: true }}
          >
            <Suspense fallback={<Loading />}>
              <Entrance onEnter={() => setHasEntered(true)} />
            </Suspense>
          </Canvas>
        </div>
      ) : (
        <>
          <MainContent />
          <section id="contact" className="py-20 bg-black/30">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
              <ContactUs />
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;