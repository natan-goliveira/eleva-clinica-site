import { HeroSection } from '@/components/sections/HeroSection';
import { 
  ParaQuemSection, 
  ProblemaSection, 
  AbordagemSection, 
  EntregamosSection, 
  SistemaSection,
  CTAFinalSection, 
  Footer 
} from '@/components/sections';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PageWrapper } from '@/components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <main className="overflow-x-hidden">
        <Header />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Para Quem É */}
        <ParaQuemSection />
        
        {/* O Problema */}
        <ProblemaSection />
        
        {/* Nossa Abordagem */}
        <AbordagemSection />
        
        {/* O que Entregamos */}
        <EntregamosSection />

        {/* Sistema Demo */}
        <SistemaSection />
        
        {/* CTA Final */}
        <CTAFinalSection />
        
        {/* Footer */}
        <Footer />
        
        {/* WhatsApp Flutuante */}
        <WhatsAppButton 
          phoneNumber="5511999999999"
          message="Olá! Vim pelo site e gostaria de saber mais sobre os sistemas de gestão para clínicas."
          tooltipText="Tire suas dúvidas"
        />
      </main>
    </PageWrapper>
  );
}
