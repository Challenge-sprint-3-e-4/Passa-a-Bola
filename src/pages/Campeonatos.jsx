import React from "react";
import img4 from "../assets/jogadoras.jpg";

export default function Campeonatos() {
  return (
    <>
      <main
        className="flex flex-col items-center justify-center h-screen bg-gray-100 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${img4})`,
        }}
      >
        <h1 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-gray-800 bg-white bg-opacity-80 px-8 py-3 rounded shadow">
          Página de Campeonatos
        </h1>
        <h2 className="bg-white text-3xl font-bold mt-24 mb-8 text-center drop-shadow-lg rounded-3xl px-6 py-4">
          Se interessou? 
          Clique no botão abaixo e se inscreva para participar dos Campeonatos!
        </h2>
        <div className="bg-opacity-80 p-8 rounded mt-0">
          <button className="px-12 py-4 text-xl bg-blue-600 text-white rounded hover:bg-blue-700 mt-60">
            Clique aqui
          </button>
        </div>
      </main>
    </>
  );
}