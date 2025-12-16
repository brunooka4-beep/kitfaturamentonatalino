import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: "fa-solid fa-piggy-bank",
    title: "Economia Real",
    description: "Ingredientes acessíveis que não pesam no bolso. Esqueça o leite condensado caro.",
  },
  {
    icon: "fa-solid fa-award",
    title: "Técnicas Francesas",
    description: "Agregue valor às suas sobremesas com métodos da alta confeitaria europeia.",
  },
  {
    icon: "fa-solid fa-heart",
    title: "Zero Enjoo",
    description: "Equilíbrio perfeito de açúcar. Seus clientes vão querer repetir.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Suporte Total",
    description: "Tire suas dúvidas diretamente comigo. Você não vai ficar sozinha.",
  },
];

const desserts = [
  {
    name: "Pavlova Natalina",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    description: "Merengue crocante com frutas frescas",
  },
  {
    name: "Rabanada Francesa",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop",
    description: "A clássica French Toast sofisticada",
  },
  {
    name: "Terrine de Chocolate",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    description: "Intensidade e elegância em cada fatia",
  },
  {
    name: "Guirlanda Festiva",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
    description: "Sobremesa decorativa que encanta",
  },
];

const testimonials = [
  {
    name: "Maria Clara",
    location: "São Paulo, SP",
    text: "Fiz a Pavlova no Natal e vendi TUDO! Lucrei mais de R$800 em um fim de semana. As técnicas são simples e o resultado é profissional.",
    profit: "R$800+",
  },
  {
    name: "Ana Beatriz",
    location: "Belo Horizonte, MG",
    text: "Finalmente consegui me diferenciar das outras confeiteiras da minha cidade. Minhas clientes dizem que nunca comeram nada igual!",
    profit: "Clientes fiéis",
  },
  {
    name: "Juliana Santos",
    location: "Curitiba, PR",
    text: "O melhor investimento que fiz. Economizei muito sem usar leite condensado e meus doces ficaram muito mais sofisticados.",
    profit: "40% economia",
  },
];

const faqItems = [
  {
    question: "Serve para iniciantes?",
    answer: "Absolutamente! O e-book foi criado pensando em confeiteiras de todos os níveis. Cada receita tem passo a passo detalhado com fotos e dicas para você não errar. Se você já faz bolos e doces simples, vai conseguir executar todas as receitas.",
  },
  {
    question: "Como acesso o material?",
    answer: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link para download do e-book em PDF. Pode baixar no celular, tablet ou computador e acessar quando quiser, para sempre.",
  },
  {
    question: "Tem certificado?",
    answer: "Este é um e-book digital com receitas e técnicas. Não oferecemos certificado formal, mas você terá todo o conhecimento para criar sobremesas de nível profissional e se destacar no mercado.",
  },
];

function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <button 
          onClick={scrollToTop}
          className="font-serif text-xl md:text-2xl tracking-wide text-foreground"
          data-testid="link-logo"
        >
          Brüske <span className="text-terracotta">Pâtisserie</span>
        </button>
        <Button 
          variant="outline" 
          size="sm"
          data-testid="button-area-aluno"
        >
          Área do Aluno
        </Button>
      </div>
    </header>
  );
}

function HeroSection() {
  const scrollToCTA = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-6">
          Lucre <span className="text-terracotta">3x Mais</span> neste Natal com Sobremesas Francesas Sofisticadas
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-muted-foreground">
            (e Sem Leite Condensado)
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Descubra como se diferenciar da concorrência com doces finos, econômicos e que seus clientes vão amar.
        </p>
        
        <div className="relative max-w-2xl mx-auto mb-8 rounded-md overflow-hidden shadow-lg">
          <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <button 
              className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover-elevate active-elevate-2 transition-transform"
              data-testid="button-play-video"
            >
              <i className="fa-solid fa-play text-3xl text-white ml-1"></i>
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black/60 backdrop-blur-sm rounded-md px-4 py-2 text-white text-sm">
              <i className="fa-solid fa-clock mr-2"></i>
              Assista o vídeo e descubra como transformar seu Natal
            </div>
          </div>
        </div>

        <div id="cta-section" className="space-y-4">
          <Button 
            size="lg" 
            className="bg-cta text-cta-foreground text-lg px-8 py-6 font-semibold shadow-lg"
            data-testid="button-cta-hero"
          >
            <i className="fa-solid fa-shopping-cart mr-2"></i>
            QUERO O EBOOK AGORA
          </Button>
          <p className="text-muted-foreground">
            <span className="line-through text-sm">De R$97</span>
            <span className="text-terracotta font-bold text-lg ml-2">por 7x de R$7,83</span>
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <i className="fa-solid fa-shield-halved text-terracotta"></i>
            Compra 100% segura
          </p>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-16 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-12 text-foreground">
          Por que esse E-book é <span className="text-terracotta">diferente</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover-elevate transition-all"
              data-testid={`card-benefit-${index}`}
            >
              <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                <i className={`${benefit.icon} text-2xl text-terracotta`}></i>
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-4 text-foreground">
          Receitas que vão <span className="text-terracotta">encantar</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Sobremesas sofisticadas que impressionam no visual e conquistam no sabor
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {desserts.map((dessert, index) => (
            <div 
              key={index} 
              className="group"
              data-testid={`card-dessert-${index}`}
            >
              <div className="relative overflow-hidden rounded-md mb-3">
                <img
                  src={dessert.image}
                  alt={dessert.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-1">
                {dessert.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {dessert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-4 text-foreground">
          O que as alunas estão <span className="text-terracotta">dizendo</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Depoimentos reais de quem já transformou a confeitaria
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 relative"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center">
                  <i className="fa-solid fa-user text-terracotta"></i>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="ml-auto">
                  <i className="fa-brands fa-whatsapp text-green-600 text-xl"></i>
                </div>
              </div>
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="inline-block bg-terracotta/10 text-terracotta text-xs font-semibold px-3 py-1 rounded-full">
                <i className="fa-solid fa-chart-line mr-1"></i>
                {testimonial.profit}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-terracotta/20 to-gold/20 flex items-center justify-center overflow-hidden">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <i className="fa-solid fa-user text-6xl text-gray-400"></i>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-terracotta text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <i className="fa-solid fa-graduation-cap mr-2"></i>
                École Ducasse
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">
              Olá, eu sou a <span className="text-terracotta">Chef Brüske</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Há mais de 10 anos trabalho com confeitaria e tive o privilégio de estudar na 
                <span className="font-semibold text-foreground"> École Ducasse</span>, uma das mais 
                prestigiadas escolas de gastronomia do mundo, fundada pelo lendário chef Alain Ducasse.
              </p>
              <p>
                Depois de anos aperfeiçoando técnicas francesas, percebi que muitas confeiteiras 
                brasileiras ficavam presas às mesmas receitas com leite condensado — caras e comuns. 
              </p>
              <p>
                Criei este e-book para compartilhar os segredos da 
                <span className="font-semibold text-foreground"> alta pâtisserie francesa</span> de 
                forma simples, usando ingredientes acessíveis que você encontra em qualquer supermercado.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm">
                <i className="fa-solid fa-certificate text-gold"></i>
                <span>Certificada na França</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <i className="fa-solid fa-users text-gold"></i>
                <span>+2.000 alunas</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <i className="fa-solid fa-star text-gold"></i>
                <span>4.9/5 avaliação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="py-16 px-4 bg-card/50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-terracotta/10 mb-6">
          <i className="fa-solid fa-shield-halved text-4xl text-terracotta"></i>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">
          Garantia de <span className="text-terracotta">7 Dias</span>
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Se por qualquer motivo você não ficar satisfeita com o e-book, basta enviar um e-mail 
          em até 7 dias após a compra e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-check-circle text-terracotta"></i>
            <span>Reembolso total</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-check-circle text-terracotta"></i>
            <span>Sem burocracia</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-check-circle text-terracotta"></i>
            <span>Risco zero</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-center mb-12 text-foreground">
          Perguntas <span className="text-terracotta">Frequentes</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-md px-4 bg-card"
              data-testid={`accordion-faq-${index}`}
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                <span className="flex items-center gap-3">
                  <i className="fa-solid fa-circle-question text-terracotta"></i>
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-terracotta/10 to-gold/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">
          Pronta para <span className="text-terracotta">transformar</span> seu Natal?
        </h2>
        <p className="text-muted-foreground mb-8">
          Junte-se a mais de 2.000 confeiteiras que já estão lucrando com sobremesas francesas
        </p>
        <Button 
          size="lg" 
          className="bg-cta text-cta-foreground text-lg px-8 py-6 font-semibold shadow-lg mb-4"
          data-testid="button-cta-final"
        >
          <i className="fa-solid fa-shopping-cart mr-2"></i>
          QUERO O EBOOK AGORA
        </Button>
        <p className="text-muted-foreground">
          <span className="line-through text-sm">De R$97</span>
          <span className="text-terracotta font-bold text-lg ml-2">por 7x de R$7,83</span>
          <span className="block text-xs mt-1">ou R$47 à vista</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-bolt text-terracotta"></i>
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-infinity text-terracotta"></i>
            <span>Acesso vitalício</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-shield-halved text-terracotta"></i>
            <span>7 dias de garantia</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg text-foreground">
            Brüske <span className="text-terracotta">Pâtisserie</span>
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a 
              href="#" 
              className="hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Política de Privacidade
            </a>
            <a 
              href="#" 
              className="hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Termos de Uso
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-muted-foreground">
          <p>© 2024 Brüske Pâtisserie. Todos os direitos reservados.</p>
          <p className="mt-1">
            Este produto é vendido e entregue pela Hotmart. A marca Brüske Pâtisserie é de propriedade exclusiva de seu titular.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <AuthorSection />
        <GuaranteeSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
