'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonCTAProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  variant?: 'primary' | 'white';
}

export function ButtonCTA({ 
  children, 
  href, 
  onClick,
  className = '',
  variant = 'primary'
}: ButtonCTAProps) {
  
  // Primary = Dark (Hero style)
  // White = Light (Inverse of Hero, for dark backgrounds)
  
  const isPrimary = variant === 'primary';

  const containerColors = isPrimary 
    ? "bg-[#0E172A] hover:bg-white" 
    : "bg-white hover:bg-[#0E172A]";

  const textColors = isPrimary
    ? "text-white/90 group-hover/cta:text-[#0E172A]"
    : "text-[#0E172A] group-hover/cta:text-white";

  const circleColors = isPrimary
    ? "bg-white group-hover/cta:bg-[#0E172A]"
    : "bg-[#0E172A] group-hover/cta:bg-white";

  const arrowOutColors = isPrimary
    ? "text-[#0E172A] group-hover/cta:text-white"
    : "text-white group-hover/cta:text-[#0E172A]";

  const arrowInColors = isPrimary
    ? "text-white"
    : "text-[#0E172A]"; 

  const content = (
    <>
      <span 
        className={`text-sm font-medium tracking-tight transition-colors duration-500 ${textColors}`} 
        style={{ fontFamily: 'var(--font-radio-grotesk)' }}
      >
        {children}
      </span>
      <span className={`relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden transition-colors duration-500 ${circleColors}`}>
        {/* Seta que sai */}
        <svg
          className={`absolute w-4 h-4 transition-all duration-500 ease-out group-hover/cta:translate-x-8 group-hover/cta:opacity-0 ${arrowOutColors}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
        {/* Seta que entra */}
        <svg
          className={`absolute w-4 h-4 transition-all duration-500 ease-out -translate-x-8 opacity-0 group-hover/cta:translate-x-0 group-hover/cta:opacity-100 ${arrowInColors}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </>
  );

  const baseClasses = `group/cta inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full transition-all duration-500 ease-out hover:shadow-lg hover:shadow-black/10 cursor-pointer ${containerColors} ${className}`;

  if (href) {
    if (href.startsWith('#')) {
       return (
        <a href={href} className={baseClasses} onClick={onClick}>
          {content}
        </a>
       );
    }
    return (
      <Link href={href} className={baseClasses} onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick as React.MouseEventHandler<HTMLButtonElement>} className={baseClasses}>
      {content}
    </button>
  );
}
