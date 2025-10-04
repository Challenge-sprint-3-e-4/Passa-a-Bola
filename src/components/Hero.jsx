import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import jogadoras2 from "../assets/jogadoras2.jpg";

const Hero = () => {
  return (
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <img 
            src={jogadoras2} 
            alt="Jogadoras de futebol feminino em ação" 
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Gradiente roxo diagonal */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-transparent z-10" />

          {/* Gradiente de baixo maior */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

          {/* Conteúdo */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Histórias que jogam, talentos que brilham, clubes que acreditam.
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Uma vitrine para jogadoras. Uma ponte para clubes. Um futuro para o futebol feminino.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/jogadoras"
                  className="h-12 px-6 rounded-lg font-semibold text-white text-lg flex items-center justify-center bg-gradient-to-br from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] hover:opacity-90 transition-opacity duration-200"
                >
                  Conhecer Jogadoras
                </Link>

                <ScrollLink
                  to="cta"
                  smooth={true}
                  duration={500}
                  className="h-12 px-6 rounded-lg font-semibold text-white text-lg flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white hover:bg-white hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Sou um Clube
                </ScrollLink>
              </div>
            </div>
          </div>
        </section>

  );
};

export default Hero;
