import { Button } from "../components/ui/button";
import jogadoras2 from "../assets/jogadoras2.jpg";

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background Image com Overlay */}
      <div className="absolute inset-0">
        <img 
          src={jogadoras2} 
          alt="Jogadoras de futebol feminino em ação" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Histórias que jogam, talentos que brilham, clubes que acreditam.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Uma vitrine para jogadoras. Uma ponte para clubes. Um futuro para o futebol feminino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gradient-secondary" size="lg" className="text-lg">
              Conhecer Jogadoras
            </Button>
            <Button variant="outline" size="lg" className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              Sou um Clube
            </Button>
          </div>
        </div>
      </div>

      {/* Gradiente inferior para suavizar transição para o footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
