import { Users, Building2, BookOpen, Trophy } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Jogadoras Cadastradas",
      color: "text-pink-500"
    },
    {
      icon: Building2,
      value: "150+",
      label: "Clubes Parceiros",
      color: "text-purple-500"
    },
    {
      icon: BookOpen,
      value: "300+",
      label: "Histórias Compartilhadas",
      color: "text-teal-500"
    },
    {
      icon: Trophy,
      value: "50+",
      label: "Campeonatos Organizados",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card hover:shadow-lg transition-smooth animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 ${stat.color} group-hover:scale-110 transition-bounce`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;