import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "../assets/logo.png";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setLocation("/login");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo + Nome */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-10 w-10" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] bg-clip-text text-transparent">
            PASSA A BOLA
          </h1>
        </div>

        {/* Links do menu */}
        <ul
          className={`lg:flex lg:items-center lg:gap-6 text-gray-600 font-medium transition-all duration-300
          ${isOpen ? "block absolute top-16 right-0 w-56 bg-white shadow-md p-4" : "hidden"} lg:static lg:block`}
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

          {/* Botões mobile */}
          <div className="flex flex-col gap-3 mt-4 lg:hidden">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border border-gray-400 text-[var(--color-roxo)] rounded-lg hover:bg-gray-100 text-center"
                >
                  Entrar
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] hover:opacity-90 text-center"
                >
                  Cadastrar
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] hover:opacity-90 text-center"
              >
                Sair
              </button>
            )}
          </div>
        </ul>

        {/* Botões desktop */}
        <div className="hidden lg:flex gap-3">
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="px-4 py-2 border border-gray-400 text-[var(--color-roxo)] rounded-lg hover:bg-gray-100"
              >
                Entrar
              </Link>
              <Link
                className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] hover:opacity-90"
              >
                Cadastrar
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] hover:opacity-90"
            >
              Sair
            </button>
          )}
        </div>

        {/* Botão hambúrguer */}
        <button
          className="lg:hidden ml-auto p-2 rounded-md border border-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>
    </header>
  );
}
