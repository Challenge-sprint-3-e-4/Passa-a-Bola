import React from "react";
import img1 from "../assets/jogadora1.jpg";
import img2 from "../assets/jogadora2.jpg";
import img3 from "../assets/jogadora3.jpg";

const jogadoras = [
  {
    nome: "Ana Souza",
    imagem: img1,
    avaliacao: "O Passa Bola é incrível para treinar em equipe! Recomendo para todos.",
    estrelas: 5
  },
  {
    nome: "Bruna Lima",
    imagem: img2,
    avaliacao: "Gostei muito da dinâmica do jogo, ajuda bastante na comunicação do time.",
    estrelas: 4
  },
  {
    nome: "Carla Mendes",
    imagem: img3,
    avaliacao: "Excelente para desenvolver habilidades e fortalecer o grupo!",
    estrelas: 5
  }
];

// Componente para exibir estrelas
function Estrelas({ quantidade }) {
  return (
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 ${i < quantidade ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
        </svg>
      ))}
    </div>
  );
}

export default function Jogadoras() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">Página de Jogadoras</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {jogadoras.map((jogadora, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 w-96 h-96 flex flex-col items-center">
              <img
                src={jogadora.imagem}
                alt={jogadora.nome}
                className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-blue-500"
              />
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">{jogadora.nome}</h2>
              <Estrelas quantidade={jogadora.estrelas} />
              <p className="text-gray-700 text-center">{jogadora.avaliacao}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}