import React from "react";
import Logo from "../assets/logo.png"; // Sua logo
import SocialImage from "../assets/midias.png"; // Imagem retangular com 6 logos

export default function Footer() {
  return (
    <footer className="bg-[#3B1460] text-white py-12">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">

        {/* Logo + Título */}
        <div className="flex flex-col items-center gap-2">
          <img src={Logo} alt="Logo" className="h-12 w-12" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] bg-clip-text text-transparent">
            PASSA A BOLA
          </h1>
        </div>

        {/* Frase */}
        <p className="text-center text-white text-sm md:text-base max-w-lg">
          Conectando sonhos, construindo futuros no futebol feminino brasileiro.
        </p>

        {/* Redes sociais */}
        <div className="mt-4">
          <img src={SocialImage} alt="Redes sociais" className="w-full max-w-md object-contain" />
        </div>

        {/* Copyright */}
        <p className="mt-6 text-xs md:text-sm text-white/80 text-center">
          &copy; 2025 Todos os direitos reservados Passa a Bola
        </p>
      </div>
    </footer>
  );
}
