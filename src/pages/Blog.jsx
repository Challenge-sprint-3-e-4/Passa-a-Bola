import React from "react";
import "../index.css";
import jogadora1 from "../assets/jogadora1.jpg";
import jogadora2 from "../assets/jogadora2.jpg";

const Blog = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Histórias que inspiram</h1>

      <div className="flex gap-6">
        {/* Card 1 */}
        <div className="max-w-sm bg-white rounded-xl border shadow-sm overflow-hidden">
          <img src={jogadora1} alt="Jogadora 1" className="w-full h-70 object-cover" />

          <div className="p-4">
            <div className="flex items-center gap-3 text-sm mb-2">
              <span className="bg-[var(--color-verde)] text-white px-3 py-1 rounded-full font-semibold">
                Superação
              </span>
              <div className="flex items-center text-gray-400 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>5 min de leitura</span>
              </div>
            </div>

            <h2 className="text-lg font-bold text-black mb-1">
              Minha Jornada: do amador ao profissional
            </h2>

            <p className="text-gray-400 text-sm leading-snug">
              A história de como saí dos campos de várzea para o futebol profissional, superando preconceitos e...
            </p>
          </div>

          <div className="flex items-center justify-between p-4 border-t">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-rosa)] text-white font-bold">
              A
            </div>
            <button className="flex items-center gap-1 text-[var(--color-roxo)] font-semibold hover:underline">
              Leia mais
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm bg-white rounded-xl border shadow-sm overflow-hidden">
          <img src={jogadora2} alt="Jogadora 2" className="w-full h-70 object-cover" />

          <div className="p-4">
            <div className="flex items-center gap-3 text-sm mb-2">
              <span className="bg-[var(--color-verde)] text-white px-3 py-1 rounded-full font-semibold">
                Superação
              </span>
              <div className="flex items-center text-gray-400 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>5 min de leitura</span>
              </div>
            </div>

            <h2 className="text-lg font-bold text-black mb-1">
              Minha Jornada: do amador ao profissional
            </h2>
            <p className="text-gray-400 text-sm leading-snug">
              A história de como saí dos campos de várzea para o futebol profissional, superando preconceitos e...
            </p>
          </div>

          <div className="flex items-center justify-between p-4 border-t">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-rosa)] text-white font-bold">
              B
            </div>
            <button className="flex items-center gap-1 text-[var(--color-roxo)] font-semibold hover:underline">
              Leia mais
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Botão grande embaixo */}
      <button className="mt-10 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-roxo)] to-[var(--color-verde)] text-white text-lg font-bold shadow-lg hover:scale-105 transition">
        Ver todas as histórias
      </button>
    </div>
  );
};

export default Blog;