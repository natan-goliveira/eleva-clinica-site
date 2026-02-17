import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/posts';
import { PageWrapper } from '@/components/PageWrapper';
import { Header } from '@/components/Header';
import { Footer } from '@/components/sections';
import { ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Blog | 73 Code',
    description: 'Artigos sobre gestão de clínicas, tecnologia e eficiência operacional.',
};

export default function BlogIndex() {
    const allPostsData = getSortedPostsData();

    return (
        <PageWrapper>
            <main className="overflow-x-hidden bg-[#FFFFFF] min-h-screen flex flex-col">
                <Header />

                <section className="pt-32 pb-20 md:pt-40 md:pb-28 container mx-auto px-6 lg:px-8 flex-grow">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16">
                            <span className="text-[#4169E1] font-bold tracking-wider text-sm uppercase mb-4 block font-dm">
                                Blog & Insights
                            </span>
                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A1A2E] leading-[1.1]"
                                style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                            >
                                Gestão inteligente para sua clínica
                            </h1>
                            <p className="text-xl text-gray-600 font-dm max-w-2xl leading-relaxed">
                                Dicas, estratégias e tecnologia para transformar a operação, atendimento e resultados da sua clínica.
                            </p>
                        </div>

                        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                            {allPostsData.map(({ slug, date, title, description, coverImage }) => (
                                <Link key={slug} href={`/blog/${slug}`} className="group block h-full">
                                    <article className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-[#4169E1]/5 transition-all duration-300 overflow-hidden">
                                        <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                                            {coverImage ? (
                                                <div className="relative w-full h-full group-hover:scale-[1.05] transition-transform duration-500">
                                                    <img
                                                        src={coverImage}
                                                        alt={title}
                                                        className="object-cover w-full h-full"
                                                    />
                                                    <div className="absolute inset-0 bg-[#1A1A2E]/0 group-hover:bg-[#1A1A2E]/5 transition-colors duration-300" />
                                                </div>
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-[1.02] transition-transform duration-500">
                                                    <span style={{ fontFamily: 'var(--font-radio-grotesk)' }} className="text-4xl opacity-20 font-bold">73.</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4 font-dm">
                                                <time dateTime={date}>
                                                    {new Date(date).toLocaleDateString('pt-BR', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}
                                                </time>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span className="text-[#4169E1] font-medium">Gestão</span>
                                            </div>

                                            <h2
                                                className="text-2xl font-bold mb-4 text-[#1A1A2E] group-hover:text-[#4169E1] transition-colors leading-tight"
                                                style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                                            >
                                                {title}
                                            </h2>

                                            <p className="text-gray-600 mb-6 line-clamp-3 font-dm leading-relaxed flex-grow">
                                                {description}
                                            </p>

                                            <div className="flex items-center text-[#4169E1] font-medium font-dm mt-auto group/link">
                                                Ler artigo
                                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </PageWrapper>
    );
}
