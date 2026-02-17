'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
import { ButtonCTA } from '../ui/ButtonCTA';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function CTAFinalSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-final-headline, .cta-final-desc',
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.7, 
          stagger: 0.16, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            once: true,
          }
        }
      );

      gsap.fromTo('.cta-final-btn',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.cta-final-btn',
            start: 'top 85%',
            once: true,
          },
          onComplete: () => {
            if (glowRef.current) {
              gsap.to(glowRef.current, {
                opacity: 0.4,
                scale: 1.1,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
              });
            }
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contato" 
      aria-label="Agendar conversa"
      className="relative py-[140px] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#427CFA]/8 blur-[200px]" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#427CFA]/5 blur-[150px]" />
      
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#427CFA] mb-8 font-dm">
          <span className="w-8 h-[1px] bg-[#427CFA]" />
          Pronto para come&ccedil;ar?
          <span className="w-8 h-[1px] bg-[#427CFA]" />
        </span>

        <h2 
          className="cta-final-headline text-[clamp(2rem,4.5vw,3.25rem)] font-normal text-white mb-6 leading-[1.1]"
          style={{ fontFamily: 'var(--font-radio-grotesk)' }}
        >
          {t.cta.headline}
        </h2>
        
        <p className="cta-final-desc text-lg text-white/50 mb-10 font-dm max-w-lg mx-auto">
          {t.cta.subtitle}
        </p>
        
        <div className="cta-final-btn relative inline-flex">
          <div ref={glowRef} className="absolute inset-0 rounded-full bg-[#427CFA]/30 blur-xl scale-100 opacity-0" />
          <ButtonCTA href="#contato">
            {t.cta.button}
          </ButtonCTA>
        </div>
      </div>
    </section>
  );
}
