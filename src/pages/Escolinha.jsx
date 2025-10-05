import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Swal from "sweetalert2";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import bola1 from "../assets/bola1.jpg";
import bola2 from "../assets/bola2.jpg";
import bola3 from "../assets/bola3.jpg";
import ballIcon from "../assets/pinRoxo.png"; 


const customBallIcon = new L.Icon({
  iconUrl: ballIcon,
  iconSize: [40, 40], 
  iconAnchor: [20, 40], 
  popupAnchor: [0, -35], 
});

export default function Escolinhas() {
  const [results, setResults] = useState([]);
  const [position, setPosition] = useState([-23.5505, -46.6333]); // São Paulo

  const handleSearchNearby = () => {
    if (!navigator.geolocation) {
      Swal.fire({
        icon: "error",
        title: "Geolocalização não suportada",
        text: "Seu navegador não suporta geolocalização.",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);

        const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:100000,${latitude},${longitude})[sport=soccer];out;`;

        fetch(overpassUrl)
          .then((res) => res.json())
          .then((data) => {
            if (data.elements && data.elements.length > 0) {
              setResults(data.elements);
              Swal.fire({
                icon: "success",
                title: "Escolinhas encontradas!",
                text: `${data.elements.length} escolinhas de futebol próximas foram localizadas ⚽`,
              });
            } else {
              setResults([]);
              Swal.fire({
                icon: "warning",
                title: "Nenhuma escolinha encontrada",
                text: "Não encontramos nenhuma escolinha de futebol perto de você 😢",
              });
            }
          });
      },
      () => {
        Swal.fire({
          icon: "error",
          title: "Erro na localização",
          text: "Não conseguimos acessar sua localização. Verifique as permissões.",
        });
      }
    );
  };

  const escolinhasCadastradas = [
    {
      nome: "Escolinha Futebol Feminino SP",
      cidade: "São Paulo, SP",
      endereco: "Av. Paulista, 1000",
      telefone: "(11) 98765-4321",
      horarios: "Seg-Sáb: 14h às 20h | Sáb: 8h-12h",
      faixaEtaria: "6-17 anos",
      imagem: bola1,
    },
    {
      nome: "Academia de Futebol Feminino RJ",
      cidade: "Rio de Janeiro, RJ",
      endereco: "Rua das Laranjeiras, 500",
      telefone: "(21) 97654-1210",
      horarios: "Seg-Sáb: 15h às 21h | Sáb: 9h-13h",
      faixaEtaria: "5-16 anos",
      imagem: bola2,
    },
    {
      nome: "Escolinha Talento Feminino BH",
      cidade: "Belo Horizonte, MG",
      endereco: "Av. Afonso Pena, 2000",
      telefone: "(31) 98543-2109",
      horarios: "Seg-Sáb: 14h às 19h | Sáb: 8h-11h",
      faixaEtaria: "7-15 anos",
      imagem: bola3,
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      {/* 🌈 Hero Procurar Escolinhas */}
      <section className="w-full py-20 bg-gradient-to-r from-purple-700 via-pink-500 to-green-400 text-center text-white shadow-md">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Encontre Escolinhas de Futebol Feminino Perto de Você ⚽
          </h1>
          <p className="text-sm md:text-base opacity-90 mb-8">
            Utilize o mapa interativo para descobrir as escolinhas mais próximas da sua localização
          </p>
          <button
            onClick={handleSearchNearby}
            className="px-8 py-3 rounded-lg font-semibold bg-white text-purple-700 hover:bg-gray-100 transition-all shadow-md"
          >
            Procurar Escolinhas Próximas
          </button>
        </div>
      </section>

      {/* 🗺️ Mapa Interativo */}
      <section className="flex flex-col items-center justify-center py-16 px-6">
        <div className="w-full max-w-5xl h-[400px] rounded-2xl shadow-md overflow-hidden bg-white border relative">
          <MapContainer center={position} zoom={13} style={{ width: "100%", height: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* ⚽ Marcadores personalizados */}
            {results.map((el, index) => (
              <Marker key={index} position={[el.lat, el.lon]} icon={customBallIcon}>
                <Popup>⚽ Escolinha encontrada!</Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Texto centralizado no mapa */}
          {results.length === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 .828-.672 1.5-1.5 1.5S9 11.828 9 11s.672-1.5 1.5-1.5S12 10.172 12 11z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19.5 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
              <p className="font-semibold text-lg">Mapa Interativo de Escolinhas</p>
              <p className="text-sm text-gray-500">
                Visualize as escolinhas mais próximas de você
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 🏫 Escolinhas Cadastradas */}
      <section className="container mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Escolinhas{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Cadastradas
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {escolinhasCadastradas.map((e, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition-all"
            >
              <div className="relative">
                <img src={e.imagem} alt={e.nome} className="w-full h-48 object-cover" />
                <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                  {e.faixaEtaria}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{e.nome}</h3>
                <p className="text-sm text-gray-600">{e.endereco}</p>
                <p className="text-sm text-gray-600">{e.cidade}</p>
                <p className="text-sm text-gray-600 mb-2">{e.telefone}</p>
                <p className="text-xs text-gray-500 mb-4">{e.horarios}</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                    Entrar em Contato
                  </button>
                  <button className="flex-1 border border-purple-600 text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition">
                    Ver no Mapa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📢 Cadastrar Escolinha */}
      <section className="flex justify-center px-6 pb-20">
        <div className="w-full max-w-3xl rounded-xl text-center text-white py-12 px-6 bg-gradient-to-r from-purple-700 via-pink-500 to-teal-400 shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            Tem uma escolinha de futebol feminino?
          </h2>
          <p className="text-sm opacity-90 mb-8">
            Cadastre sua escolinha gratuitamente e seja encontrada por centenas de famílias
          </p>
          <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Cadastrar Escolinha
          </button>
        </div>
      </section>
    </main>
  );
}
