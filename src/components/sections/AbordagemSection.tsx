'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Code, Key } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stepIcons = [Search, Code, Key];

export function AbordagemSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    { number: 1, title: t.abordagem.steps.step1.title, description: t.abordagem.steps.step1.description },
    { number: 2, title: t.abordagem.steps.step2.title, description: t.abordagem.steps.step2.description },
    { number: 3, title: t.abordagem.steps.step3.title, description: t.abordagem.steps.step3.description },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.abordagem-label, .abordagem-headline, .abordagem-desc',
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.65, 
          stagger: 0.18, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.abordagem-headline',
            start: 'top 82%',
            once: true,
          }
        }
      );

      gsap.fromTo('.step-card',
        { y: 50, opacity: 0, scale: 0.95 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.6, 
          stagger: 0.18, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.steps-grid',
            start: 'top 78%',
            once: true,
          }
        }
      );

      gsap.fromTo('.abordagem-highlight',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.7, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.abordagem-highlight',
            start: 'top 85%',
            once: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="abordagem" 
      aria-label="Nossa abordagem"
      className="py-[140px] bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header - centered */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="abordagem-label inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#427CFA] mb-5 font-dm">
            <span className="w-8 h-[1px] bg-[#427CFA]" />
            {t.abordagem.label}
            <span className="w-8 h-[1px] bg-[#427CFA]" />
          </span>
          
          <h2 
            className="abordagem-headline text-[clamp(2rem,4vw,3rem)] font-normal text-[#0F172A] mb-6 whitespace-pre-line leading-[1.1]"
            style={{ fontFamily: 'var(--font-radio-grotesk)' }}
          >
            {t.abordagem.headline}
          </h2>
          
          <p className="abordagem-desc text-lg text-[#64748B] leading-relaxed font-dm max-w-2xl mx-auto">
            {t.abordagem.description}
          </p>
        </div>

        {/* Steps - horizontal cards */}
        <div className="steps-grid grid md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => {
            const StepIcon = stepIcons[index];
            return (
              <div 
                key={index}
                className="step-card group relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-[1.5rem] p-8 hover:shadow-lg hover:border-[#427CFA]/20 transition-all duration-500"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-[#427CFA] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <StepIcon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <span 
                    className="text-5xl font-light text-[#E2E8F0] group-hover:text-[#427CFA]/20 transition-colors duration-500"
                    style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                  >
                    0{step.number}
                  </span>
                </div>
                
                <h4 
                  className="text-xl font-semibold text-[#0F172A] mb-2"
                  style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                >
                  {step.title}
                </h4>
                <p className="text-[0.9rem] text-[#64748B] leading-relaxed font-dm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight box */}
        <div className="abordagem-highlight mt-16 bg-[#0F172A] rounded-[1.5rem] p-10 lg:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#427CFA]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#427CFA]/5 blur-[80px]" />
          <div className="relative z-10">
            <p 
              className="text-2xl md:text-3xl font-normal text-white/90 leading-tight mb-3"
              style={{ fontFamily: 'var(--font-radio-grotesk)' }}
            >
              A ferramenta &eacute; <span className="text-[#427CFA]">sua</span>.
            </p>
            <p className="text-base text-white/40 font-dm max-w-md mx-auto">
              Sem licen&ccedil;a mensal. Sem depend&ecirc;ncia. Sem surpresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
