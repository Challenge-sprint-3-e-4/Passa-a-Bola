import img1 from "../assets/jogadora1.jpg";
import img2 from "../assets/jogadora2.jpg";
import img3 from "../assets/jogadora3.jpg";

const jogadoras = [
  {
    nome: "Ana Souza",
    imagem: img1,
    posicao: "Atacante",
    idade: 22,
    cidade: "São Paulo",
    gols: 18,
    jogos: 25,
    assistencias: 7,
    descricao: "Jogadora rápida e habilidosa, destaque no ataque."
  },
  {
    nome: "Bruna Lima",
    imagem: img2,
    posicao: "Meio-campo",
    idade: 24,
    cidade: "Rio de Janeiro",
    gols: 10,
    jogos: 30,
    assistencias: 15,
    descricao: "Excelente visão de jogo e ótima distribuidora de passes."
  },
  {
    nome: "Carla Mendes",
    imagem: img3,
    posicao: "Zagueira",
    idade: 27,
    cidade: "Belo Horizonte",
    gols: 3,
    jogos: 40,
    assistencias: 2,
    descricao: "Líder da defesa, forte marcação e boa saída de bola."
  }
];

// Duplica o array para ter 6 jogadoras
const jogadorasDuplicadas = [...jogadoras, ...jogadoras];

export default function Jogadoras() {
  // Cálculos simples para o dashboard
  const totalJogadoras = jogadorasDuplicadas.length;
  const totalGols = jogadorasDuplicadas.reduce((acc, j) => acc + j.gols, 0);
  const totalAssistencias = jogadorasDuplicadas.reduce((acc, j) => acc + j.assistencias, 0);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 pt-20 pb-16">

      {/* Dashboard */}
      <section
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        aria-label="Dashboard de estatísticas das jogadoras"
      >
        <div className="bg-[var(--color-roxo)] text-white rounded-2xl p-6 shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Total de Jogadoras</h3>
          <p className="text-3xl font-bold">{totalJogadoras}</p>
        </div>
        <div className="bg-[var(--color-rosa)] text-white rounded-2xl p-6 shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Total de Gols</h3>
          <p className="text-3xl font-bold">{totalGols}</p>
        </div>
        <div className="bg-[var(--color-verde)] text-white rounded-2xl p-6 shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Total de Assistências</h3>
          <p className="text-3xl font-bold">{totalAssistencias}</p>
        </div>
      </section>

      {/* Título principal */}
      <h1 className="text-3xl font-bold text-gray-600 mb-10 text-center">
        Conheça as atletas que vão e estão fazendo diferença no futebol feminino
      </h1>

      {/* Primeira camada */}
      <section className="flex flex-wrap justify-center gap-8 mb-8" aria-label="Primeira camada de jogadoras">
        {jogadorasDuplicadas.slice(0, 3).map((jogadora, idx) => (
          <article key={idx} className="bg-white rounded-2xl shadow-lg p-8 w-96 flex flex-col items-center">
            <img
              src={jogadora.imagem}
              alt={`Foto de ${jogadora.nome}`}
              className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-purple-500"
            />
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">{jogadora.nome}</h2>
            <p className="text-gray-700 mb-1"><strong>Posição:</strong> {jogadora.posicao}</p>
            <p className="text-gray-700 mb-1"><strong>Idade:</strong> {jogadora.idade} anos</p>
            <p className="text-gray-700 mb-1"><strong>Cidade:</strong> {jogadora.cidade}</p>
            <p className="text-gray-700 mb-1"><strong>Gols:</strong> {jogadora.gols}</p>
            <p className="text-gray-700 mb-1"><strong>Jogos:</strong> {jogadora.jogos}</p>
            <p className="text-gray-700 mb-3"><strong>Assistências:</strong> {jogadora.assistencias}</p>
            <p className="text-gray-600 text-center">{jogadora.descricao}</p>
          </article>
        ))}
      </section>

      {/* Segunda camada */}
      <section className="flex flex-wrap justify-center gap-8" aria-label="Segunda camada de jogadoras">
        {jogadorasDuplicadas.slice(3, 6).map((jogadora, idx) => (
          <article key={idx + 3} className="bg-white rounded-2xl shadow-lg p-8 w-96 flex flex-col items-center">
            <img
              src={jogadora.imagem}
              alt={`Foto de ${jogadora.nome}`}
              className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-purple-500"
            />
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">{jogadora.nome}</h2>
            <p className="text-gray-700 mb-1"><strong>Posição:</strong> {jogadora.posicao}</p>
            <p className="text-gray-700 mb-1"><strong>Idade:</strong> {jogadora.idade} anos</p>
            <p className="text-gray-700 mb-1"><strong>Cidade:</strong> {jogadora.cidade}</p>
            <p className="text-gray-700 mb-1"><strong>Gols:</strong> {jogadora.gols}</p>
            <p className="text-gray-700 mb-1"><strong>Jogos:</strong> {jogadora.jogos}</p>
            <p className="text-gray-700 mb-3"><strong>Assistências:</strong> {jogadora.assistencias}</p>
            <p className="text-gray-600 text-center">{jogadora.descricao}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
