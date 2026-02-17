import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { PageWrapper } from '@/components/PageWrapper';
import { Header } from '@/components/Header';
import { Footer } from '@/components/sections';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx-components';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map((path) => path.params);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return {
        title: `${postData.title} | Blog 73 Code`,
        description: postData.description,
        openGraph: {
            title: postData.title,
            description: postData.description,
            type: 'article',
            publishedTime: postData.date,
            images: postData.coverImage ? [postData.coverImage] : [],
        }
    }
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <PageWrapper>
            <main className="overflow-x-hidden bg-white min-h-screen flex flex-col">
                <Header />

                <article className="pt-32 pb-20 md:pt-40 md:pb-28">
                    {/* Header do Artigo */}
                    <div className="container mx-auto px-6 lg:px-8 mb-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-[#4169E1] hover:text-[#3457D5] mb-8 font-medium font-dm transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Voltar para o blog
                            </Link>

                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#1A1A2E] leading-[1.1]"
                                style={{ fontFamily: 'var(--font-radio-grotesk)' }}
                            >
                                {postData.title}
                            </h1>

                            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 font-dm border-y border-gray-100 py-6 mb-12">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-[#4169E1]" />
                                    <time dateTime={postData.date}>
                                        {new Date(postData.date).toLocaleDateString('pt-BR', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </time>
                                </div>
                                <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#4169E1]" />
                                    <span>{postData.readTime || '5 min'} de leitura</span>
                                </div>
                            </div>

                            {postData.coverImage && (
                                <div className="w-full aspect-[21/9] relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                                    <img
                                        src={postData.coverImage}
                                        alt={postData.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-[#1A1A2E] prose-p:text-gray-600 prose-p:font-dm prose-headings:font-[family-name:var(--font-radio-grotesk)] prose-a:text-[#4169E1] prose-strong:text-[#1A1A2E]">
                            <MDXRemote source={postData.content} components={mdxComponents} />
                        </div>

                        {/* Share / Footer do Post */}
                        <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
                            <span className="font-dm text-gray-500 font-medium">Gostou deste artigo?</span>
                            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1A1A2E] text-white hover:bg-[#4169E1] transition-colors duration-300 font-medium font-dm border border-gray-200">
                                <Share2 className="w-4 h-4" />
                                Compartilhar
                            </button>
                        </div>
                    </div>
                </article>

                <Footer />
            </main>
        </PageWrapper>
    );
}
