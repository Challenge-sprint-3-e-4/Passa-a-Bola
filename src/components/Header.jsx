import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import Logo from "../assets/logo.png"; // Importação correta da imagem

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center py-4 px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-15 w-15" /> {/* Usando a variável */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] bg-clip-text text-transparent">
            PASSA A BOLA
          </h1>
        </div>

        {/* Links do menu */}
        <ul
          className={`
            flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 text-gray-600 font-medium
            ${isOpen ? "flex" : "hidden"} lg:flex
            absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-md lg:shadow-none
          `}
        >
          <li>
            <Link
              href="/"
              className={`${location === "/" ? "text-[var(--color-roxo)]" : "text-gray-600"} hover:text-[var(--color-roxo)]`}
              onClick={() => setIsOpen(false)}
            >
              Início
            </Link>
          </li>
          <li>
            <Link href="/jogadoras" onClick={() => setIsOpen(false)} className="hover:text-[var(--color-roxo)]">
              Jogadoras
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-[var(--color-roxo)]">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/clubes" onClick={() => setIsOpen(false)} className="hover:text-[var(--color-roxo)]">
              Clubes
            </Link>
          </li>
          <li>
            <Link href="/campeonatos" onClick={() => setIsOpen(false)} className="hover:text-[var(--color-roxo)]">
              Campeonatos
            </Link>
          </li>
          <li>
            <Link href="/escolinhas" onClick={() => setIsOpen(false)} className="hover:text-[var(--color-roxo)]">
              Escolinhas
            </Link>
          </li>
        </ul>

        {/* Botões (desktop) */}
        <div className="hidden lg:flex gap-3">
          <Link
            href="/login"
            className="px-4 py-2 border border-gray-400 text-[var(--color-roxo)] rounded-lg hover:bg-gray-100"
          >
            Entrar
          </Link>
          <button
            className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] hover:opacity-90"
          >
            Cadastrar
          </button>
        </div>

        {/* Botão hambúrguer (mobile) */}
        <button
          className="lg:hidden ml-4 p-2 rounded-md border border-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

      </nav>
    </header>
  );
}
