'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from '@/components/Logo';

export function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t.footer.links.problem, href: '#problema' },
    { label: t.footer.links.howItWorks, href: '#abordagem' },
    { label: t.footer.links.whatWeDeliver, href: '#entregamos' },
    { label: t.footer.links.contact, href: '#contato' },
  ];

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="bg-[#0F172A] py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo light />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-8" aria-label="Footer navigation">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-300 font-dm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-[13px] text-white/40 text-center font-dm">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
