import Image from 'next/image';
import Link from 'next/link';

export const mdxComponents = {
    h1: (props: any) => (
        <h1
            className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-[#1A1A2E] leading-tight"
            style={{ fontFamily: 'var(--font-radio-grotesk)' }}
            {...props}
        />
    ),
    h2: (props: any) => (
        <h2
            className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-[#1A1A2E] border-l-4 border-[#4169E1] pl-6 py-1 leading-snug"
            style={{ fontFamily: 'var(--font-radio-grotesk)' }}
            {...props}
        />
    ),
    h3: (props: any) => (
        <h3
            className="text-xl md:text-2xl font-bold mt-8 mb-4 text-[#1A1A2E]"
            style={{ fontFamily: 'var(--font-radio-grotesk)' }}
            {...props}
        />
    ),
    p: (props: any) => (
        <p
            className="text-lg leading-relaxed mb-6 text-gray-600 font-dm font-normal"
            {...props}
        />
    ),
    ul: (props: any) => (
        <ul className="list-disc pl-6 mb-8 space-y-3 text-lg text-gray-600 font-dm marker:text-[#4169E1]" {...props} />
    ),
    ol: (props: any) => (
        <ol className="list-decimal pl-6 mb-8 space-y-3 text-lg text-gray-600 font-dm marker:text-[#4169E1] marker:font-bold" {...props} />
    ),
    li: (props: any) => <li className="" {...props} />,
    a: (props: any) => (
        <a
            className="text-[#4169E1] font-medium border-b border-[#4169E1]/30 hover:border-[#4169E1] transition-colors pb-0.5"
            {...props}
        />
    ),
    strong: (props: any) => <strong className="font-bold text-[#1A1A2E]" {...props} />,
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-[#4169E1] pl-6 py-4 my-8 bg-gray-50 rounded-r-xl italic text-gray-700 font-dm text-lg leading-relaxed shadow-sm lg:-mr-8" {...props} />
    ),
    img: (props: any) => (
        <div className="my-10 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg shadow-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="object-cover w-full h-full" alt={props.alt || ''} {...props} />
        </div>
    ),
};
