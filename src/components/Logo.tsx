import React from 'react';
import Image from 'next/image';

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
    return (
        <div className={`flex items-center ${className}`}>
            <Image
                src="/assets/logo/ligth.logo.elevaclinicas.completo.png"
                alt="Eleva Clínicas"
                width={150}
                height={40}
                className="h-8 w-auto"
                priority
            />
        </div>
    );
}
