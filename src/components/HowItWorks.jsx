import { UserPlus, FileText, Sparkles, Handshake } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Crie seu Perfil",
      description: "Jogadoras criam perfis completos com estatísticas, vídeos e histórias pessoais.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Compartilhe sua História",
      description: "Conte sua jornada no futebol e inspire outras atletas com suas experiências.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Sparkles,
      title: "Ganhe Visibilidade",
      description: "Seja descoberta por clubes, olheiros e empresas que buscam talentos.",
      color: "from-rose-500 to-teal-500"
    },
    {
      icon: Handshake,
      title: "Conecte-se",
      description: "Clubes entram em contato direto para oportunidades e parcerias.",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em 4 passos simples, conectamos sonhos com oportunidades reais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-smooth hover:shadow-lg">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 transition-bounce`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;