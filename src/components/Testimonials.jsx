import { Quote } from "lucide-react";
import mulher1 from "../assets/mulher1.jpg";
import mulher2 from "../assets/mulher2.png";
import homem1 from "../assets/homem1.png";




const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Atacante - Clube São Paulo FC",
      quote: "O Passa a Bola mudou minha carreira. Em 2 meses recebi propostas de 5 clubes diferentes. Hoje jogo profissionalmente!",
      image: mulher1
    },
    {
      id: 2,
      name: "João Santos",
      role: "Diretor Esportivo - Clube Vitória",
      quote: "Encontramos talentos incríveis aqui. A plataforma facilita muito nosso trabalho de scout e contratação de atletas.",
      image: homem1
    },
    {
      id: 3,
      name: "Fernanda Costa",
      role: "Meio-campo - Seleção Sub-20",
      quote: "Além de encontrar meu clube, conectei com outras jogadoras e criamos uma rede de apoio incrível. Gratidão!",
      image: mulher2
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
            O que dizem sobre <span className="bg-gradient-to-br from-purple-700  to-pink-500 bg-clip-text text-transparent ">nós</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto"> 
            Histórias reais de jogadoras e clubes que transformaram suas carreiras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-smooth hover:shadow-lg animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8 w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg ">
                <Quote className="h-6 w-6 text-black" />
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-smooth"
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;