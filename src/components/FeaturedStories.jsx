import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedStories = () => {
  const stories = [
    {
      id: 1,
      title: "Minha Jornada: do amador ao profissional",
      excerpt: "A história de como saí dos campos de várzea para o futebol profissional, superando preconceitos e...",
      category: "Superação",
      readTime: "5 min",
      author: "Ana Souza",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Sonhos que viram realidade",
      excerpt: "Como a persistência e o apoio da família abriram portas no futebol e mudaram minha trajetória...",
      category: "Superação",
      readTime: "5 min",
      author: "Bruna Lima",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Quebrando Barreiras",
      excerpt: "A luta diária de uma zagueira para conquistar seu espaço e provar que o futebol feminino merece...",
      category: "Inspiração",
      readTime: "7 min",
      author: "Carla Mendes",
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Histórias que <span className="bg-gradient-to-br from-purple-800 to-pink-500  bg-clip-text text-transparent">Inspiram</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça as trajetórias de jogadoras que estão mudando o futuro do futebol feminino
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <article
              key={story.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-purple-400 transition hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagem */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-br from-purple-700 to-pink-500  text-white">
                    {story.category}
                  </span>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Clock className="h-4 w-4" />
                  <span>{story.readTime} de leitura</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition">
                  {story.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {story.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-700 to-pink-500  flex items-center justify-center text-white text-xs font-bold">
                      {story.author.charAt(0)}
                    </div>
                    <span className="text-sm font-medium">{story.author}</span>
                  </div>

                  <button className="flex items-center text-purple-600 hover:text-purple-800 font-medium transition">
                    Ler mais
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botão final */}
        <div className="text-center">
          <Link to="/blog">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-800 to-pink-500  text-white font-semibold hover:opacity-90 transition">
              Ver Todas as Histórias
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
