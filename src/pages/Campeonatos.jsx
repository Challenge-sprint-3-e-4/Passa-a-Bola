import { useState } from "react";
import img4 from "../assets/jogadoras.jpg";
import Trofeu from "../assets/trofeu.png";

export default function Campeonatos() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [jogadoras, setJogadoras] = useState([]);
  const [times, setTimes] = useState([]);
  const [vagas, setVagas] = useState({
    goleira: [],
    defensora: [],
    meio: [],
    atacante: []
  });
  const [nome, setNome] = useState("");
  const [camisa, setCamisa] = useState("");
  const [posicao, setPosicao] = useState("");
  const [mensagem, setMensagem] = useState("");

  const PADRAO = { goleira: 1, defensora: 2, meio: 2, atacante: 2 };

  const criarTime = () => {
    const nomeTime = `Time ${times.length + 1}`;
    setTimes((prev) => [...prev, nomeTime]);
    setVagas((prev) => ({
      goleira: [...prev.goleira, PADRAO.goleira],
      defensora: [...prev.defensora, PADRAO.defensora],
      meio: [...prev.meio, PADRAO.meio],
      atacante: [...prev.atacante, PADRAO.atacante]
    }));
    return times.length;
  };

  const handleCadastro = (e) => {
    e.preventDefault();
    let timeIndex = -1;
    let vagasTemp = { ...vagas };

    for (let i = 0; i < times.length; i++) {
      if (posicao === "Goleira" && vagasTemp.goleira[i] > 0) {
        vagasTemp.goleira[i]--;
        timeIndex = i;
        break;
      } else if (posicao === "Defensora" && vagasTemp.defensora[i] > 0) {
        vagasTemp.defensora[i]--;
        timeIndex = i;
        break;
      } else if (posicao === "Meio" && vagasTemp.meio[i] > 0) {
        vagasTemp.meio[i]--;
        timeIndex = i;
        break;
      } else if (posicao === "Atacante" && vagasTemp.atacante[i] > 0) {
        vagasTemp.atacante[i]--;
        timeIndex = i;
        break;
      }
    }

    if (timeIndex === -1) {
      timeIndex = criarTime();
      vagasTemp = {
        goleira: [...vagasTemp.goleira],
        defensora: [...vagasTemp.defensora],
        meio: [...vagasTemp.meio],
        atacante: [...vagasTemp.atacante]
      };
      if (posicao === "Goleira") vagasTemp.goleira[timeIndex]--;
      else if (posicao === "Defensora") vagasTemp.defensora[timeIndex]--;
      else if (posicao === "Meio") vagasTemp.meio[timeIndex]--;
      else if (posicao === "Atacante") vagasTemp.atacante[timeIndex]--;
    }

    const timeEscolhido = times[timeIndex] || `Time ${timeIndex + 1}`;
    setJogadoras((prev) => [
      ...prev,
      { nome, camisa, posicao, time: timeEscolhido }
    ]);
    setVagas(vagasTemp);

    setMensagem(
      `Você está no ${timeEscolhido} em posição de ${posicao}. Aguarde um tempo e entraremos em contato com você.`
    );

    setNome("");
    setCamisa("");
    setPosicao("");
  };

  return (
    <>
      {!mostrarCadastro ? (
        <main className="flex flex-col items-center bg-gray-50 text-gray-800 min-h-screen">
          {/* HERO */}
          <section
            className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden"
            aria-label="Banner principal dos campeonatos Passa a Bola"
          >
            <img
              src={img4}
              alt="Jogadoras em campo participando de campeonato"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-roxo)]/70 via-[var(--color-rosa)]/60 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50 to-transparent z-10" />

            <div className="relative z-20 text-center px-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] bg-clip-text text-transparent mb-4 drop-shadow-lg">
                Campeonatos Passa a Bola
              </h1>
              <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Onde o talento se transforma em oportunidade e o futebol feminino brilha.
              </p>
            </div>
          </section>

          {/* CARDS DE CAMPEONATOS */}
          <section
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 mb-16 px-6 max-w-6xl"
            aria-label="Campeonatos realizados e futuros"
          >
            {/* Copa 2024 */}
            <article className="relative bg-white p-8 rounded-2xl shadow-lg border-t-8 border-[var(--color-roxo)] transition-transform hover:scale-105">
              <img
                src={Trofeu}
                alt="Troféu da Copa Passa a Bola 2024"
                className="absolute right-4 top-4 w-14 opacity-80"
              />
              <h2 className="text-3xl font-bold text-[var(--color-roxo)] mb-4">
                Copa Passa a Bola 2024
              </h2>
              <p className="text-gray-700 mb-3 text-lg">
                O torneio que marcou o início de uma nova era no futebol feminino.
              </p>
              <ul className="text-gray-600 mb-4 text-sm leading-relaxed list-disc ml-6">
                <li>🏟️ 16 equipes participantes</li>
                <li>👩‍🦰 Mais de 200 jogadoras</li>
                <li>🌆 Realizada em São Paulo</li>
                <li>🤝 Parcerias com 12 clubes</li>
              </ul>
              <div className="mt-4 flex flex-col gap-2">
                <p className="text-xl font-semibold text-[var(--color-verde)]">
                  Gols marcados:{" "}
                  <span className="text-4xl font-extrabold">87</span>
                </p>
                <p className="text-xl font-semibold text-[var(--color-rosa)]">
                  Times revelados:{" "}
                  <span className="text-4xl font-extrabold">8</span>
                </p>
              </div>
            </article>

            {/* Desafio 2025 */}
            <article className="relative bg-white p-8 rounded-2xl shadow-lg border-t-8 border-[var(--color-verde)] transition-transform hover:scale-105">
              <img
                src={Trofeu}
                alt="Troféu do Desafio das Estrelas 2025"
                className="absolute right-4 top-4 w-14 opacity-80"
              />
              <h2 className="text-3xl font-bold text-[var(--color-verde)] mb-4">
                Desafio das Estrelas 2025
              </h2>
              <p className="text-gray-700 mb-3 text-lg">
                O próximo grande evento que vai unir jogadoras de todo o Brasil.
              </p>
              <ul className="text-gray-600 mb-4 text-sm leading-relaxed list-disc ml-6">
                <li>📅 Previsto para o 1º semestre de 2025</li>
                <li>🌍 Times de 5 estados brasileiros</li>
                <li>📊 Estatísticas e dados em tempo real</li>
                <li>🎥 Transmissão digital com cobertura nacional</li>
              </ul>
              <div className="mt-4 flex flex-col gap-2">
                <p className="text-xl font-semibold text-[var(--color-roxo)]">
                  Times confirmados:{" "}
                  <span className="text-4xl font-extrabold">12</span>
                </p>
                <p className="text-xl font-semibold text-[var(--color-rosa)]">
                  Estreias esperadas:{" "}
                  <span className="text-4xl font-extrabold">4</span>
                </p>
              </div>
            </article>
          </section>

          {/* POR QUE PARTICIPAR (TEXTO ATUALIZADO) */}
          <section className="bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] text-white rounded-xl shadow-md p-10 max-w-4xl text-center mb-10 mx-4">
            <h2 className="text-2xl font-bold mb-4">
              Por que participar do Passa a Bola?
            </h2>
            <p className="text-base mb-2">
              Uma oportunidade real de ser conhecida por clubes, olheiros e
              profissionais do futebol feminino.
            </p>
            <p className="text-base">
              Aqui, você se conecta com outras jogadoras que compartilham o mesmo propósito:
              fazer o futebol feminino crescer e conquistar novos espaços. ⚽💜
            </p>
          </section>

          {/* BOTÃO PARTICIPAR (INALTERADO) */}
          <button
            type="button"
            onClick={() => setMostrarCadastro(true)}
            className="mb-20 px-8 py-3 rounded-xl bg-gradient-to-r from-[var(--color-roxo)] to-[var(--color-verde)] text-white text-lg font-bold shadow-md hover:scale-105 transition"
          >
            Participar
          </button>
        </main>
      ) : (
        // FORMULÁRIO INALTERADO
        <section className="p-6 max-w-md mx-auto bg-gray-100 rounded-2xl shadow-md mt-10">
          <h1 className="text-xl font-bold mb-4 text-center text-[var(--color-roxo)]">
            Inscrição de Jogadora
          </h1>

          <form onSubmit={handleCadastro} className="space-y-3">
            <label htmlFor="nomeJogadora" className="sr-only">
              Nome da jogadora
            </label>
            <input
              type="text"
              id="nomeJogadora"
              placeholder="Nome da jogadora"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />

            <label htmlFor="numeroCamisa" className="sr-only">
              Número da camiseta
            </label>
            <input
              type="number"
              id="numeroCamisa"
              placeholder="Número da camiseta"
              value={camisa}
              onChange={(e) => setCamisa(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />

            <label htmlFor="posicao" className="sr-only">
              Selecione a posição
            </label>
            <select
              id="posicao"
              value={posicao}
              onChange={(e) => setPosicao(e.target.value)}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Selecione a posição</option>
              <option value="Goleira">Goleira</option>
              <option value="Defensora">Defensora</option>
              <option value="Meio">Meio</option>
              <option value="Atacante">Atacante</option>
            </select>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[var(--color-roxo)] to-[var(--color-verde)] text-white font-semibold py-2 rounded shadow-md hover:scale-105 transition"
            >
              Inscrever
            </button>
          </form>

          {mensagem && (
            <div role="status" className="mt-4 p-3 bg-green-200 text-green-800 rounded">
              {mensagem}
            </div>
          )}

          <button
            type="button"
            onClick={() => setMostrarCadastro(false)}
            className="mt-4 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
          >
            Voltar
          </button>
        </section>
      )}
    </>
  );
}
