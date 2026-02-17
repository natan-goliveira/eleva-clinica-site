'use client';

import React, { useState, useEffect } from 'react';
import { WelcomeLoader } from '@/components/WelcomeLoader';
import { gsap } from 'gsap';

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('hasVisited', 'true');
    
    // Small delay then show content with animation
    setTimeout(() => {
      setShowContent(true);
      
      // Animate the main content in
      gsap.fromTo('.main-content',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }, 100);
  };

  return (
    <>
      {isLoading && <WelcomeLoader onComplete={handleLoaderComplete} />}
      <div 
        className={`main-content ${showContent ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          visibility: showContent ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease-out'
        }}
      >
        {children}
      </div>
    </>
  );
}
