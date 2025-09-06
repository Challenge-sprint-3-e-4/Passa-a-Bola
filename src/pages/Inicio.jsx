import React from "react";
import img1 from "../assets/img1.PNG";

export default function Inicio() {
  return (
    <main className="relative w-full h-[350px] md:h-[400px] lg:h-[550px] overflow-hidden">
      {/* Imagem principal */}
      <img
        src={img1}
        alt="Início"
        className="w-full h-full object-cover"
      />

      {/* Overlay com textos */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2">
          Histórias que jogam, talentos que brilham, clubes que acreditam.
        </h1>
        <p className="text-xs md:text-sm lg:text-base text-white max-w-2xl">
          Uma vitrine para jogadoras. Uma ponte para clubes. Um futuro para o futebol feminino.
        </p>
      </div>
    </main>
  );
}
