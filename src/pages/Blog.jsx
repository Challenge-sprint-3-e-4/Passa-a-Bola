import { useState } from "react";
import "../index.css";
import jogadora1 from "../assets/jogadora1.jpg";
import jogadora2 from "../assets/jogadora2.jpg";
import Swal from "sweetalert2";

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      titulo: "Minha Jornada: do amador ao profissional",
      resumo:
        "A história de como saí dos campos de várzea para o futebol profissional, superando preconceitos e...",
      autor: "A",
      categoria: "Superação",
      imagem: jogadora1,
    },
    {
      id: 2,
      titulo: "Sonhos que viram realidade",
      resumo:
        "Como a persistência e o apoio da família abriram portas no futebol e mudaram minha trajetória...",
      autor: "B",
      categoria: "Superação",
      imagem: jogadora2,
    },
  ]);

  const [tituloHistoria, setTituloHistoria] = useState("");
  const [categoriaHistoria, setCategoriaHistoria] = useState("Superação");
  const [novaHistoria, setNovaHistoria] = useState("");
  const [imagemUpload, setImagemUpload] = useState(null);

  const adicionarHistoria = () => {
    if (!tituloHistoria || !novaHistoria) {
      Swal.fire({
        icon: "warning",
        title: "Atenção",
        text: "Preencha todos os campos antes de publicar",
        confirmButtonColor: "var(--color-roxo)",
      });
      return;
    }

    Swal.fire({
      title: "Tem certeza?",
      text: "Sua história será publicada no blog",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "var(--color-verde)",
      cancelButtonColor: "var(--color-rosa)",
      confirmButtonText: "Sim, publicar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const novoPost = {
          id: posts.length + 1,
          titulo: tituloHistoria,
          resumo: novaHistoria,
          autor: "U",
          categoria: categoriaHistoria,
          imagem: imagemUpload
            ? URL.createObjectURL(imagemUpload)
            : "https://via.placeholder.com/400x250",
        };
        setPosts([novoPost, ...posts]);
        setTituloHistoria("");
        setCategoriaHistoria("Superação");
        setNovaHistoria("");
        setImagemUpload(null);
        Swal.fire("Publicado!", "Sua história foi adicionada ao blog.", "success");
      }
    });
  };

  return (
    <div className="flex flex-col items-center">
      {/* Faixa colorida com título */}
      <div className="w-full h-20 bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] flex flex-col justify-center items-center shadow-md">
        <h1 className="text-3xl font-bold text-white">Histórias que inspiram</h1>
      </div>

      <div className="p-6 max-w-6xl w-full">
        {/* Formulário */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-10 flex flex-col gap-4">
          <input
            type="text"
            value={tituloHistoria}
            onChange={(e) => setTituloHistoria(e.target.value)}
            placeholder="Título da História"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[var(--color-roxo)]"
          />

          <select
            value={categoriaHistoria}
            onChange={(e) => setCategoriaHistoria(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[var(--color-roxo)]"
          >
            <option value="Superação">Superação</option>
            <option value="Comunidade">Comunidade</option>
            <option value="Inspiração">Inspiração</option>
            <option value="Curiosidade">Curiosidade</option>
          </select>

          <textarea
            value={novaHistoria}
            onChange={(e) => setNovaHistoria(e.target.value)}
            placeholder="Compartilhe sua história..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[var(--color-roxo)]"
          />

          <div className="flex gap-3">
            {/* Botão estilizado para inserir imagem */}
            <label className="inline-block px-4 py-2 bg-[var(--color-rosa)] text-white font-semibold rounded-lg cursor-pointer hover:opacity-90">
              Inserir Imagem
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImagemUpload(e.target.files[0])}
              />
            </label>

            <button
              onClick={adicionarHistoria}
              className="px-6 py-2 rounded-lg bg-[var(--color-roxo)] text-white font-semibold hover:opacity-90"
            >
              Publicar História
            </button>
          </div>

          {imagemUpload && (
            <img
              src={URL.createObjectURL(imagemUpload)}
              alt="Pré-visualização"
              className="max-h-40 rounded-lg border mt-3"
            />
          )}
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col h-[450px] bg-white rounded-xl border shadow-sm overflow-hidden"
            >
              <img
                src={post.imagem}
                alt={post.titulo}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-sm mb-2">
                  <span className="bg-[var(--color-verde)] text-white px-3 py-1 rounded-full font-semibold">
                    {post.categoria}
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

                <h2 className="text-lg font-bold text-black mb-1">{post.titulo}</h2>
                <p className="text-gray-400 text-sm leading-snug flex-grow">
                  {post.resumo}
                </p>

                <div className="flex items-center justify-between border-t pt-3 mt-auto">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-rosa)] text-white font-bold">
                    {post.autor}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
