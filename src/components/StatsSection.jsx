import { Users, Building2, BookOpen, Trophy } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Jogadoras Cadastradas",
      color: "bg-pink-500"
    },
    {
      icon: Building2,
      value: "150+",
      label: "Clubes Parceiros",
      color: "bg-purple-500"
    },
    {
      icon: BookOpen,
      value: "300+",
      label: "Histórias Compartilhadas",
      color: "bg-teal-500"
    },
    {
      icon: Trophy,
      value: "50+",
      label: "Campeonatos Organizados",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white hover:shadow-lg transition-all animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Ícone com cor */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>

              {/* Valor */}
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>

              {/* Label com gradiente diagonal */}
              <div className="font-medium text-lg bg-gradient-to-br from-purple-700 to-pink-500 bg-clip-text text-transparent">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
