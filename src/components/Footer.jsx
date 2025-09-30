import Logo from "../assets/logo.png";
import SocialImage from "../assets/midias.png";

export default function Footer() {
  return (
    <footer className="bg-[#3B1460] text-white py-3 mt-auto" role="contentinfo">
      <div className="container mx-auto px-4 flex flex-col items-center gap-2">

        {/* Logo + Título lado a lado */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo Passa a Bola" className="h-7 w-7" />
          <p
            role="heading"
            aria-level="2"
            className="text-lg md:text-xl font-bold bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] bg-clip-text text-transparent"
          >
            PASSA A BOLA
          </p>
        </div>

        {/* Frase */}
        <p className="text-center text-white text-xs md:text-sm max-w-sm leading-snug">
          Conectando sonhos, construindo futuros no futebol feminino brasileiro.
        </p>

        {/* Redes sociais (imagem decorativa, pois não há links no MVP) */}
        <div>
          <img
            src={SocialImage}
            alt=""
            aria-hidden="true"
            className="w-28 md:w-40 object-contain"
          />
        </div>

        {/* Copyright */}
        <p className="text-[10px] md:text-xs text-white/80 text-center">
          &copy; 2025 Todos os direitos reservados Passa a Bola
        </p>
      </div>
    </footer>
  );
}
