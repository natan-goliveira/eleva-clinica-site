'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import {
  ChevronDown,
  Building2,
  Stethoscope,
  Sparkles,
  AlertCircle,
  Lightbulb,
  Package,
  Calendar,
  MessageCircle,
  Headphones,
  FileText
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from '@/components/Logo';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

interface HighlightItem {
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
}

export function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const highlightRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // ... (features, support, highlight definitions remain unchanged) ...
  const features: FeatureItem[] = locale === 'pt' ? [
    { icon: <Building2 className="w-5 h-5" />, title: 'Para Clínicas', description: 'Gestão completa para seu negócio', href: '#para-quem' },
    { icon: <Stethoscope className="w-5 h-5" />, title: 'Gestão de Pacientes', description: 'Prontuários e histórico integrados', href: '#entregamos' },
    { icon: <Sparkles className="w-5 h-5" />, title: 'Automação Inteligente', description: 'Elimine tarefas repetitivas', href: '#abordagem' },
    { icon: <AlertCircle className="w-5 h-5" />, title: 'O Problema', description: 'Entenda os desafios do mercado', href: '#problema' },
    { icon: <Package className="w-5 h-5" />, title: 'O que Entregamos', description: 'Soluções completas e integradas', href: '#entregamos' },
    { icon: <Lightbulb className="w-5 h-5" />, title: 'Nossa Abordagem', description: 'Metodologia focada em resultados', href: '#abordagem' }
  ] : [
    { icon: <Building2 className="w-5 h-5" />, title: 'For Clinics', description: 'Complete management for your business', href: '#para-quem' },
    { icon: <Stethoscope className="w-5 h-5" />, title: 'Patient Management', description: 'Integrated records and history', href: '#entregamos' },
    { icon: <Sparkles className="w-5 h-5" />, title: 'Smart Automation', description: 'Eliminate repetitive tasks', href: '#abordagem' },
    { icon: <AlertCircle className="w-5 h-5" />, title: 'The Problem', description: 'Understand market challenges', href: '#problema' },
    { icon: <Package className="w-5 h-5" />, title: 'What We Deliver', description: 'Complete integrated solutions', href: '#entregamos' },
    { icon: <Lightbulb className="w-5 h-5" />, title: 'Our Approach', description: 'Results-focused methodology', href: '#abordagem' }
  ];

  const support: FeatureItem[] = locale === 'pt' ? [
    { icon: <Calendar className="w-5 h-5" />, title: 'Agendar Conversa', description: 'Fale com um especialista', href: '#cta-final' },
    { icon: <MessageCircle className="w-5 h-5" />, title: 'WhatsApp', description: 'Tire suas dúvidas rapidamente', href: 'https://wa.me/5511999999999' },
    { icon: <Headphones className="w-5 h-5" />, title: 'Suporte', description: 'Estamos aqui para ajudar', href: '#cta-final' }
  ] : [
    { icon: <Calendar className="w-5 h-5" />, title: 'Schedule a Call', description: 'Talk to a specialist', href: '#cta-final' },
    { icon: <MessageCircle className="w-5 h-5" />, title: 'WhatsApp', description: 'Quick answers to your questions', href: 'https://wa.me/5511999999999' },
    { icon: <Headphones className="w-5 h-5" />, title: 'Support', description: 'We are here to help', href: '#cta-final' }
  ];

  const highlight: HighlightItem = locale === 'pt' ? {
    image: '/case-preview.jpg',
    tag: 'CASE DE SUCESSO',
    title: 'Clínica Integrada aumentou 40% a produtividade',
    subtitle: 'com sistema personalizado',
    ctaText: 'Ver case',
    ctaHref: '#entregamos'
  } : {
    image: '/case-preview.jpg',
    tag: 'SUCCESS STORY',
    title: 'Integrated Clinic increased productivity by 40%',
    subtitle: 'with customized system',
    ctaText: 'View case',
    ctaHref: '#entregamos'
  };

  useEffect(() => {
    const handleScroll = () => {
      const wasScrolled = isScrolled;
      const nowScrolled = window.scrollY > 20;
      setIsScrolled(nowScrolled);

      // GSAP animation for smooth header transition
      if (headerRef.current && wasScrolled !== nowScrolled) {
        if (nowScrolled) {
          gsap.to(headerRef.current, {
            y: 0,
            duration: 0.35,
            ease: 'power3.out'
          });
        } else {
          gsap.to(headerRef.current, {
            y: 0,
            duration: 0.35,
            ease: 'power3.out'
          });
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    if (!menuRef.current || !menuContentRef.current || !backdropRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      tl.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' }, 0);
      tl.fromTo(menuRef.current, { opacity: 0, y: -10, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' }, 0.05);
      tl.fromTo(menuItemsRef.current.filter(Boolean), { opacity: 0, y: 15, x: -5 }, { opacity: 1, y: 0, x: 0, duration: 0.35, stagger: 0.04, ease: 'power2.out' }, 0.15);

      if (highlightRef.current) {
        tl.fromTo(highlightRef.current, { opacity: 0, x: 20, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 0.4, ease: 'power2.out' }, 0.2);
      }

      timelineRef.current = tl;
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!timelineRef.current) return;
    if (isMenuOpen) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };

    if (isMenuOpen || isLangOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen, isLangOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsMobileMenuOpen(false);
        setIsLangOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLanguageChange = (newLocale: 'pt' | 'en') => {
    setLocale(newLocale);
    setIsLangOpen(false);
  };

  return (
    <>
      <div
        ref={backdropRef}
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <header
        ref={headerRef}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? 'top-0 py-3 bg-[#427CFA] backdrop-blur-md shadow-lg shadow-[#427CFA]/20'
          : 'top-4 md:top-6 px-6 lg:px-8 bg-transparent'
          }`}
      >
        <div className={`mx-auto flex items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? 'max-w-[1400px] px-6' : 'max-w-7xl'}`}>
          {/* Logo - Esquerda */}
          <a href="/" className="flex items-center shrink-0" aria-label="Eleva Clínicas - Página inicial">
            <Logo light />
          </a>

          {/* Navbar Central - Pill Shape (Transforms on scroll) */}
          <nav
            className={`hidden md:block relative transition-all duration-500 ${isScrolled
              ? 'bg-transparent shadow-none border-transparent'
              : 'bg-white/80 backdrop-blur-xl rounded-full shadow-lg shadow-black/5 border border-white/50'
              }`}
          >
            <div className="flex items-center h-12 px-1">
              <div className="flex items-center gap-1">
                <a
                  href="#para-quem"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#para-quem'); }}
                  className={`px-4 py-2 text-sm font-medium transition-colors font-dm ${isScrolled ? 'text-white/90 hover:text-white' : 'text-[#1A1A2E]/80 hover:text-[#1A1A2E]'}`}
                >
                  {t.nav.about}
                </a>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors font-dm rounded-full ${isScrolled
                      ? (isMenuOpen ? 'bg-white/20 text-white' : 'text-white/90 hover:text-white')
                      : (isMenuOpen ? 'bg-gray-100 text-[#1A1A2E]' : 'text-[#1A1A2E]/80 hover:text-[#1A1A2E]')
                    }`}
                  aria-expanded={isMenuOpen}
                  aria-haspopup="true"
                >
                  {t.nav.solutions}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                <a
                  href="#cta-final"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#cta-final'); }}
                  className={`px-4 py-2 text-sm font-medium transition-colors font-dm ${isScrolled ? 'text-white/90 hover:text-white' : 'text-[#1A1A2E]/80 hover:text-[#1A1A2E]'}`}
                >
                  {t.nav.contact}
                </a>
              </div>

              <a
                href="#cta-final"
                onClick={(e) => { e.preventDefault(); handleNavClick('#cta-final'); }}
                className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 ml-2 bg-[#0E172A] hover:bg-[#4169E1] rounded-full transition-all duration-500 ease-out hover:shadow-lg hover:shadow-[#4169E1]/30"
              >
                <span className="text-sm font-medium text-white/90 tracking-tight" style={{ fontFamily: 'var(--font-radio-grotesk)' }}>{t.nav.cta}</span>
                <span className="relative flex items-center justify-center w-7 h-7 bg-white rounded-full overflow-hidden">
                  <svg className="absolute w-3.5 h-3.5 text-[#0E172A] group-hover:text-[#4169E1] transition-all duration-500 ease-out group-hover:translate-x-8 group-hover:opacity-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                  <svg className="absolute w-3.5 h-3.5 text-[#4169E1] transition-all duration-500 ease-out -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </nav>

          {/* Language Switcher - Direita */}
          <div ref={langDropdownRef} className="relative hidden md:block">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-1 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-200"
              aria-expanded={isLangOpen}
              aria-haspopup="true"
            >
              <Image
                src={locale === 'pt' ? '/assets/icons/flag-br.png' : '/assets/icons/flag-us.png'}
                alt={locale === 'pt' ? 'Bandeira do Brasil' : 'US Flag'}
                width={30}
                height={30}
                className="rounded-full object-cover"
              />
              <span className="text-sm font-medium text-white font-dm">{locale.toUpperCase()}</span>
              <ChevronDown className={`w-4 h-4 text-white/70 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden transition-all duration-200 ${isLangOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <div className="py-1 min-w-[140px]">
                <button
                  onClick={() => handleLanguageChange('pt')}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors font-dm ${locale === 'pt' ? 'bg-[#4169E1]/10 text-[#4169E1]' : 'text-[#1A1A2E] hover:bg-gray-50'}`}
                >
                  <Image
                    src="/assets/icons/flag-br.png"
                    alt="Bandeira do Brasil"
                    width={20}
                    height={20}
                    className="rounded-full object-cover"
                  />
                  <span>Português</span>
                  {locale === 'pt' && (
                    <svg className="w-4 h-4 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors font-dm ${locale === 'en' ? 'bg-[#4169E1]/10 text-[#4169E1]' : 'text-[#1A1A2E] hover:bg-gray-50'}`}
                >
                  <Image
                    src="/assets/icons/flag-us.png"
                    alt="US Flag"
                    width={20}
                    height={20}
                    className="rounded-full object-cover"
                  />
                  <span>English</span>
                  {locale === 'en' && (
                    <svg className="w-4 h-4 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mega Menu Desktop */}
        <div
          ref={menuRef}
          className={`absolute top-full left-1/2 -translate-x-1/2 w-[95%] max-w-[900px] mt-4 bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{ opacity: 0 }}
        >
          <div ref={menuContentRef} className="p-6">
            <div className="grid grid-cols-[1fr_280px] gap-8">
              <div className="space-y-6">
                <div>
                  <h3
                    className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.1em] mb-4"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {locale === 'pt' ? 'Soluções' : 'Solutions'}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {features.map((item, index) => (
                      <a
                        key={item.title}
                        ref={(el) => { menuItemsRef.current[index] = el; }}
                        href={item.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 text-[#1A1A2E]/70 group-hover:bg-[#4169E1]/10 group-hover:text-[#4169E1] transition-colors duration-200">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            className="block text-[15px] font-medium text-[#1A1A2E] group-hover:text-[#4169E1] transition-colors"
                            style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                          >
                            {item.title}
                          </span>
                          <span className="block text-[11px] text-gray-500 mt-0.5 font-dm">{item.description}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100" />

                <div>
                  <h3
                    className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.1em] mb-4"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {locale === 'pt' ? 'Suporte' : 'Support'}
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {support.map((item, index) => (
                      <a
                        key={item.title}
                        ref={(el) => { menuItemsRef.current[features.length + index] = el; }}
                        href={item.href}
                        onClick={(e) => {
                          if (item.href.startsWith('#')) {
                            e.preventDefault();
                            handleNavClick(item.href);
                          }
                        }}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 text-[#1A1A2E]/70 group-hover:bg-[#4169E1]/10 group-hover:text-[#4169E1] transition-colors duration-200">
                          {item.icon}
                        </div>
                        <span
                          className="text-[15px] font-medium text-[#1A1A2E] group-hover:text-[#4169E1] transition-colors"
                          style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                        >
                          {item.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div ref={highlightRef} className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-5 flex flex-col">
                <span className="text-[10px] font-bold text-[#4169E1] uppercase tracking-wider mb-3 font-dm">{highlight.tag}</span>

                <div className="relative w-full aspect-[16/10] rounded-xl bg-gradient-to-br from-[#4169E1] to-[#6B8DD6] mb-4 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/90 text-center px-4">
                      <Building2 className="w-12 h-12 mx-auto mb-2 opacity-80" />
                      <span className="text-sm font-medium font-dm">{locale === 'pt' ? 'Sistema Personalizado' : 'Custom System'}</span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/30" />
                  <div className="absolute bottom-3 left-3 w-16 h-1 rounded-full bg-white/20" />
                </div>

                <h4
                  className="text-[15px] font-semibold text-[#1A1A2E] leading-snug"
                  style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                >
                  {highlight.title}
                </h4>
                <p className="text-[11px] text-gray-500 mt-1 font-dm">{highlight.subtitle}</p>

                <a
                  href={highlight.ctaHref}
                  onClick={(e) => { e.preventDefault(); handleNavClick(highlight.ctaHref); }}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#4169E1] hover:text-[#3457D5] mt-4 transition-colors font-dm group"
                >
                  {highlight.ctaText}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4169E1]/10 shrink-0">
                  <FileText className="w-4 h-4 text-[#4169E1]" />
                </div>
                <p className="text-sm text-[#1A1A2E]">
                  <span className="font-medium" style={{ fontFamily: 'var(--font-radio-grotesk)' }}>{locale === 'pt' ? 'Receba novidades sobre gestão de clínicas.' : 'Get updates on clinic management.'}</span>
                  {' '}
                  <span className="text-gray-500 font-dm">{locale === 'pt' ? 'Inscreva-se na newsletter.' : 'Subscribe to our newsletter.'}</span>
                </p>
              </div>

              <form className="flex items-center gap-2 shrink-0" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={locale === 'pt' ? 'Digite seu e-mail...' : 'Enter your email...'}
                  className="w-52 px-4 py-2.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-[#4169E1] focus:ring-2 focus:ring-[#4169E1]/10 transition-all font-dm"
                />
                <button type="submit" className="px-5 py-2.5 text-sm font-medium text-[#4169E1] border border-[#4169E1]/30 rounded-full hover:bg-[#4169E1]/5 transition-colors font-dm whitespace-nowrap">
                  {locale === 'pt' ? 'Inscrever-se' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <div className="p-4 space-y-2">
            <div className="flex items-center justify-center gap-2 pb-3 border-b border-gray-100">
              <button
                onClick={() => handleLanguageChange('pt')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${locale === 'pt' ? 'bg-[#4169E1] text-white' : 'bg-gray-100 text-[#1A1A2E]'}`}
              >
                <span>🇧🇷</span> PT
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${locale === 'en' ? 'bg-[#4169E1] text-white' : 'bg-gray-100 text-[#1A1A2E]'}`}
              >
                <span>🇺🇸</span> EN
              </button>
            </div>

            <a href="#para-quem" onClick={(e) => { e.preventDefault(); handleNavClick('#para-quem'); }} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <Building2 className="w-5 h-5 text-[#4169E1]" />
              <span className="text-sm font-medium text-[#1A1A2E] font-dm">{locale === 'pt' ? 'Para Quem' : "Who It's For"}</span>
            </a>

            <a href="#problema" onClick={(e) => { e.preventDefault(); handleNavClick('#problema'); }} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <AlertCircle className="w-5 h-5 text-[#4169E1]" />
              <span className="text-sm font-medium text-[#1A1A2E] font-dm">{locale === 'pt' ? 'O Problema' : 'The Problem'}</span>
            </a>

            <a href="#abordagem" onClick={(e) => { e.preventDefault(); handleNavClick('#abordagem'); }} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <Lightbulb className="w-5 h-5 text-[#4169E1]" />
              <span className="text-sm font-medium text-[#1A1A2E] font-dm">{locale === 'pt' ? 'Nossa Abordagem' : 'Our Approach'}</span>
            </a>

            <a href="#entregamos" onClick={(e) => { e.preventDefault(); handleNavClick('#entregamos'); }} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <Package className="w-5 h-5 text-[#4169E1]" />
              <span className="text-sm font-medium text-[#1A1A2E] font-dm">{locale === 'pt' ? 'O que Entregamos' : 'What We Deliver'}</span>
            </a>

            <div className="border-t border-gray-100 my-2" />

            <a
              href="#cta-final"
              onClick={(e) => { e.preventDefault(); handleNavClick('#cta-final'); }}
              className="flex items-center justify-center gap-2 p-3 bg-[#4169E1] text-white rounded-xl text-sm font-medium font-dm"
            >
              {locale === 'pt' ? 'Agendar Demo' : 'Schedule Demo'}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
