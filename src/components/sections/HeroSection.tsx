'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useLanguage } from '@/contexts/LanguageContext';
import { ButtonCTA } from '../ui/ButtonCTA';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo('.hero-label',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );

      tl.fromTo('.hero-title-line',
        { y: 50, opacity: 0, rotateX: 15 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
        '-=0.2'
      );

      tl.fromTo('.hero-divider',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: 'power2.inOut' },
        '-=0.3'
      );

      tl.fromTo('.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );

      tl.fromTo('.hero-proof',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      );

      tl.fromTo('.hero-cta',
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' },
        '-=0.2'
      );

      tl.fromTo('.hero-visual',
        { x: 80, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
        '-=0.7'
      );

      tl.fromTo('.hero-scroll-indicator',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );

      gsap.to('.hero-scroll-indicator', {
        y: 8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleLines = t.hero.title.split('\n');

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Background - gradiente azul original */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #427CFA 0%, #5B95DB 40%, #8BB8E8 100%)'
        }}
      />
      
      {/* Noise/texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Light accent glow */}
      <div 
        className="absolute top-0 left-[20%] w-[60%] h-[70%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.12) 0%, transparent 60%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl min-h-screen flex items-center px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 w-full py-24 lg:py-20">

          {/* Left Column */}
          <div className="flex-1 max-w-xl">
            <span className="hero-label inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/80 mb-8 font-dm">
              <span className="w-8 h-[1px] bg-white/60" />
              Tecnologia personalizada
            </span>

            <div className="mb-6 overflow-hidden" style={{ perspective: '600px' }}>
              {titleLines.map((line, i) => (
                <h1 
                  key={i}
                  className="hero-title-line text-[clamp(2.2rem,5vw,3.25rem)] font-normal text-white leading-[1.12] tracking-tight"
                  style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                >
                  {line}
                </h1>
              ))}
            </div>

            <div className="hero-divider w-16 h-[2px] bg-white/50 mb-6 origin-left" />

            <p className="hero-subtitle text-lg text-white/60 leading-relaxed mb-8 font-dm max-w-md">
              {t.hero.subtitle}
            </p>

            <div className="hero-proof mb-8">
              <Image
                src="/assets/provasocial.png"
                alt="Prova social - clientes satisfeitos"
                width={120}
                height={40}
                className="object-contain opacity-80"
              />
            </div>

            <div className="hero-cta flex items-center gap-6">
              <ButtonCTA href="#abordagem">
                {t.hero.cta}
              </ButtonCTA>
              
            </div>
          </div>

          {/* Right Column */}
          <div className="hero-visual flex-1 mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full blur-[120px]"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              />
              <Image
                src="/assets/dashboardMobile.image.png"
                alt="Dashboard e aplicativo mobile personalizado"
                width={800}
                height={600}
                className="object-contain w-full h-auto relative z-10 drop-shadow-2xl"
                priority
              />
              <div className="absolute bottom-0 left-4 z-20 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10">
                <p className="text-[11px] text-white/50 font-dm uppercase tracking-wider mb-1">Feito sob medida</p>
                <p className="text-sm text-white/90 font-dm font-medium">Para a sua cl&iacute;nica</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-indicator absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[11px] text-white/30 font-dm uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 text-white/30" />
        </div>
      </div>
    </section>
  );
}
