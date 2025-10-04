import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink = "/Form.jsx",
  secondaryButtonText,
  secondaryButtonLink = "/clubes",
  variant = "gradient",
}) => {
  return (
    <section id ="cta" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`relative rounded-3xl p-12 md:p-16 text-center shadow-lg overflow-hidden ${
            variant === "gradient"
              ? "bg-gradient-to-br from-purple-600 via-pink-500 to-green-400 text-white"
              : "bg-gray-100 text-gray-900"
          }`}
        >
          {/* Decoração */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 leading-tight ${
                variant === "gradient" ? "text-white" : "text-purple-700"
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-lg md:text-xl mb-10 ${
                variant === "gradient" ? "text-white/90" : "text-gray-700"
              }`}
            >
              {description}
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Botão principal */}
              <Link to={primaryButtonLink}>
                <button
                  className={`flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition ${
                    variant === "gradient"
                      ? "bg-white text-purple-700 hover:bg-white/90"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>

              {/* Botão secundário */}
              {secondaryButtonText && (
                <Link to={secondaryButtonLink}>
                  <button
                    className={`px-6 py-3 rounded-lg font-semibold border-2 transition ${
                      variant === "gradient"
                        ? "border-white text-white hover:bg-white hover:text-purple-700"
                        : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                    }`}
                  >
                    {secondaryButtonText}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

