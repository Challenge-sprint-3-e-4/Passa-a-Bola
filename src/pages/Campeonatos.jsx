import { useState } from "react";
import img4 from "../assets/jogadoras.jpg";

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
        <main
          className="flex flex-col items-center justify-center h-screen bg-gray-100 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${img4})` }}
        >
          <h1 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-gray-800 bg-white bg-opacity-80 px-8 py-3 rounded shadow">
            Campeonatos
          </h1>
          <h2 className="bg-white text-3xl font-bold mt-24 text-gray-800 mb-8 text-center drop-shadow-lg rounded-3xl px-6 py-4">
            Se interessou? <br />
            Clique no botão abaixo e se inscreva para participar dos Campeonatos!
          </h2>
          <div className="bg-opacity-80 p-8 rounded mt-0">
            <button
              type="button"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-roxo)] to-[var(--color-verde)] text-white text-lg font-bold shadow-md hover:scale-105 transition"
              onClick={() => setMostrarCadastro(true)}
            >
              Clique aqui
            </button>
          </div>
        </main>
      ) : (
        <section className="p-6 max-w-md mx-auto bg-gray-100 rounded-2xl shadow-md mt-10">
          <h1 className="text-xl font-bold mb-4">Inscrição de Jogadora</h1>

          <form onSubmit={handleCadastro} className="space-y-3">
            <label htmlFor="nomeJogadora" className="sr-only">Nome da jogadora</label>
            <input
              type="text"
              id="nomeJogadora"
              placeholder="Nome da jogadora"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />

            <label htmlFor="numeroCamisa" className="sr-only">Número da camiseta</label>
            <input
              type="number"
              id="numeroCamisa"
              placeholder="Número da camiseta"
              value={camisa}
              onChange={(e) => setCamisa(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />

            <label htmlFor="posicao" className="sr-only">Selecione a posição</label>
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
              className="w-full bg-purple-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
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
