'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface WelcomeLoaderProps {
  onComplete: () => void;
}

export function WelcomeLoader({ onComplete }: WelcomeLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    { text: 'Inovação', delay: 0 },
    { text: 'Tecnologia', delay: 0.8 },
    { text: 'Transformação', delay: 1.6 },
    { text: '73.code', delay: 2.4, isLogo: true },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Fade out the entire loader
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
              onComplete();
            }
          });
        }
      });

      // Animate progress bar
      tl.to(progressRef.current, {
        scaleX: 1,
        duration: 3.2,
        ease: 'power1.inOut',
      }, 0);

      // Animate each word
      words.forEach((word, index) => {
        const wordEl = document.querySelector(`.welcome-word-${index}`);
        if (!wordEl) return;

        // Word entrance
        tl.fromTo(wordEl, 
          { 
            opacity: 0, 
            y: 40,
            filter: 'blur(10px)',
          },
          { 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)',
            duration: 0.5,
            ease: 'power3.out',
            onStart: () => setCurrentWordIndex(index),
          },
          word.delay
        );

        // Word exit (except the last one - logo)
        if (index < words.length - 1) {
          tl.to(wordEl, {
            opacity: 0,
            y: -30,
            filter: 'blur(5px)',
            duration: 0.4,
            ease: 'power2.in',
          }, word.delay + 0.6);
        }
      });

      // Final logo animation - scale and prepare for transition
      const logoWord = document.querySelector(`.welcome-word-${words.length - 1}`);
      if (logoWord) {
        tl.to(logoWord, {
          scale: 1.1,
          duration: 0.4,
          ease: 'power2.out',
        }, 3.0);
        
        tl.to(logoWord, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.inOut',
        }, 3.4);
      }

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#427CFA]"
      style={{ fontFamily: 'var(--font-radio-grotesk)' }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#427CFA] via-[#5B8FE8] to-[#3366CC]" />
      
      {/* Subtle animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Words container */}
      <div 
        ref={wordsRef}
        className="relative z-10 flex items-center justify-center min-h-[120px]"
      >
        {words.map((word, index) => (
          <div
            key={word.text}
            className={`welcome-word-${index} absolute text-center`}
            style={{ opacity: 0 }}
          >
            <span 
              className={`text-white font-medium tracking-tight ${
                word.isLogo 
                  ? 'text-5xl md:text-7xl' 
                  : 'text-4xl md:text-6xl'
              }`}
            >
              {word.isLogo ? (
                <>
                  73<span className="text-white/70">.</span>code
                </>
              ) : (
                word.text
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-white/20 rounded-full overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-white rounded-full origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {/* Subtle tagline */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <span className="text-white/50 text-sm tracking-widest uppercase font-dm">
          Sistemas de Gestão
        </span>
      </div>
    </div>
  );
}
