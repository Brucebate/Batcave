'use client';

import { useEffect, useState } from 'react';
import Batcave from '../pages/Batcave';
import Background from './Background';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [startFade, setStartFade] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Show text after a short delay
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 500);

    // Start fade out after 3 seconds
    const fadeTimer = setTimeout(() => {
      setStartFade(true);
    }, 3000);

    // Hide splash screen after fade out
    const hideTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (showSplash) {
    return (
      <Background>
  <div className="relative w-full h-full flex flex-col justify-center items-center text-center">
    
    <h1
      className={`font-oldStandard font-normal text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl z-10 mb-2 transition-opacity duration-1000 ${
        textVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      The
    </h1>

    <h1
      className={`font-oldStandard font-normal text-white text-6xl sm:text-8xl md:text-10xl lg:text-[11rem] xl:text-[13rem] z-10 transition-opacity duration-1000 ${
        textVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      BRUCEBATE
    </h1>
  </div>
</Background>
    );
  }


  return (
    <main> 
      <Batcave />
    </main>
  );
}